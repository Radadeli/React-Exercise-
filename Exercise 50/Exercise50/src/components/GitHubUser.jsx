import { useGitHubUser } from "./useGitHubUser";

export function GitHubUser({ username }) {
  const { data, error, refetchUser, isLoading } = useGitHubUser(username);

  return (
    <div>
      <button onClick={refetchUser}>Reload user data</button>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>An error has occurred</h3>}
      {data && !error && (
        <ul>
          <li key={data.login}>{data.login}</li>
        </ul>
      )}
    </div>
  );
}

export default GitHubUser;

