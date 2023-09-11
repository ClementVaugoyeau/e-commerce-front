import { useSelector } from 'react-redux'
import React from "react";
import './BasketTotal.css';
import { getTotal } from '../../app/features/functions/calculatingFunctions';


const BasketTotal = () => {
    
    const productsBasket = useSelector((state) => (state.basket.items));
    
    let sousTotal = getTotal(productsBasket).sousTotal
    let totalPrice = getTotal(productsBasket).totalPrice
    let delivery = getTotal(productsBasket).delivery
   

    
    
    return (
      <div className="border m-2 grid grid-cols-2 gap-4 w-1/5 h-0">
        <div className="fieldTotal text-left">Résumé</div>
        <div></div>
        <hr className="col-span-2" />
        <div className="fieldTotal text-left">Sous-Total </div>
        <div className="fieldTotalNumeric text-right">
          € {sousTotal}{" "}
        </div>
        <div className="fieldTotal text-left">Livraison</div>
        <div className="fieldTotalNumeric text-right">
          € {delivery}
        </div>
        <hr className="col-span-2" />
        <div className="fieldTotal text-left">Total </div>
        <div className="fieldTotalNumeric text-right">
          {" "}
          € {totalPrice}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2">
          Valider
        </button>
      </div>
    );
}

export default BasketTotal;