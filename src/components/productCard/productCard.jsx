


function ProductCard(props, img) {
    console.log(props.img)
    return ( 
        
    <div className="container  m-2 border p-2" style={{}}>
        <div className='flex justify-center items-center'>
        <img src={props.img} className="productImg" style={{'width':'200px'}} />
        </div>
        
        <div className="productInfo grid grid-cols-2 gap-2">
            <div className="nameProduct">{props.name}</div>
            <div className="priceProduct">{props.price} €</div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Voir Produit</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Ajouter</button>
       </div>
    
    </div> );
}

export default ProductCard;