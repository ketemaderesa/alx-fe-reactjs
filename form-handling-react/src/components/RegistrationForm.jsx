import React, { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setStatus({ ok: false, msg: "All fields required" });
      return;
    }
    setStatus({ ok: true, msg: "Registered successfully" });
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <div>
        <label>Username:</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
      </div>

      <button type="submit">Register</button>

      {status && (
        <p style={{ color: status.ok ? "green" : "red" }}>{status.msg}</p>
      )}
    </form>
  );
}
