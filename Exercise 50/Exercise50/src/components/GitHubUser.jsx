// import { useGitHubUser } from "./useGitHubUser";

// export function GitHubUser({ username }) {
//   const { data, loading, error, onFetchUser } = useGitHubUser(username);

//   return (
//     <div>
//       <button onClick={() => onFetchUser(username)}>Load user data</button>
//       {loading && <h1>Loading...</h1>}
//       {error && <h1>There has been an error</h1>}
//       {data && <h1>{data.name}</h1>}
//     </div>
//   );
// }

// export default GitHubUser;

import useGithubUser from "./useGitHubUser";

export function GitHubUser({ username }) {

  const { data , loading , error } = useGithubUser(username);

  return (
    <div>
      {loading && <h1>Loading user...</h1>}
      {error && <h1>There is an ERROR!</h1>}
      {data && (
        <div style={{border: "2px solid black", width: "fit-content", padding: "5px"}}>
          <h3 style={{color: "blue", textDecoration: "underline"}}>{data.name} info</h3>
          <img width={"100px"} src={data.avatar_url} />
          <h2>{`Name: ${data.name}`}</h2>
          <h2>{`Username: ${data.login}`}</h2>
        </div>
      )}
    </div>
  );
}