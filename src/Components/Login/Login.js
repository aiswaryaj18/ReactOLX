import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../store/Context";
import Logo from "../../olx-logo.png";
import { useHistory, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(""); // Add password error message state

  const handleLogin = (e) => {
    if (!email) {
      setErrorMessage("Please Enter the Email ");
      return;
    }
    if (!password) {
      setPasswordError("Please enter your password.");
      return;
    } else {
      setPasswordError(""); // Clear the password error message
    }
    setErrorMessage("")
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <p style={{ color: "red" }}>{errorMessage}</p>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <p style={{ color: "red" }}>{passwordError}</p> {/* Display password error message */}
          <button>Login</button>
        </form>
        <Link to="/signup">
          <a style={{ color: "black" }}>Signup</a>
        </Link>
      </div>
    </div>
  );
}

export default Login;
