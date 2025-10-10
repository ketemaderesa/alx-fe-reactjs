import React, { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);

    // If any errors, stop submission
    if (Object.keys(newErrors).length > 0) return;

    // Mock successful registration
    setStatus({ ok: true, msg: "Registered successfully" });
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
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
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>

      {status && (
        <p style={{ color: status.ok ? "green" : "red" }}>{status.msg}</p>
      )}
    </form>
  );
}
