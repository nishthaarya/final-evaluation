import React from 'react'
import styles from "./Home.module.css";
import {useHistory} from "react-router-dom"

export const Home = () => {


    const history = useHistory()

    const handleGuest = () => {
        history.push("/cities")
    }

    const handleLogin = () => {
        history.push("/login")
    }

    const handleRegister = () => {
        history.push("/register")
    }

    return (
        <>
            <div className = {styles.heading}>
                Election Poll Station Manager
            </div>
            <div className = {styles.full}>
                <div className = {styles.guest}>
                    <div onClick = {handleGuest} >Guest</div>
                </div>
                <div className = {styles.admin}>
                    <div onClick = {handleLogin} > Login as Admin </div>
                    <div onClick = {handleRegister} > Register as Admin </div>
                </div>
            </div>
        </>
    )
}

