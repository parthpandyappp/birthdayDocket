import React, { useEffect, useState } from 'react';
import { BiTrash } from "react-icons/bi";
import { CgSidebarOpen } from "react-icons/cg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Footer from './footer.js'
import axios from 'axios';
import "./styles.css";
import "./nav.css";


function Home() {
    const [names, setName] = useState("")
    const [ages, setAge] = useState(0)

    // State variable that holds total data of the API
    const [birthdays, setBirthdays] = useState([]);
    const apiURL = "https://birthdaydocket.herokuapp.com/birthdays/";

    //   ** In case you wanna fetch API onClick event **

    //   const fetchData = async () => {
    //     const response = await axios.get(apiURL)

    //     setBirthdays(response.data) 
    // }

    // Execute's and fetches data from API after each render-cycle

    useEffect(
        async () => {
            const response = await axios.get(apiURL)

            setBirthdays(response.data)
            console.log(response.data)
        }
    )

    const handleIconClick = async (id) => {
        const fetchFrom = apiURL + id
        const response = await axios.delete(fetchFrom)
        setBirthdays(response.data)
    }

    const handlePost = async () => {
        const response = await axios.post(apiURL, { name: names, age: ages });
        console.log('Returned data:', response);
    }

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleAgeChange(e) {
        setAge(e.target.value)
    }

    function currentDate() {
        return new Date().getFullYear();
    }

    // function handleIconClick(id) {
    //   const fetchFrom = apiDelURL+id
    //   const response = await axios.delete(fetchFrom)
    //   setBirthdays(response.data)
    //   }
    // }

    return (
        <div className="App">
            <div class="main-wrap">
                <input id="slide-sidebar" type="checkbox" role="button" />
                <label for="slide-sidebar"><span><CgSidebarOpen style={{ width: "50px", height: "25px" }} /></span></label>
                <div class="sidebar">
                    <p style={{ textAlign: "center", fontFamily: "Noto sans", textDecoration: "underline double" }}>Birthday Reminder</p>
                    {/* <input type="text" onChange={(e) => handleNameChange(e)} />
          <input type="text" onChange={(e) => handleAgeChange(e)} />
          <button onClick={handlePost}>Post test</button> */}
                    <ul>
                        <Link to="/post" ><h5 style={{ fontFamily: "Montserrat", letterSpacing: "2px", cursor: "pointer", color: "black", fontWeight: "1500" }}>/POST/ to API</h5></Link>
                    </ul>
                </div>
                <div class="portfolio">

                    {birthdays.length !== 0 ?
                        <div className="todo-list box" style={{ marginBottom: "6rem" }}>
                            {birthdays.length !== 0 ? <h4 style={{ fontSize: "25px", fontFamily: "Fredoka One" }} key={birthdays} className="underline">{birthdays.length} birthdays today</h4> : null}

                            {birthdays &&
                                birthdays.map((birthday, index) => {
                                    return (
                                        <div className="todo-item">
                                            <p key={birthday.id}>{birthday.name} <br />{birthday.age} years old </p> &emsp; &emsp; <BiTrash onClick={() => handleIconClick(birthday.id)} className="icon" />
                                        </div>
                                    )
                                })
                            }
                        </div> : <div className="todo-list box"><h2 style={{ fontFamily: "Fredoka One" }}>No data to show</h2><p style={{ fontSize: "10px", fontFamily: "Montserrat", letterSpacing: "3px" }}>Go /POST/ some data to API</p></div>}
                    <Footer />
                </div>
            </div>

            {/* <label>Name</label>
      <input type='text' onChange={(e) => handleNameChange(e)} /> */}

        </div>

    );
};


export default Home;