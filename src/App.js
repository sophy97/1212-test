
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Product from './pages/Product';
import ProductName from './pages/ProductName';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/product' element={<Product />} />
          <Route path='/product/:name' element={<ProductName />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
