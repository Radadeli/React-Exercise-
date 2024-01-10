import { useState } from "react";
import { GitHubUser } from "./GitHubUser";

export function GitHubUsers(){
    
        const [searchTerm, setSearchTerm] = useState("");
        const [usernames, setUsernames] = useState([]);
        
        const handleSearch = () => {
          if (searchTerm.trim() !== "") {
            setUsernames([...usernames, searchTerm]);
          }
          setSearchTerm("");
        };
    return (
        <div>
            <form onSubmit={(e) => {e.preventDefault(); handleSearch(); }}>
        <label>
            Search GitHub User: 
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

        </label>
        <button type="submit">Search</button>
            </form>
            <ul>
                {usernames.map((username) => (
                    <li key={username}>
                        <GitHubUser username={username} />
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}