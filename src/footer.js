import "./styles.css";
import React from 'react';
import { FiGithub } from "react-icons/fi";


export default function Footer() {

    function currentDate() {
        return new Date().getFullYear();
    }

    return (
        <div id="footer">
            <hr className="someStyle" />
            <div style={{ width: "350px", textAlign: "center", margin: "auto" }}>
                <p className="text-center" style={{ fontFamily: "Roboto Mono", lineHeight: 0.5 }}>Developed with ❤️ by Parth Pandya</p>

                <p className="text-center" style={{ fontFamily: "Roboto Mono", lineHeight: 0.5 }}>Copyright ©️ {currentDate()} <a style={{ color: "black" }} href="https://github.com/parthpandyappp/birthdayDocket"><b>birthdayDocket<FiGithub /></b></a></p>

                <p className="text-center" style={{ fontFamily: "Roboto Mono", fontSize: 10, lineHeight: 0.5 }}>Some rights reserved.</p>
            </div>
        </div>
    )
}