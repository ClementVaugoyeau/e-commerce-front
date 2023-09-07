import MenuFilter from "../menuFilter/menuFilter";
import ProductTable from "../productTable/productTable";



function ParentTable() {
    return (  
        <div className="flex m-3">
        <MenuFilter/>
        <ProductTable/>
        </div>
    );
}

export default ParentTable;