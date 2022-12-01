import React, { useState } from "react";
import LogoutButton from "./LogoutButton";



function ProfileForm({ user, setUser }) {

  const {id, username} = user

  // console.log(id)
  // console.log(username)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [startDay, setStartDay] = useState(0);
  const [endDay, setEndDay] = useState(0);
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: id,
        name,
        email,
        age_group: ageGroup,
        start_day: startDay,
        end_day: endDay,
        bio
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((profile) => console.log(profile));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (

    <div>
      
      <h3> {username} </h3>
      {/* LOGOUT BUTTON  */}
      <LogoutButton setUser={setUser}/>

      <hr/>

      <form onSubmit={handleSubmit} style={{"height" : "800px"}}>
        <h2>Fill Out Profile Here</h2>

        <label for="name">Name</label>
        <input type="text" placeholder="Name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>

        <label for="email">Email</label>
        <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

        {/* Change to be selected */}
        <label for="ageGroup">Age Group</label>
        <input type="text" placeholder="Age Group" id="ageGroup" value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}/>

        <label for="startDay">Start of the Day</label>
        <input type="number" placeholder="Start of the Day" id="startDay" value={startDay} onChange={(e) => setStartDay(e.target.value)}/>

        <label for="endDay">End of the Day</label>
        <input type="number" placeholder="End of the Day" id="endDay" value={endDay} onChange={(e) => setEndDay(e.target.value)}/>

        <label for="bio">Bio</label>
        <input type="text" placeholder="Bio" id="bio" value={bio} onChange={(e) => setBio(e.target.value)}/>

        <button className="formButton"> {isLoading ? "Loading..." : "Signup"} </button>

        {errors.map((err) => ( <h6 key={err}>{err}</h6>))}

      </form>


    </div>

  

  );
}

export default ProfileForm;