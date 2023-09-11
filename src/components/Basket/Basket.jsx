import { useSelector } from 'react-redux'
import BasketRow from '../BasketRow/BasketRow';
import React from 'react';



const Basket = () => {
    
    const productsBasket = useSelector((state) => (state.basket.items));
    const productHeadTitle = {name: "Produit", img:"Image" }
    
    return (  
        <div className='flex flex-col w-full ml-32 mt-12'>
             <div className='headTitlecontainer flex justify-evenly'>
                <div className='basis-1/4'>Produit</div>
                <div className='basis-1/4'>Référence</div>
                <div className='basis-1/4'>Prix</div>
                <div className='basis-1/2'>Quantité</div>
                <div className='basis-1/4'>Total</div>
                <span/>

             </div>
            {productsBasket.map(product => <BasketRow product={product} />)}
        </div>
    );
}

export default Basket;