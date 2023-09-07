import ProductCard from "../../productCard/productCard";
import { productData } from "../../../data";


function ProductTable() {
    console.log(productData)
    return (
      
       <div className="container grid grid-cols-4 ">
        {productData.map(product => <ProductCard name={product.name} price={product.price} img={product.img}/>)}
        <ProductCard/>

      </div>


      
    );

    }
  
  export default ProductTable;

  