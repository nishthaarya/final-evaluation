import React, { useState } from 'react'
import styles from "./Register.module.css";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import * as EmailValidator from "email-validator";
import {ToastContainer, toast, Zoom} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { makeRegisterRequest } from '../../Redux/Register/actions';

export const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [city, setCity] = useState("")
    const [pop, setPop] = useState("")
    const [type, setType] = useState("")
    
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();

        const ans = EmailValidator.validate(email)

        if(name.length < 3) {
            toast("Please enter your full name.", {
                autoClose: 4000,
                position: toast.POSITION.TOP_CENTER,
                transition: Zoom
              })
              setEmail("")
              setName("")
        }
        else if(pass.length < 6) {
            toast("Password needs to be at least 6 characters.", {
                autoClose: 4000,
                position: toast.POSITION.TOP_CENTER,
                transition: Zoom
            })
            setPass("")
        }

        else if(!ans) {
            toast("Email is invalid.", {
                autoClose: 4000,
                position: toast.POSITION.TOP_CENTER,
                transition: Zoom
            })
            setEmail("")
        }

        else {
            const userDetails = {
                "name": name,
                "email": email,
                "password": pass,
                "city": city,
                "type": type,
                "population": pop
            }
            dispatch(makeRegisterRequest(userDetails))
            history.push("/login")
        }
        
    }

    const handleLogin = () => {
        history.push("/login")
    }


    return (
        <div className = {styles.full}>
            <div className = {styles.heading}>
                Election Poll Station Manager
            </div>
            <ToastContainer className = {styles.toast} />
            <div className = {styles.box}>
                <input value = {email} placeholder = "Email" onChange = {(e) => setEmail(e.target.value)}/>
                <input value = {pass} placeholder = "Password" onChange = {(e) => setPass(e.target.value)}/>
                <input value = {name} placeholder = "Name of District" onChange = {(e) => setName(e.target.value)}/>
                <input value = {city} placeholder = "Name of City" onChange = {(e) => setCity(e.target.value)}/>
                <input value = {type} placeholder = "Metro/Town/Village" onChange = {(e) => setType(e.target.value)}/>
                <input value = {pop} placeholder = "Population" onChange = {(e) => setPop(e.target.value)}/>
                <button onClick = {handleSubmit}>Register</button>
                <div>Already a user?</div>
                <div onClick = {handleLogin} className = {styles.links}>Login Here.</div>
            </div>
        </div>
    )
}

