import { useDispatch } from 'react-redux'
import { addItemToBasket } from '../../app/features/basketSlice'
import  addToCartIcon  from '../header/icon-add-to-cart.png'
import './productCard.css';
import ButtonQuantity from '../ButtonQuantity/ButtonQuantity';
import { getItemQuantity } from '../../app/features/basketSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


function ProductCard({product}) {

    const dispatch = useDispatch()

    const {name, price, img, id} = product

    const items = useSelector((state) => state.basket.items);

    const item = items.find(item => item.id === product.id);

    const itemQuantity = item ? item.quantity : 0;

    return ( 
        
    <div className="container  m-2 border p-2" style={{}}>
        <div className='flex justify-center items-center'>
        <img src={img} alt={name} className="productImg" style={{'width':'200px'}} />
        </div>
        
        <div className="productInfo grid grid-cols-2 gap-2">
            <div className="nameProduct">{name}</div>
            <div className="priceProduct">{price} €</div>
            <Link to={`/products/${id}`}>
            <button className='bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded'>Voir Produit</button>
            </Link>
            
            {itemQuantity === 0 ?<button  onClick={() => dispatch(addItemToBasket(product))} className='justify-self-center w-16 bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded'>
                <img className='logoAddToCart' src={addToCartIcon}/>
            </button> :

            <ButtonQuantity product={product} quantity={itemQuantity} />}
       </div>
    
    </div> );
}

export default ProductCard;