import { useState } from "react";

export function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState("");


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };
  const handleLoginClick = () => {
    onLogin({ username, password, remember });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    onLogin({ username, password, remember });
  };
  const handleResetForm = () => {
    setUsername("");
    setPassword("");
    setRemember("");
  };

  const isDisabled = username.trim() === "" || password.trim() === "";
  return (
    <form onSubmit={handleLogin}>
      <input name="username" value={username} onChange={handleUsernameChange} />
      <input
        name="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        type="checkbox"
        checked={remember}
        onChange={handleRememberChange}
      />
      <button onClick={handleLoginClick} disabled={isDisabled}>
        {" "}
        Login
      </button>
      <button onClick={handleResetForm}> Reset </button>
    </form>
  );
}

export default Login; 