import React from "react";
import './header.css';
import logocartIcon from './logo-cart.png'
import shoppingBasketIcon from './icon-panier.png'
import userIcon from './icon-user.png'
function Header() {
    return (
      <div className="header flex flex-row m-0 justify-end">
       
        <div className="logo-title flex">
          <img className="logo-cart -mr-5" src={logocartIcon} />
          <h3 className="title mt-8">
            Shop<span className="italic">EZ</span>
          </h3>
        </div>
        
        <div className="panier-container flex">
           <input className="m-6" placeholder="Rechercher..."/> <button>Search</button>
        </div>

        <div className="panier-container flex">
          <img className="logo-basket -mr-4" src={userIcon}/>
          <p className="panier mt-8">Compte</p>
        </div>

        <div className="panier-container flex">
          <img className="logo-basket -mr-4" src={shoppingBasketIcon}/>
          <p className="panier mt-8">Panier</p>
        </div>


      </div>

      
    );
  }
  
  export default Header;