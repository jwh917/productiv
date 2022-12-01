import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


function Login({ setUser }) {
  const [loginSignup, setLoginSignup] = useState(true);

  return (
    <div>
      <h1 className="appTitle">ProDucTiv</h1>
      {loginSignup ? (
        <>
          <LoginForm setUser={setUser} setLoginSignup={setLoginSignup}/>
        </>
      ) : (
        <>
          <SignUpForm setUser={setUser} setLoginSignup={setLoginSignup} />
        </>
      )}
    </div>
  );
}


export default Login;
