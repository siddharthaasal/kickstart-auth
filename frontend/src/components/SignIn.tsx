import React, { useState } from "react";
import axios from "axios";
import api from "../api";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault(); 
    console.log(email);
    console.log(password);
    try {
      const response = await api.post("http://localhost:4000/auth/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <>
      <div className="register-section">
        <p className="input-unit-name">Login</p>

        <form onSubmit={handleSubmit}>
          <input
            className="input-unit"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input-unit"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-button">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
