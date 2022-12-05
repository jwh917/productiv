import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import Clock from "./Clock";



const linkStyles = {
  display: "inline-block",
  width: "50px",
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
        Todo
      </NavLink>

      <h2>ProDucTiv</h2>
      <img src="https://ak9.picdn.net/shutterstock/videos/30003889/thumb/8.jpg?ip=x480" alt="ProDucTiv1"/>
      <br/>
      <br/>
      <h3>Welcome, {name}</h3>
      <Clock/> 
      <br/>
      <br/>
      <LogoutButton setUser={setUser}/>
    </div>
  );
}

export default NavBar;