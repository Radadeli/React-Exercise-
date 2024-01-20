// import { useState } from "react";
// import { GitHubUser } from "./GitHubUser";

// export function GitHubUsers() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [usernames, setUsernames] = useState([]);

//   const handleSearch = () => {
//     if (searchTerm.trim() !== "") {
//       setUsernames([...usernames, searchTerm]);
//     }
//     setSearchTerm("");
//   };
//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleSearch();
//         }}
//       >
//         <label>
//           Search GitHub User:
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </label>
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {usernames.map((username) => (
//           <li key={username}>
//             <GitHubUser username={username} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import { useGitHubUser } from "./useGitHubUser";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export function GitHubUsers({ username }) {
  const { data, error, refetchUser, isLoading } = useGitHubUser(username);

  return (
    <div>
      <button onClick={refetchUser}>Reload user data</button>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>An error has occurred</h3>}
      {data && !error && (
        <ul>
          <li key={user.login}>
          <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        </ul>
      )}
      <Outlet/>
    </div>
  );
}

export default GitHubUsers;