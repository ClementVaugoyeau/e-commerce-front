import MenuFilter from "../menuFilter/menuFilter";
import ProductTable from "../productTable/productTable";
import { useState } from "react";



function ParentTable() {
    const [category, setCategory] = useState("all");

    const updateCategory = (category) => {
        setCategory(category);
        
      };

    return (  
        <div className="flex m-3">
        <MenuFilter selectCategory={updateCategory}/>
        <ProductTable category={category}/>
        </div>
    );
}

export default ParentTable;