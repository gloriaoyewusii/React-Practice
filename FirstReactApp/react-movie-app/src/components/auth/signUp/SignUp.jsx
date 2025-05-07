import React from "react";
import CustomButton from "../../../reusable/CustomButton";
import { useState } from "react";

const SignUp = () => {

    const userDetails = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };
    
    const [userData, setUserData] = useState(userDetails);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value.trim()
        }));
    }
    console.log(userData);
    
    return (
        <>
            
            <div>
                <form>
                    <h2>Sign Up</h2>
                    <div>
                        <label>First Name</label>
                        <input name="firstName"
                        onChange={handleInput}
                        required
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input name="lastName"
                        onChange={handleInput}
                        required
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                        onChange={handleInput}
                        type="email"
                        name="email"
                        required
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                        onChange={handleInput}
                        type="password"
                        name="password"
                        required
                        />
                    </div>
                    <CustomButton text="Sign Up" />
                </form>
            </div>
        </>
        
     )
}
export default SignUp;