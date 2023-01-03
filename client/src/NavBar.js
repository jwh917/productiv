import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import Clock from "./Clock";


const linkStyles = {
  display: "inline-block",
  width: "80px",
  textAlign: "center",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#39FF14",
  textDecoration: "none",
  color: "white",
};

function NavBar({user, setUser}) {


const {name} = user.profile

  return (
    <div>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "green",
        }}
        >
        About
      </NavLink>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "green",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/todo"
        exact
        style={linkStyles}
        activeStyle={{
          background: "green",
        }}
      >
        ToDoList
      </NavLink>

      <NavLink
        to="/prioritybar"
        exact
        style={linkStyles}
        activeStyle={{
          background: "green",
        }}
      >
        PriorityBar
      </NavLink>

      <h1>ProDucTiv</h1>
      <img src="https://ak9.picdn.net/shutterstock/videos/30003889/thumb/8.jpg?ip=x480" alt="ProDucTiv1"/>

      <h2>Welcome, {name}</h2>
      <Clock/> 

      <LogoutButton setUser={setUser}/>
    </div>
  );
}

export default NavBar;