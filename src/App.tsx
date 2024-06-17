import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Keto from './pages/what-is-keto';
import Recipes from './pages/recipes';
import Lifestyle from './pages/lifestyle';
import ShopMealPlans from './pages/shop-meal-plans';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/what-is-keto' element={<Keto/>}></Route>
        <Route path='/recipes' element={<Recipes/>}></Route>
        <Route path='/Lifestyle' element={<Lifestyle/>}></Route>
        <Route path='/shop-meal-plans' element={<ShopMealPlans/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App