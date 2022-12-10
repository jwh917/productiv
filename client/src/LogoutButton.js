import React from "react";


function LogoutButton({ setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <button className="logOutButton" onClick={handleLogoutClick}>
      Logout
    </button>
  );
}


export default LogoutButton;
