
import React from "react";
import {Link} from 'react-router-dom';
import './Pet.css';
import bird from './bird.jpg';
import cat from './cat.jpg';
import cow from './cow.jpg';
import dog from './dog.jpg';
const City = () =>{
    return(
      <div className="cardspet">
        <div class="cards-list1">
          <h1>Select a pet to adopt</h1>
  
<div class="card 1">
  <div class="card_image"> 
  <img src={dog}/>
  </div>
  <div class="card_title title-white">
    <Link to='/Adopt' className="citylink">Dog</Link>
  </div>
</div>

  <div class="card 2">
  <div class="card_image">
    <img src={cat}/>
    </div>
  <div class="card_title title-white">
  <Link to='/Adopt' className="citylink">Cat</Link>
  </div>
</div>

<div class="card 3">
  <div class="card_image">
    <img src={cow}/>
  </div>
  <div class="card_title">
  <Link to='/Adopt' className="citylink">Cow</Link>
  </div>
</div>
  
  <div class="card 4">
  <div class="card_image">
    <img src={bird} />
    </div>
  <div class="card_title title-black">
  <Link to='/Adopt' className="citylink">Birds</Link>
  </div>
  </div>

</div>
</div>
    )
}
export default City;