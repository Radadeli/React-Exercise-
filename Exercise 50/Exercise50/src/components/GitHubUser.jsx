import { useGithubUser } from "./UseGitHubUser";



export function GitHubUser({ username }) {
  const {data, loading, error, onFetchUser} = useGithubUser(username)
 
 function handleGetUserData(){
  onFetchUser(username)
 }
  return (
    <div>
     <button onClick={handleGetUserData}>Load user data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}