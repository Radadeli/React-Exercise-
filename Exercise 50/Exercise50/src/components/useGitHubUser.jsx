// import { useEffect, useState } from "react";

// export function useGitHubUser(username) {

// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(false);
// const [error, setError]= useState(null)

//   async function fetchGitHubUser(username) {
//     try {
//       setLoading(true)
//       setError(null)
//       const response = await fetch(`https://api.github.com/users/${username}`);
//       const json = await response.json();
//       console.log(json);

//       if(response.status !== 200) {
//         setError(new Error())
//       }

//       setData(json);
//     } catch (error) {
//       setError(error);
//       setData(null);
//       console.log("Error", error);
//     } finally {
//         setLoading(false);
//     }
//   }
//   useEffect(() => {
//     fetchGitHubUser(username);
//   }, [username]);

//   return { data , loading , error };
// }

// export default useGitHubUser;

import useSWR from "swr";

const fetcher = url => fetch(url).then(response => response.json())

export function useGitHubUser(){
  const {data, error} = useSWR (`https://api.github.com/users/`, fetcher)

  return(
    <div>
      {!data && !error && <h3>Loading...</h3>}
      {error && <h3>An error has occurred</h3>}
      {data && !error && ( 
        <ul>
          {data.map((user) => (
            <li key={user.login}>{user.login}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default useGitHubUser;