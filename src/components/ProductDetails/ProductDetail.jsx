import { productData } from "../../data";
import { useParams } from "react-router-dom";
import ProductCard from "../productCard/productCard";

const ProductsDetails = () => {
  const { id } = useParams();

  const product = productData.find((prod) => prod.id == id);

  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
};

export default ProductsDetails;