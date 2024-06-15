import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Keto from './pages/keto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/keto' element={<Keto/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App