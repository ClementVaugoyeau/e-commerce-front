import { useSelector } from 'react-redux'
import BasketRow from '../BasketRow/BasketRow';



const Basket = () => {
    
    const productsBasket = useSelector((state) => (state.basket.items));
    
    return (  
        <div>
            {productsBasket.map(product => <BasketRow product={product} />)}
        </div>
    );
}

export default Basket;