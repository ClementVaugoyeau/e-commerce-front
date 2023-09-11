import './menuFilter.css';


function MenuFilter({ selectCategory }) {
    
    const changeCategory = (e) => {

    var category = e.target.name;
    selectCategory(category);   
        
    
    }

    return ( 
        <div className="menu-container flex flex-col" >
            <h3 className='menuTitle mb-2 font-bold'>Trier par produit</h3>
             <button className='typeProduct text-left' name='all' onClick={e => changeCategory(e)}>Tous les produits</button>
             <button className='typeProduct text-left' name='fruit' onClick={e => changeCategory(e)}>Fruits</button>
             <button className='typeProduct text-left' name='vegetable'onClick={changeCategory}>Légumes</button>
             <button className='typeProduct text-left' name='freshProduct'onClick={changeCategory}>Produits Frais</button>
             <button className='typeProduct text-left' name='beverage'onClick={changeCategory}>Boissons</button>
        </div>
     );
}

export default MenuFilter;