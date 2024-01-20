
// import useGithubUser from "./useGitHubUser";

// export function GitHubUser({ username }) {

//   const { data , loading , error } = useGithubUser(username);

//   return (
//     <div>
//       {loading && <h1>Loading user...</h1>}
//       {error && <h1>There is an ERROR!</h1>}
//       {data && (
//         <div style={{border: "2px solid black", width: "fit-content", padding: "5px"}}>
//           <h3 style={{color: "blue", textDecoration: "underline"}}>{data.name} info</h3>
//           <img width={"100px"} src={data.avatar_url} />
//           <h2>{`Name: ${data.name}`}</h2>
//           <h2>{`Username: ${data.login}`}</h2>
//         </div>
//       )}
//     </div>
//   );
// }

import useSWR from "swr";

const fetcher = url => fetch(url).then(response => response.json())

export function GitHubUser(){
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

export default GitHubUser;