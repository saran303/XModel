import React, { useState } from 'react'
import styles from './Card.module.css'

const Card = () => {
    const [inpData, setInpData] = useState({
        username: "",
        email: "",
        phone: "",
        dob: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inpData.phone.length < 10){
            alert("Invalid phone number. Please enter a valid 10-digit phone number");
            return
        }

        const todayDate = new Date();
        const selectedDate = new Date(inpData.dob)
        if(todayDate <= selectedDate){
            alert("Invalid date of birth. Date of birth cannot be in the future.");
            return
        }
        setInpData({
            username: "",
            email: "",
            phone: "",
            dob: "",
        });
    }

  return (
    <div className={styles.wrapper}>
        <h2>Fill Details</h2>
        <form action={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input 
            type="text"
            id='username'
            name='username'
            value={inpData.username}
            onChange={(e) => setInpData({ ...inpData, username: e.target.value })}
            required
            />
            <label htmlFor="email" >Email Address:</label>
            <input 
            type="email"
            id='email'
            name='email'
            value={inpData.email}
            onChange={(e) => setInpData({...inpData, email: e.target.value})}
            required
            />
            <label htmlFor="phone">Phone Number:</label>
            <input 
            type="number"
            id='phone' 
            name='phone'
            value={inpData.phone}
            onChange={(e) => setInpData({...inpData, phone: e.target.value})}
            required
            />
            <label htmlFor="date">Date of Birth:</label>
            <input 
            type="date"
            id='dob'
            name='dob'
            value={inpData.dob}
            onChange={(e) => setInpData({...inpData, dob: e.target.value})}
            required
            />
            <button type='submit' className={styles.btnSmt} onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Card