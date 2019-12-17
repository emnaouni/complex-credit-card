import React from 'react';
import './card.css';
import logo from './logo.png'
import VMC from './vmCard.png'

const Card=(props)=>{

return(
<div className='bg-card'>
    
      <h1 class="grand-titre ">CREDIT CARD</h1>
      <img className="puce" src={logo}></img>

      <div className="container">

        <div className="column">

<p className="num-1" >{props.numero.padEnd(16,'*').replace(/(.{4})/g,"$1 ")}</p>
          <p className="t-date">MONTH/YEAR</p>

          <div className="l-2-horizontal">
<p className="n-date">{props.name}</p>

            <div className="box-right">
              <p className="validation">VALID<br />THRU</p>
              <i class="fas fa-caret-right"></i>
              <p className="n-date">{props.date.replace(/(.{2})/,"$1 /")}</p>
            </div>

          </div>

         

        </div>

        <img className="visa" src={VMC}></img>

      </div>

    </div>)}


export default Card;