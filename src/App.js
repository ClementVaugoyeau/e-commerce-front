import './App.css';
import Header from './components/header/header';
import ParentTable from './components/Body/BodyTable/ParentTable';
import {Routes, Route} from 'react-router-dom'
import ProductDetails from './components/ProductDetails/ProductDetail';
import BasketTable from './components/BasketTable/BasketTable';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        < Route path='/' element={<ParentTable/>} />
        < Route path='/cart' element={<BasketTable/>} />
        <Route path='/productDetail/:id' element={<ProductDetails/>}/>
      </Routes>
   
     
     
      
      

    </div>
  );
}

export default App;
