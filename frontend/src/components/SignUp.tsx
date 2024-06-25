import React, {useState} from "react";
import axios from "axios";


export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e:any){
        e.preventDefault(); // Prevent default form submission behavior
        console.log(email);
        console.log(password);
        try {
          const response = await axios.post("http://localhost:4000/auth/register", {
            email,
            password,
          });
          console.log("Register successful:", response.data);
          // Optionally, you can redirect to another page or show a success message here
        } catch (error) {
          console.error("Registration failed:", error);
          // Handle error states, show error messages, etc.
        }
    }

  return (
    <>
       <div className="register-section">
        <p className="input-unit-name">Register</p>

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
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
