import { useSelector } from 'react-redux'
import BasketRow from '../BasketRow/BasketRow';
import React from 'react';



const Basket = () => {
    
    const productsBasket = useSelector((state) => (state.basket.items));
    const productHeadTitle = {name: "Produit", img:"Image" }
    
    return ( 
        <table className='table-fixed w-full ml-32 mt-12'>
      
              <thead>
                <th>Produit</th>
                <th>Référence</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Total</th>
                <th>Supprimer</th>
                </thead>

             
            {productsBasket.map(product => <BasketRow product={product} />)}
        
        </table> 
    );
}

export default Basket;