import ProductCard from "../../productCard/productCard";
import { productData } from "../../../data";


function ProductTable(props) {
  return (
    <div className="container grid grid-cols-4 ">
      {productData
        .filter(
          (product) =>
            props.category === "all" || product.category === props.category
        )
        .map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
          />
        ))}
    </div>
  );
}

export default ProductTable;
