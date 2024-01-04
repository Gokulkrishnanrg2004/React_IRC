import React from "react";
import './Donate.css';
import { Link } from "react-router-dom";
const Donate = () =>{
    return(
        <div className="donate">
        <div class="container2">
        <div class="title">Donating Pet Details</div>
        <form action="#">
            <div class="user-details">
                <div class="input-box2">
                    <span class="details">Pet Name</span>
                    <input type="text" placeholder="Enter your pet name" required/>
                </div>
                <div class="input-box2">
                    <span class="details">Owner mobile number</span>
                    <input type="number" placeholder="Enter your contact number" required/>
                </div>
                <div class="input-box2">
                    <span class="details">Owner's Email</span>
                    <input type="email" placeholder="Enter your Email" required/>
                </div>
                <div class="input-box2">
                    <span class="details">Pet Breed</span>
                    <input type="text" placeholder="Enter breed of your pet" required/>
                </div>
                <div class="input-box2">
                    <span class="details">Upload your pet License</span>
                    <input type="file" required/>
                </div>
                <div class="input-box2">
                    <span class="details">Upload your Adhar card</span>
                    <input type="file" required/>
                </div>
            </div>
            <div class="gender-details">
                <input type="radio" name="gender" id="dot-1"/>
                <input type="radio" name="gender" id="dot-2"/>
                <input type="radio" name="gender" id="dot-3"/>
                <input type="radio" name="gender" id="dot-4"/>
                <span class="gender-title">Select Pet type</span>
                <div class="category2">
                    <label for="dot-1">
                        <span class="dot one"></span>
                        <span class="gender">Dog</span>
                    </label>
                    <label for="dot-2">
                        <span class="dot two"></span>
                        <span class="gender">Cat</span>
                    </label>
                    <label for="dot-3">
                        <span class="dot three"></span>
                        <span class="gender">Cattle</span>
                    </label>
                    <label for="dot-4">
                        <span class="dot four"></span>
                        <span class="gender">Birds</span>
                    </label>
                </div>
            </div>
            
            <div class="register3">
            <Link to='/City'>Donate a pet</Link>
            </div>
            
        </form>
    </div>
    </div>
    )
}
export default Donate;