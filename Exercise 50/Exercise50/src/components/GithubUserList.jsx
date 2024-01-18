import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function GithubUserList () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching GitHub users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Github User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUserList;
