import React from "react";
import CustomButton from "../../../reusable/CustomButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useSignUPMutation } from "../../../service/userAuthApi";

const SignUp = () => {

    const navigate = useNavigate();
    //the useNavigate is a hook that is used to navigate to a different page

    const userDetails = {
        name: "",
        // lastName: "",
        email: "",
        password: ""
    };
    
    const [userData, setUserData] = useState(userDetails);
    const [signUp, {isLoading, isError, error}] = useSignUPMutation();
    //the useSignUPMutation is a hook that is used to make the request to the backend, and it is the hook that is used to make the request to the backend

    // const response = useSignUPMutation();
    // console.log(response);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value.trim()
        }));
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        try{
            const response = await signUp(userData).unwrap();
            if (response.s){
                navigate("/login");
            }
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            
            <div>
                <form onSubmit={submitHandler}>
                    <h2>Sign Up</h2>
                    <div>
                        <label>Name</label>
                        <input name="name"
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
                    <Link to="/login">LogIn</Link>
                    <CustomButton text="Sign Up" />
                </form>
            </div>
        </>
        
     )
}
export default SignUp;