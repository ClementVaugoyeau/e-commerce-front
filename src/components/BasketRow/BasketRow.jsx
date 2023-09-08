const BasketRow = ({product}) => {
    
    const {name, price, category, img} = product
    console.log(product)
    
    return (  
        <div className="basket-row-container flex justify-evenly m-2 border">
            <div className="imageBox w-20">
                <img src={img}></img>
            </div>
            <p>{name}</p>
            <p>{price}€</p>

            <div className="buttonBox flex">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">+</button>
             <p>0</p>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">-</button>
            </div>
        </div>
    );
}

export default BasketRow;