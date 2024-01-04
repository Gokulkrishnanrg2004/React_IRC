import React from "react";
import './Landingpage.css';
import { useNavigate } from "react-router-dom";
const Landingpage = () =>{
    const nav = useNavigate();
    const handleLandLogin = (e) =>{
        nav('/Login')
    }
    const handleLandSignup = (e) =>{
        nav('/Signup')
    }
    return(
        <div className="lb">
            <section className="section1">
            <div className="heading">
                <h1>ADOPT A PET</h1>
            </div>
            <div className="landingpara2">
                <p className="p0">Our platform is dedicated to connecting loving pet seekers with pets in need of a forever home. Whether you're looking to adopt a new family member or contribute to the well-being of animals through donations, our user-friendly interface makes the process seamless. Browse through profiles of adorable pets awaiting adoption, each accompanied by detailed information about their personality, health, and background. For those who wish to make a difference but may not be ready for pet ownership.</p>
            </div>
            </section>
            <section className="section2">
            <div className="lp">
                <div className="lbs">
                <p className="p2">" Adopting a pet may not change the world, but for that pet, the world changes forever "</p><br/><br/>
                </div>
                <div className="but">
                <button type="submit" onClick={handleLandLogin} className="but1">Login</button>
                <button type="submit" onClick={handleLandSignup} className="but2">Sign up</button>
                </div>
            </div>
            </section>
        </div>
    )
}
export default Landingpage