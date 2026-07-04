import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Ahome from './Admin/Ahome';
import Alogin from './Admin/Alogin';
import Anavbar from './Admin/Anavbar';
import Asignup from './Admin/Asignup';
import Items from './Admin/items';
import Seller from './Admin/Seller';
import Users from './Admin/Users';
import Home from './Components/Home';
import Addbook from './Seller/Addbook';
import MyProducts from './Seller/MyProducts';
import Orders from './Seller/Orders';
import Shome from './Seller/Shome';
import Slogin from './Seller/Slogin';
import Snavbar from './Seller/Snavbar';
import Ssignup from './Seller/Ssignup';
import Login from './User/Login';
import MyOrders from './User/MyOrders';
import Products from './User/Products';
import Signup from './User/Signup';
import Uhome from './User/Uhome';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', background: '#f5f7fb', color: '#1f2937' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<><Anavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><Ahome /></main></>} />
          <Route path="/login" element={<><Anavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><Alogin /></main></>} />
          <Route path="/signup" element={<><Anavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><Asignup /></main></>} />
          <Route path="/items" element={<><Anavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><Items /></main></>} />
          <Route path="/sellers" element={<><Anavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><Seller /></main></>} />
          <Route path="/users" element={<><Anavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><Users /></main></>} />
          <Route path="/seller/dashboard" element={<><Snavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><Shome /></main></>} />
          <Route path="/seller/login" element={<><Snavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><Slogin /></main></>} />
          <Route path="/seller/signup" element={<><Snavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><Ssignup /></main></>} />
          <Route path="/seller/products" element={<><Snavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><MyProducts /></main></>} />
          <Route path="/seller/orders" element={<><Snavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><Orders /></main></>} />
          <Route path="/seller/addbook" element={<><Snavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><Addbook /></main></>} />
          <Route path="/user" element={<><Anavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><Uhome /></main></>} />
          <Route path="/user/login" element={<><Anavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><Login /></main></>} />
          <Route path="/user/signup" element={<><Anavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><Signup /></main></>} />
          <Route path="/user/products" element={<><Anavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><Products /></main></>} />
          <Route path="/user/orders" element={<><Anavbar /><main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}><MyOrders /></main></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
