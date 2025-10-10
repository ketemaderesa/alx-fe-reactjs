import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.username.trim()) e.username = "Username required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    if (!form.password) e.password = "Password required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await new Promise((res) => setTimeout(res, 500));
      setStatus({ ok: true, msg: "Registered successfully (mock API)" });
      setForm({ username: "", email: "", password: "" });
    } catch {
      setStatus({ ok: false, msg: "Registration failed" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration (Controlled)</h2>

      <div>
        <label>Username:</label>
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter username"
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
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
