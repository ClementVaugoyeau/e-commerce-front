import './BasketRow.css';
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromBasket} from '../../app/features/basketSlice';
import { useDispatch } from 'react-redux'

const BasketRow = ({product}) => {

    const dispatch = useDispatch()
    
    const {name, price, category, img, quantity, id} = product
    // console.log(product)

    let totalOneProduct = (price * quantity).toFixed(2)
    
    return (
    
        
          <tr className='border '>
            <td className="imageBox flex justify-center">
              <img className='w-20' src={img}></img>
            </td>
           
            <td className="">{name}</td>
            <td className="">{price}€</td>

            <td >
                
                <div className='flex justify-center'>
            <button
                onClick={() => dispatch(decreaseItemQuantity(product))}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                -
              </button>
              <p className="quantity-indicator pt-2">{quantity}</p>
              <button
                onClick={() => dispatch(increaseItemQuantity(product))}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                +
              </button>
              </div>
             
            </td>

            <td>{totalOneProduct} €</td>
            <td>
              <button
                onClick={() => dispatch(removeItemFromBasket(product))}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 mb-2">
                X
              </button>
            </td>
          </tr>
        
      
    );
}

export default BasketRow;