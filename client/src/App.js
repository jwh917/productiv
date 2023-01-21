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
  const [todos, setTodos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priorities, setPriorities] = useState([]);


  useEffect(() => {

    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user)
          setTodos(user.custom_todos)
          setPriorities(user.custom_priorities)
        });
      }
    });

    
  }, [selectedCategory]);


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
            <Todo user={user} setUser={setUser} todos={todos} setTodos={setTodos} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          </Route>
          <Route exact path="/prioritybar">
            <Priority user={user} priorities={priorities} setPriorities={setPriorities}/>
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
