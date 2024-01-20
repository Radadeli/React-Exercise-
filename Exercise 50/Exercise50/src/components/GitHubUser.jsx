
import { useParams } from "react-router-dom";
import useGithubUser from "./useGitHubUser";

export function GitHubUser() {
  const {username} = useParams()
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

