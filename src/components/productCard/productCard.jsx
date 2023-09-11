import { useDispatch } from 'react-redux'
import { addItemToBasket } from '../../app/features/basketSlice'



function ProductCard(props) {

    const dispatch = useDispatch()
    
    return ( 
        
    <div className="container  m-2 border p-2" style={{}}>
        <div className='flex justify-center items-center'>
        <img src={props.img} alt={props.name} className="productImg" style={{'width':'200px'}} />
        </div>
        
        <div className="productInfo grid grid-cols-2 gap-2">
            <div className="nameProduct">{props.name}</div>
            <div className="priceProduct">{props.price} €</div>
            <button className='bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded'>Voir Produit</button>
            <button onClick={() => dispatch(addItemToBasket(props))} className='bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded'>Ajouter</button>
       </div>
    
    </div> );
}

export default ProductCard;