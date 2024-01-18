import { useGitHubUser } from "./useGitHubUser";

export function GitHubUser({ username }) {
  const { data, loading, error, onFetchUser } = useGitHubUser(username);

  return (
    <div>
      <button onClick={() => onFetchUser(username)}>Load user data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}

export default GitHubUser;
