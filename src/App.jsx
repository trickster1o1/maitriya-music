import Home from './pages/Home';
import './App.css';
import './Mobile.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/Error404';
import Menu from './component/Menu';
import Footer from './component/Footer';
import Detail from './pages/Detail';
import ShopProd from './pages/Shop';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminMenu from './component/AdminMenu';
import ProductList from './pages/admin/ProductList';
import Gallery from './pages/admin/GalleryList';
import Galleries from './pages/Galleries';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div id='top'></div>
      {window.location.href.includes('mm3000') ? <AdminMenu /> : <Menu />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:slug' element={<Detail />} />
        <Route path='/shop' element={<ShopProd />} />
        <Route path='/shop/:brand' element={<ShopProd />} />
        <Route path='/shop/:category/:brand' element={<ShopProd />} />
        <Route path='/gallery' element={<Galleries />} />
        <Route path='/contact' element={<Contact />} />

        {/* Admin */}
        <Route path='/mm3000/login' element={<Login />} />
        <Route path='/mm3000' element={sessionStorage.getItem('token') ? <Dashboard /> : <Login />} />
        <Route path='/mm3000/products' element={sessionStorage.getItem('token') ? <ProductList /> : <Login />} />
        <Route path='/mm3000/gallery' element={sessionStorage.getItem('token') ? <Gallery /> : <Login />} />


        <Route path='*' element={<NotFound />} />
      </Routes>
      {window.location.href.includes('mm3000') ? null : <Footer />}
    </BrowserRouter>
  );
}

export default App;
