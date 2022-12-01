import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import Login from "./Login";
import ProfileForm from "./ProfileForm";
import LogoutButton from "./LogoutButton";
import './App.css';


function App() {

  const [user, setUser] = useState(null);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });


    fetch("/profiles").then((res) => {
      if (res.ok) {
        res.json().then((profiles) => setProfiles(profiles));
      }
    })
  }, []);



  if (!user) return <Login setUser={setUser} />;

  // console.log(user)
  // console.log(user.id)

  const ifProfile = profiles.find((profile) => {
    if(profile.user_id === user.id) 
    return profile
  })

  // console.log(ifProfile)

  // go thru profiles if the user id match set profiles else return
  // if user doesnt have a profile go to ProfileForm
  if (!ifProfile) return <ProfileForm user={user} setUser={setUser} />;


  return (
    <div className="App">
      <header className="App-header">        

      
        {/* put with nave bar */}
        <LogoutButton setUser={setUser}/>

        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
