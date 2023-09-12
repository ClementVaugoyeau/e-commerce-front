import ProductCard from "../../productCard/productCard";
import { productData } from "../../../data";
import { getAllProducts } from "../../../services/productService";
import { useEffect, useState } from "react";



function ProductTable(props) {
  // const [productData, setProductData] = useState([]);

  // useEffect(() => {
  //    getAllProducts().then((res) => setProductData(res.data))
  // }, []);

  return (
    <div className="container grid grid-cols-4 ">
      {productData
        .filter(
          (product) =>
            props.category === "all" || product.category === props.category
        )
        .map((product) => (
          <ProductCard product={product} />
        ))}
    </div>
  );
}

export default ProductTable;
