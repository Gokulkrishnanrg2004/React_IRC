import React from "react";
import './Adopt.css';
import { Link ,useNavigate} from "react-router-dom";
import cat from './cat.jpg'
import dog from './dog.jpg'
import cow from './cow.jpg'
import bird from './birds.webp'
const Adopt= () =>{
  const nav = useNavigate();
  const handleAdopt = (e) =>{
    nav('/User');
  }
    return(
      <div className="adoptbody">
<ul class="cards">
  <li class="cards__item">
    <div class="card-adopt">
      <div class="card__image card__image--fence"></div>
      <div class="card__content">
        <div class="card__title">Dog Breed : Pug</div>
        <p class="card__text">Name : Johnny <br/>
        Age : 1 Year<br/>
        Gender : Male<br/>
        The Pug has been bred to be a companion and a pleasure to his owners. He has an even and stable temperament, great charm, and an outgoing, loving disposition. Pugs live to please their people, so they are generally easy to train.</p>
        <button type='submit' onClick={handleAdopt}>Adopt</button>
      </div>
    </div>
  </li>
  <li class="cards__item">
    <div class="card-adopt">
      <div class="card__image card__image--river"></div>
      <div class="card__content">
        <div class="card__title">Dog Breed : Rajapalayam</div>
        <p class="card__text">Name : Moni <br/>
        Age : 2 Years<br/>
        Gender : Male<br/>
        The Pug has been bred to be a companion and a pleasure to his owners. He has an even and stable temperament, great charm, and an outgoing, loving disposition. Pugs live to please their people, so they are generally easy to train.</p>
        <button type='submit' onClick={handleAdopt}>Adopt</button>
      </div>
    </div>
  </li>
  <li class="cards__item">
    <div class="card-adopt">
      <div class="card__image card__image--record"></div>
      <div class="card__content">
      <div class="card__title">Dog Breed : Labrador</div>
      <p class="card__text">Name : Milli <br/>
        Age : 3 Month<br/>
        Gender : Female<br/>
        The Pug has been bred to be a companion and a pleasure to his owners. He has an even and stable temperament, great charm, and an outgoing, loving disposition. Pugs live to please their people, so they are generally easy to train.</p>
        <button type='submit' onClick={handleAdopt}>Adopt</button>
      </div>
    </div>
  </li>
  <li class="cards__item">
    <div class="card-adopt">
      <div class="card__image card__image--flowers"></div>
      <div class="card__content">
      <div class="card__title">Dog Breed : German Shepherd</div>
      <p class="card__text">Name : Rocky <br/>
        Age : 2 Years<br/>
        Gender : Male<br/>
        The Pug has been bred to be a companion and a pleasure to his owners. He has an even and stable temperament, great charm, and an outgoing, loving disposition. Pugs live to please their people, so they are generally easy to train.</p>
        <button type='submit' onClick={handleAdopt}>Adopt</button>
      </div>
    </div>
  </li>
</ul>
</div>
    )
}
export default Adopt;