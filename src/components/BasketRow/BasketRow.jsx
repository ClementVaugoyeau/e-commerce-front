import './BasketRow.css';
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromBasket} from '../../app/features/basketSlice';
import { useDispatch } from 'react-redux'
import ButtonQuantity from '../ButtonQuantity/ButtonQuantity';

const BasketRow = ({product}) => {

    const dispatch = useDispatch()
    
    const {name, price, category, img, quantity, id} = product


    let totalOneProduct = (price * quantity).toFixed(2)
    
    return (
    
        
          <tr className='border '>
            <td className="imageBox flex justify-center">
              <img className='w-20' src={img}></img>
            </td>
           
            <td className="">{name}</td>
            <td className="">{price}€</td>

            <td >
                
               <ButtonQuantity product={product} quantity={quantity}/>
               
               
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