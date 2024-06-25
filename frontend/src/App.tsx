import Header from "./components/Header";
import "./output.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "./api";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    api
      .get("/validate-token")
      .then((response: any) => {
        setIsAuthenticated(true);
        console.log("Token validation successful:", response.data);
      })
      .catch((error: any) => {
        console.log("Token validation failed", error);
        setIsAuthenticated(false);
      });
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <SignIn />} />
          {/* <Route path="/login">
            <SignIn />
          </Route> */}
          {/* Other routes */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
