import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import Clock from "./Clock";



const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar({user, setUser}) {

// const {username} = user
// console.log(user.profile)


const {name} = user.profile




  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/todo"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Todo
      </NavLink>

      <h2>ProDucTiv</h2>
      <h3>Welcome, {name}</h3>
      <Clock/> 
      <br/>
      <br/>
      <LogoutButton setUser={setUser}/>
    </div>
  );
}

export default NavBar;