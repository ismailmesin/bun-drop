import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import PaypalPayment from './components/PaypalPayment'
import CardPayment from './components/CardPayment'


function App() {

  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Menu' element={<Menu/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Checkout' element={<Checkout/>}/>
            <Route path='/PaypalPayment' element={<PaypalPayment/>}/>
            <Route path='/CardPayment' element={<CardPayment/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
