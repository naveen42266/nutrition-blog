import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Keto from './pages/what-is-keto';
import Recipes from './pages/recipes';
import Lifestyle from './pages/lifestyle';
import ShopMealPlans from './pages/shop-meal-plans';
import Contact from './pages/contact';
import Post from './pages/post';
import Blog from './pages/blog';
import RecipesCategories from './pages/blog/categories/recipes';
import WhatIsKetoCategories from './pages/blog/categories/what-is-keto';
import LifestyleCategories from './pages/blog/categories/lifestyle';
import FAQ from './pages/faq';
import DownloadsAndRefunds from './pages/downloadsAndRefunds';
import TermsAndConditions from './pages/termsAndConditions';

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
        <Route path='/post/:postid' element={<Post/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/blog/categories/recipes' element={<RecipesCategories/>}></Route>
        <Route path='/blog/categories/what-is-keto' element={<WhatIsKetoCategories/>}></Route>
        <Route path='/blog/categories/lifestyle' element={<LifestyleCategories/>}></Route>
        <Route path='/faq' element={<FAQ/>}></Route>
        <Route path='/downloads-and-refunds' element={<DownloadsAndRefunds/>}></Route>
        <Route path='/terms-and-conditions' element={<TermsAndConditions/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App