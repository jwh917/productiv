import React, { useEffect, useState } from "react";
import Login from "./Login";
import ProfileForm from "./ProfileForm";
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Todo from "./Todo";
import NavBar from "./NavBar";
import Priority from "./Priority";



function App() {

  const [user, setUser] = useState(null);
  

  useEffect(() => {

    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });

    
  }, []);


  if (!user) return <Login setUser={setUser} />;


  if (user.profile === null) return <ProfileForm user={user} setUser={setUser} />


  return (
    <div className="App">
      <header className="App-header">     

        <>
        <NavBar user={user} setUser={setUser}/>
        <Switch>
          <Route exact path="/about">
            <About user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/todo">
            <Todo user={user}/>
          </Route>
          <Route exact path="/prioritybar">
            <Priority user={user}/>
          </Route>
          <Route exact path="/">
            <Home user={user}/>
          </Route>
        </Switch>
        </>

      </header>
    </div>
  );
}

export default App;
