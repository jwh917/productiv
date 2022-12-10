import React, { useState } from "react";



function SignUpForm({ setUser, setLoginSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (


    <form className="loginSignUp" onSubmit={handleSubmit}>
      <h2>SignUp Here</h2>

      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>

      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

      <label htmlFor="passwordConformation">Password Conformation</label>
      <input type="password" placeholder="Password Conformation" id="passwordConformation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>

      <button type="submit" className="loginSignUpFormButton"> {isLoading ? "Loading..." : "Signup"} </button>

      {errors.map((err) => ( <h6 key={err}>{err}</h6>))}



      <div>
        <h3>
          Already have an account? &nbsp;
          <button className="SignUpButton" onClick={() => setLoginSignup(true)}>
            Log In
          </button>
        </h3>  
      </div>

    </form>

  );
}

export default SignUpForm;
