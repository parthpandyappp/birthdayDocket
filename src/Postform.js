import React, { useEffect, useState } from 'react';
import { Redirect, Link } from "react-router-dom";
import Footer from './footer.js'
import axios from 'axios';
import "./styles.css";
import "./form.css"

export default function Postform() {
    const apiURL = "https://birthdaydocket.herokuapp.com/birthdays/";
    const [names, setName] = useState("")
    const [ages, setAge] = useState(0)

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleAgeChange(e) {
        setAge(e.target.value)
    }

    function redirect(){
        <Redirect to="/" /> 
    }

    const handlePost = async () => {
        const response = await axios.post(apiURL, { name: names, age: ages });
        console.log('Returned data:', response);
    }

    return (
        <div>
        <div className="todo-list box" style={{ marginBottom: "6rem" }}>
            <div className="form-style-7">
            <h3 style={{textAlign: "center", fontFamily:"Montserrat"}}>/POST/ data to API</h3>
                <ul>
                    <li>
                        {/* <label style={{}} for="name">Name</label> */}
                        <input onChange={(e) => handleNameChange(e)} type="text" name="name" maxlength="100" />
                        <span>Enter your name</span>
                    </li>
                    <li>
                        {/* <label for="email">Age</label> */}
                        <input onChange={(e) => handleAgeChange(e)} type="number" name="age" maxlength="100" />
                        <span>Enter your Age</span>
                    </li>
                    
                    <li>
                        <Link to="/"><button onClick={handlePost} value="Send This" >Send This</button></Link>
                    </li>
                </ul>
            </div>
        </div>
        <Footer />
        </div>
    )
}