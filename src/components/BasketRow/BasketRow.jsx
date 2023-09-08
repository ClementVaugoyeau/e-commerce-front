import './BasketRow.css';
import { increaseItemQuantityFromBasket } from '../../app/features/basketSlice';
import { useDispatch } from 'react-redux'

const BasketRow = ({product}) => {

    const dispatch = useDispatch()
    
    const {name, price, category, img, quantity, id} = product
    // console.log(product)
    
    return (  
        <div className="basket-row-container flex justify-evenly m-2 border">
            <div className="imageBox w-20">
                <img src={img}></img>
            </div>
            <p>{name}</p>
            <p>{price}€</p>

            <div className="buttonBox flex items-center">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">-</button>
             <p className="quantity-indicator ">{quantity}</p>
            <button onClick={() => dispatch(increaseItemQuantityFromBasket(id))} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">+</button>
            </div>
        </div>
    );
}

export default BasketRow;