import React from "react";
import './Final.css';
import final from './gokulloginbg.jpg';
const Final = () =>{
    return(
        <div className="finalbody">
        <div class="container">
        <div class="rows">
            <div class="col-4">
                <div class="cardfinal">
                <img src={final}/>
                   <div class="card-body">
                <h5 class="card-title"><b><h3>NOTIFICATION SENT TO DONOR</h3></b></h5>
                <p class="card-text">"Your request is taken. The owner will contact you soon"</p>
                   </div>
                </div>
            </div>
        </div>    
    </div>
    </div>
    )
}
export default Final;