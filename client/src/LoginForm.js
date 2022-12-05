import React, { useState } from "react";
import { useHistory } from "react-router";


function LoginForm({ setUser, setLoginSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();


  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/"); 
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (

    <form className="loginSignUp" onSubmit={handleSubmit}>
      <h2>Login Here</h2>

      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>

      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

      <button className="formButton"> {isLoading ? "Loading..." : "Login"} </button>

      {errors.map((err) => ( <h6 key={err}>{err}</h6>))}

      <div>
        <h3>
          Don't have an account? &nbsp;
          <button onClick={() => setLoginSignup(false)}>
            Sign Up
          </button>
        </h3>
      </div>

    </form>
  );
}

export default LoginForm;
