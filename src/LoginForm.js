import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // login logic
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="center">
      <h2 className="title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="txt_field">
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <span></span>
          <label className="username">Username</label>
        </div>
        <div className="txt_field">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <span></span>
          <label className="password">Password</label>
        </div>
        <div className="txt">*password is the same as NewACIS</div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
