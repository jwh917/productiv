import React, { useState } from "react";

import HabitsForm from "./HabitsForm";


const deleteAccountButtonStyles = {
  display: "inline-block",
  width: "100%",
  padding: "15px 0",
  background: "white",
  marginTop: "50px",
  color: "red"
};

function About({user, setUser}) {

  const {username} = user
  console.log(user)

  const [profile, setProfile] = useState(user.profile);


  console.log(profile)
  const {id, user_id, name, email, age_group, start_day, end_day, bio} = profile

// maybe errors
  const [usernameUpdate, setUsernameUpdate] = useState(username);
  const [passwordUpdate, setPasswordUpdate] = useState("");
  const [passwordConfirmationUpdate, setPasswordConfirmationUpdate] = useState("");

  const [nameUpdate, setNameUpdate] = useState(name);
  const [emailUpdate, setEmailUpdate] = useState(email);
  const [ageGroupUpdate, setAgeGroupUpdate] = useState(age_group);
  const [startDayUpdate, setStartDayUpdate] = useState(start_day);
  const [endDayUpdate, setEndDayUpdate] = useState(end_day);
  const [bioUpdate, setBioUpdate] = useState(bio);


  function handleUpdateUser(e){
    e.preventDefault()

    fetch("/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
        "username": usernameUpdate,
        "password": passwordUpdate,
        "password_confirmation": passwordConfirmationUpdate
        }
      ),
    })
      .then((r) => r.json())
      .then((r) => console.log(r))
      
  }


// // delete user
// Alert are you sure you wanna delete your account - yes | no
// if yes delete
// if no close alert 
  function handleDeleteUser() {

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

// patch profile
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
      .then((updatedProfile) => console.log(updatedProfile))
      
  }


  return (

// REFACTOR !!!! USER PROFILE UPDATE FORMS

    <div>

      <br/>
      <br/>

      <div>
        

      <form onSubmit={handleUpdateUser} >
        <h2>Edit User Info Here</h2>

        <label htmlFor="name">User Name:</label>
        <input type="text" placeholder="User Name" id="username" value={usernameUpdate} onChange={(e) => setUsernameUpdate(e.target.value)}/>

        <label htmlFor="email">Password:</label>
        <input type="password" placeholder="Password" id="password" onChange={(e) => setPasswordUpdate(e.target.value)}/>

        <label htmlFor="ageGroup">Password Confirmation:</label>
        <input type="password" placeholder="Password Confirmation" id="passwordConfirmation" onChange={(e) => setPasswordConfirmationUpdate(e.target.value)}/>

        <button className="formButton"> Edit User </button>

        {/* {errors.map((err) => ( <h6 key={err}>{err}</h6>))} */}

      </form>

      </div>

      <br/>
      <br/>




      <div>

      
      <form onSubmit={handleUpdateProfile}>
        <h2>Edit Profile Info Here</h2>

        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Name" id="name"  value={nameUpdate} onChange={(e) => setNameUpdate(e.target.value)}/>

        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Email" id="email"  value={emailUpdate} onChange={(e) => setEmailUpdate(e.target.value)} />

        {/* Change to be selected */}
        <label htmlFor="ageGroup">Age Group:</label>
        <input type="text" placeholder="Age Group" id="ageGroup" value={ageGroupUpdate} onChange={(e) => setAgeGroupUpdate(e.target.value)} />

        <label htmlFor="startDay">Start of the Day:</label>
        <input type="number" placeholder="Start of the Day" id="startDay" value={startDayUpdate} onChange={(e) => setStartDayUpdate(e.target.value)}/>

        <label htmlFor="endDay">End of the Day:</label>
        <input type="number" placeholder="End of the Day" id="endDay" value={endDayUpdate} onChange={(e) => setEndDayUpdate(e.target.value)}/>

        <label htmlFor="bio">Bio:</label>
        <input type="text" placeholder="Bio" id="bio" value={bioUpdate} onChange={(e) => setBioUpdate(e.target.value)} />

        <button className="formButton"> Edit Profile </button>

        {/* {isLoading ? "Loading..." : "Signup"} */}

        {/* {errors.map((err) => ( <h6 key={err}>{err}</h6>))} */}

      </form>

      </div>

      <br/>
      <br/>
      {/* <br/> */}

      <h2>Add Habits Here</h2>

      <span>
        <HabitsForm  user={user}/>
      </span>


      <span>
        <button style={deleteAccountButtonStyles} onClick={handleDeleteUser}> DELETE ACCOUNT</button>
      </span>

    </div>

  );

}

export default About;

