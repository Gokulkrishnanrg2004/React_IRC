
import React from "react";
import {Link} from 'react-router-dom';
import './City.css';
import mad from './madurai.jpg';
import che from './chennai.jpg';
import cbe from './cbe.jpg';
import tr from './trichy.jpg';
const City = () =>{
    return(
      <div className="cardscity">
        <div class="cards-list">
          <h1>Select a region to adopt your pet</h1>
  
<div class="card 1">
  <div class="card_image"> 
  <img src={che}/>
  </div>
  <div class="card_title title-white">
    <Link to='/Pet' className="citylink">Chennai</Link>
  </div>
</div>

  <div class="card 2">
  <div class="card_image">
    <img src={mad}/>
    </div>
  <div class="card_title title-white">
  <Link to='/Pet' className="citylink">Madurai</Link>
  </div>
</div>

<div class="card 3">
  <div class="card_image">
    <img src={cbe}/>
  </div>
  <div class="card_title">
  <Link to='/Pet' className="citylink">Coimbatore</Link>
  </div>
</div>
  
  <div class="card 4">
  <div class="card_image">
    <img src={tr} />
    </div>
  <div class="card_title title-black">
  <Link to='/Pet' className="citylink">Trichy</Link>
  </div>
  </div>

</div>
</div>
    )
}
export default City;