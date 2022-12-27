import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import LogoutButton from "./LogoutButton";



function ProfileForm({ user, setUser }) {

  const {id, username} = user


  const history = useHistory();  

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

    const newProfile =       
    {
      user_id: id,
      name,
      email,
      age_group: ageGroup,
      start_day: startDay,
      end_day: endDay,
      bio
    }

    fetch("/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProfile),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((newProfile) => {
          console.log(newProfile)
          setUser({...user, profile: newProfile})
        } );
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
      
      history.push("/about")

    });
  }

  return (

    <div>
      
      <h1>Username: {username} </h1>
      <LogoutButton setUser={setUser}/>

      <hr/>

      <form className="profileForm" onSubmit={handleSubmit} >
        <h2>Fill Out Profile Here</h2>

        <label htmlFor="name">Name: </label>
        <input type="text" placeholder="Name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>

        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="ageGroup">Age Group: </label>
        <input type="text" placeholder="Age Group" id="ageGroup" value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}/>

        <label htmlFor="startDay">Start of the Day: </label>
        <input type="number" placeholder="Start of the Day" id="startDay" value={startDay} onChange={(e) => setStartDay(e.target.value)}/>

        <label htmlFor="endDay">End of the Day: </label>
        <input type="number" placeholder="End of the Day" id="endDay" value={endDay} onChange={(e) => setEndDay(e.target.value)}/>

        <label htmlFor="bio">Bio: </label>
        <input type="text" placeholder="Bio" id="bio" value={bio} onChange={(e) => setBio(e.target.value)}/>

        <button className="profileFormButton"> {isLoading ? "Loading..." : "Signup"} </button>

        {errors.map((err) => ( <h6 key={err}>{err}</h6>))}

      </form>


    </div>

  

  );
}

export default ProfileForm;