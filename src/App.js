import './App.css';
import Header from './components/header/header';
import ParentTable from './components/Body/BodyTable/ParentTable';
import {Routes, Route} from 'react-router-dom'
import ProductDetails from './components/ProductDetails/ProductDetail';
import BasketTable from './components/BasketTable/BasketTable';
import Account from './components/Account/Account';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        < Route path='/' element={<ParentTable/>} />
        < Route path='/cart' element={<BasketTable/>} />
        < Route path='/my-account' element={<Account/>} />
        < Route path='/my-account/sign-up' element={<SignUp/>} />
        <Route path='/products/:id' element={<ProductDetails/>}/>
      </Routes>
   
     
     
      
      

    </div>
  );
}

export default App;
