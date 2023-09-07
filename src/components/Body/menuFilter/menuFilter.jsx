import './menuFilter.css';


function MenuFilter() {
    return ( 
        <div className="menu-container border">
            <h3 className='menuTitle mb-2 font-bold'>Trier par produit</h3>
             <p className='typeProduct'>Fruits</p>
             <p className='typeProduct'>Légumes</p>
             <p className='typeProduct'>Produits Frais</p>
             <p className='typeProduct'>Boissons</p>
        </div>
     );
}

export default MenuFilter;