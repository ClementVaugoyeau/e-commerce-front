import React from "react";
import './header.css';
import logocartIcon from './logo-cart.png'
import shoppingBasketIcon from './icon-panier.png'
import userIcon from './icon-user.png'
import { Link } from "react-router-dom";


function Header() {
    return (
      <nav className="header flex flex-row m-0 justify-end">
       
        <Link to="/" className="logo-title flex">
          <img className="logo-cart -mr-5" alt="icone de caddie" src={logocartIcon} />
          <h3 className="title mt-8">
            Shop<span className="italic">EZ</span>
          </h3>
        </Link>
        
        <div className="panier-container flex">
           <input className="m-6" alt="icone de panier" placeholder="Rechercher..."/> <button>Search</button>
        </div>

        <div className="panier-container flex" alt="icone d'utilisateur">
          <img className="logo-basket -mr-4" src={userIcon}/>
          <p className="panier mt-8">Compte</p>
        </div>

        <Link to='/cart' className="panier-container flex">
          <img className="logo-basket -mr-4" src={shoppingBasketIcon}/>
          <p className="panier-title mt-8">Panier</p>
        </Link>


      </nav>

      
    );
  }
  
  export default Header;