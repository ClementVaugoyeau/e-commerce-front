import React from "react";
import './header.css';
import logocartIcon from './logo-cart.png'
import shoppingBasketIcon from './icon-panier.png'
import userIcon from './icon-user.png'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { getTotal } from "../../app/features/functions/calculatingFunctions";


function Header() {

  const productsBasket = useSelector((state) => (state.basket.items)); 

  
    
  return (
      
      <nav className="header flex flex-row m-0 justify-end">
        <Link to="/" className="logo-title flex">
          <img
            className="logo-cart -mr-5"
            alt="icone de caddie"
            src={logocartIcon}
          />
          <h3 className="title mt-8">
            Shop<span className="italic">EZ</span>
          </h3>
        </Link>

        <div className="search-bar-container flex">
          <input
            className="mt-6 mb-6 w-full rounded-md rounded-r-none"
            alt="icone de panier"
            placeholder=" Rechercher..."
          />{" "}
          <button className="mt-6 mb-6 bg-indigo-600 text-white px-6  font-semibold rounded-r-md">Q</button>
        </div>

        <div className="panier-container flex" alt="icone d'utilisateur">
          <img className="logo-basket -mr-4" src={userIcon} />
          <p className="panier mt-8">Compte</p>
        </div>

        <Link to="/cart" className="panier-container flex mr-4">
          
           
          <div className="imageBox-cart relative -mr-4">
            {getTotal(productsBasket).totalQuantity > 0 ? 
          <div className="badge-basket absolute  rounded-full bg-red-600 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
              {getTotal(productsBasket).totalQuantity}
            </div> : null}
          <img className="logo-basket -mr-4" src={shoppingBasketIcon} />
          </div>
          {getTotal(productsBasket).sousTotal > 0 ? 
          <div className="panier-title  mt-8">
              {getTotal(productsBasket).sousTotal} €
            </div> : <p className="panier-title  mt-8">Panier</p>}
          
        </Link>
      </nav>
    );
  }
  
  export default Header;