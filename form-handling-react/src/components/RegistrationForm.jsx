import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  // Simple validation
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
    setStatus(null);
    if (!validate()) return;

    try {
      // Simulate API call delay
      await new Promise((res) => setTimeout(res, 800));
      setStatus({ ok: true, msg: "Registered (mock)" });
      setForm({ username: "", email: "", password: "" }); // reset
    } catch (err) {
      setStatus({ ok: false, msg: "Registration failed" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>

      {/* Username Field */}
      <div>
        <label>Username</label>
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        {errors.username && (
          <div style={{ color: "red" }}>{errors.username}</div>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && (
          <div style={{ color: "red" }}>{errors.email}</div>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && (
          <div style={{ color: "red" }}>{errors.password}</div>
        )}
      </div>

      <button type="submit">Register</button>

      {status && (
        <div
          style={{
            marginTop: 8,
            color: status.ok ? "green" : "red",
          }}
        >
          {status.msg}
        </div>
      )}
    </form>
  );
}
