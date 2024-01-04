import React from "react";
import './Aboutus.css';
import { Link } from "react-router-dom";
const Aboutus = () =>{
    return(
        <div className="aboutbody">
        <section class="about-us">
    <div class="about">
      {/* <img src="" class="pic"/> */}
      <div class="text">
        <h2>About Us</h2>
        <h5>Adopt a pet</h5>
          <p>Welcome to our pet adoption community, where love knows no bounds! Discover the joy of companionship by adopting a furry friend from our diverse range of adorable pets in need of loving homes. Your support doesn't stop there – contribute to our mission by making a donation to help care for and rescue more animals.<br/><br/>
          <h3>CONTACT</h3><br/>
          Email : adoptapet@gmail.com<br/>
          Phone : 9952291736</p>
        <div class="data">
        <Link to='/Home' className="hire">Return to HOME</Link>
        </div>
      </div>
    </div>
  </section>
  </div>
    )
}
export default Aboutus;