import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
function Home(){
    return(
        <div className="Home">
            <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        ></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        ></link>
    <nav>
        <div class="logo">
            Adopt a PET
        </div>
        <div class="menu">
            {/* <a href="#">Home</a> */}
            <Link to='/Donate' className="a">Donte a pet</Link>
            <Link to='/Adopt' className="a">Accessories</Link>
            <Link to='/Aboutus' className="a">About us</Link>
            <Link to='/' className="a">Logout </Link>
        </div>
        <div class="register">
            <Link to='/City'>Adopt a pet</Link>
        </div>
    </nav>
    <div class="txt">
        <span>Rescue a Friend</span>
        <h1>Adopt, Don't Shop</h1>
        {/* <a href="#">Shop now</a> */}
        <br/>
        <p> This decision not only provides a loving home for a deserving creature but also helps combat the issues of overpopulation and euthanasia. Adopted pets often exhibit a profound sense of gratitude, forming unbreakable bonds with their new families. Furthermore, adoption promotes responsible pet ownership and underscores the belief that every life, regardless of its origin, holds inherent value. Beyond the personal joy and companionship gained, adopting a pet embodies a commitment to building a more compassionate and humane society, one furry friend at a time.</p>

    </div>
    <div class="media-icons">
          <a href="#">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
    </div>
        </div>
    )
}
export default Home;