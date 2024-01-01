import { useState } from "react"

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState('');


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
        const handlePasswordChange = (event) => {
            setPassword(event.target.value);
        }
   const handleRememberChange = (event) => {
            setRemember(event.target.checked);
   }
    return(
        <div>
            <input name="username" value={username} onChange={handleUsernameChange} />
            <input name="password" type="password" value={password} onChange={handlePasswordChange}/>
            <input type="checkbox" checked={remember} onChange={handleRememberChange} />
        </div>
    )
}
