import { useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity, getItemQuantity, addItemToBasket} from '../../app/features/basketSlice';


const ButtonQuantity = ({ product, quantity }) => {
    const dispatch = useDispatch()
   
  return (
    <div className=" flex justify-center">
      <button
        onClick={() => dispatch(decreaseItemQuantity(product))}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
        -
      </button>
      <p className="quantity-indicator bg-gray-300 pt-2">{quantity}</p>
      <button
        onClick={() => dispatch(increaseItemQuantity(product))}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
        +
      </button>
    </div >
  );
};

export default ButtonQuantity;
