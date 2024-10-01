import Home from './pages/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/Error404';
import Menu from './component/Menu';
import Footer from './component/Footer';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:slug' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
