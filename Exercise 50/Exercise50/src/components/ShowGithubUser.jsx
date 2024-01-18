
import { useParams } from 'react-router-dom';
import { GitHubUsers } from './GitHubUsers';

export function ShowGithubUser() {
  const { username } = useParams();

  return (
    <div>
      <h1>Show GitHub User</h1>
      <GitHubUsers username={username} />
    </div>
  );
}

export default ShowGithubUser;
