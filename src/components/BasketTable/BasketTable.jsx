import Basket from "../Basket/Basket";
import BasketTotal from "../BasketTotal/BasketTotal";
import React from "react";


const BasketTable = () => {
    
 
    
    return (  
        <div className="basketContainer w-100 flex ml-10">
            <Basket/>
            <BasketTotal/>
            
        </div >
    );
}

export default BasketTable;