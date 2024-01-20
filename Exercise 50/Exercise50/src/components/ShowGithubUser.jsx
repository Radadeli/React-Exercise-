
import { useParams } from 'react-router-dom';
import { GitHubUser } from './GitHubUser';

export function ShowGithubUser() {
  const { username = "radadeli" } = useParams();

  return (
    <div>
      <h1>Show GitHub List</h1>
      <GitHubUser username={username} />
    </div>
  );
}

export default ShowGithubUser;
