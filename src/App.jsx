import Home from './pages/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
