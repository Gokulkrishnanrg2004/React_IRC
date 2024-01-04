import React from "react";
import { useNavigate } from "react-router-dom";
import './User.css';
const User = () =>{
    const nav = useNavigate();
    const handleUser = (e) =>{
        nav('/Final');
    }
    return(
        <div className="userbody">
            <h1>Donor Details</h1>
            <div className="para">
                <p>
                <h3>Owner Details</h3>
                Name : <br/>
                Details : <br/>
                Phone number : <br/>
                Address : <br/>
                <br/>
                <h3>Pet Details</h3>
                Name : <br/>
                Species : <br/>
                Breed : <br/>
                Age : <br/>
                </p>
            </div>
            <button type='submit' onClick={handleUser}>Make a Contact</button>
        </div>
    )
}
export default User;