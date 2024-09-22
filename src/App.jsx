import Home from './pages/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/Error404';
import Menu from './component/Menu';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
