import React from "react";

import styles from "./login.module.css"
import CustomButton from "../../../reusable/CustomButton";
import { useState } from "react";


const LogIn = () => {

    const loginDetails = {
        email: "",
        password: ""
    };

    const [loginData, setLoginData] = useState(loginDetails);

    const handleChange = (event) => {
        //you have to use the event.target.name to get the name of the input field and set it to the state
        // i have an object that has the details, and it is the object that i am setting to the state; 
        // the object is from the event.target.name and event.target.value;
        //the event is the event that is passed to the function, and it is the event that is triggered when the input field is changed
        const {name, value} = event.target;
        setLoginData((prevData) => ({...prevData, [name]: value.trim()}));
    }

    return (
        <>
            <div className={styles.container}>
                <div>LogIn</div>
                <form>
                    <div>
                        <label>Email</label>
                        <input 
                        type="email" 
                        name="email"
                        onChange={handleChange}
                        required />
                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                        type="password" 
                        name="password"
                        required />
                    </div>
                </form>
                <CustomButton text="Log In" />
            </div>
            
        </>
       
    )
    
}

export default LogIn