import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import PaypalPayment from './components/PaypalPayment'
import CardPayment from './components/CardPayment'
import Confirmation from './components/Confirmation'


function App() {

  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/paypalpayment' element={<PaypalPayment/>}/>
            <Route path='/cardpayment' element={<CardPayment/>}/>
            <Route path='/confirmation' element={<Confirmation/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
