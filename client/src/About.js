import React, { useState } from "react";
import HabitsForm from "./HabitsForm";


function About({user, setUser}) {

  const {username} = user

  const {id, user_id, name, email, age_group, start_day, end_day, bio} = user.profile

  const [usernameUpdate, setUsernameUpdate] = useState(username);
  const [passwordUpdate, setPasswordUpdate] = useState("");
  const [passwordConfirmationUpdate, setPasswordConfirmationUpdate] = useState("");

  const [nameUpdate, setNameUpdate] = useState(name);
  const [emailUpdate, setEmailUpdate] = useState(email);
  const [ageGroupUpdate, setAgeGroupUpdate] = useState(age_group);
  const [startDayUpdate, setStartDayUpdate] = useState(start_day);
  const [endDayUpdate, setEndDayUpdate] = useState(end_day);
  const [bioUpdate, setBioUpdate] = useState(bio);

  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => {
    setShowConfirm(true);
  };

  function handleUpdateUser(e){
    e.preventDefault()

    const updatedUserInfo =       
    {
      "username": usernameUpdate,
      "password": passwordUpdate,
      "password_confirmation": passwordConfirmationUpdate
    }

    fetch("/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserInfo),
    })
      .then((r) => r.json())
      .then((updatedUserInfo) => setUser(updatedUserInfo)) 
  }

  
  function handleDeleteUser() {

    setShowConfirm(false);

    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    
      
    fetch("/me", {
      method: "DELETE",
    })
    .then((r) => {
      if (r.ok) {
        setUser(null);
      }})

  }

  function handleUpdateProfile(e){
    e.preventDefault()

    const updatedProfile =       
      {
      "id": id,
      "user_id": user_id,
      "name": nameUpdate,
      "email": emailUpdate,
      "age_group": ageGroupUpdate,
      "start_day": startDayUpdate,
      "end_day": endDayUpdate,
      "bio": bioUpdate
      }

    fetch(`/profiles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    })
      .then((r) => r.json())
      .then((updatedProfile) => setUser({...user, profile: updatedProfile}))
      
  }


  return (

    <div className="aboutPage">

      <div>
      <h1 style={{position: "relative", left: "-100px"}}><u>About User</u></h1>
      <span>
        {showConfirm ? (
        <div>
          <p style={{position: "relative", left: "-100px"}}>Are you sure you want to delete your account?</p>
          <button className="deleteAccountButton" onClick={handleDeleteUser}>Confirm</button>
          <br/>
          <button className="cancelButton" onClick={() => setShowConfirm(false)}>Cancel</button>
        </div>
        ) : (
        <button className="deleteAccountButton" onClick={handleClick}>Delete Account</button>
        )}
      </span> 
    
      <br/>
      <br/>
      <br/>
      <br/>

      <form onSubmit={handleUpdateUser} style={{position: "relative", left: "-100px"}}>
        <h4><u>Edit User Info-</u></h4>

        <label htmlFor="name">User Name:</label>
        <input type="text" placeholder="User Name" id="username" value={usernameUpdate} onChange={(e) => setUsernameUpdate(e.target.value)}/>

        <label htmlFor="email">Password:</label>
        <input type="password" placeholder="Password" id="password" onChange={(e) => setPasswordUpdate(e.target.value)}/>

        <label htmlFor="ageGroup">Password Conformation:</label>
        <input type="password" placeholder="Password Conformation" id="passwordConfirmation" onChange={(e) => setPasswordConfirmationUpdate(e.target.value)}/>

        <button className="aboutPageButton"> Edit User </button>

      </form>

      </div>

      <div>
        
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <form onSubmit={handleUpdateProfile} style={{position: "relative", left: "-80px"}}>
        <h4><u>Edit Profile Info-</u></h4>

        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Name" id="name"  value={nameUpdate} onChange={(e) => setNameUpdate(e.target.value)}/>

        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Email" id="email"  value={emailUpdate} onChange={(e) => setEmailUpdate(e.target.value)} />

        <label htmlFor="ageGroup">Age Group:</label>
        <input type="text" placeholder="Age Group" id="ageGroup" value={ageGroupUpdate} onChange={(e) => setAgeGroupUpdate(e.target.value)} />

        <label htmlFor="startDay">Start of the Day:</label>
        <input type="number" placeholder="Start of the Day" id="startDay" value={startDayUpdate} onChange={(e) => setStartDayUpdate(e.target.value)}/>

        <label htmlFor="endDay">End of the Day:</label>
        <input type="number" placeholder="End of the Day" id="endDay" value={endDayUpdate} onChange={(e) => setEndDayUpdate(e.target.value)}/>

        <label htmlFor="bio">Bio:</label>
        <input type="text" placeholder="Bio" id="bio" value={bioUpdate} onChange={(e) => setBioUpdate(e.target.value)} />

        <button className="aboutPageButton"> Edit Profile </button>


      </form>

      </div>


      <span>
        <HabitsForm  user={user}/>
      </span>


    </div>

  );

}

export default About;

