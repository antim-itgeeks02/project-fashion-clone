import './App.css';
import { useState } from 'react'
import Footer from './components/Common/Footer';
import Header from './components/Common/Header';
import NavBar from './components/Common/NavBar';
import NavLogo from './components/Common/NavLogo';
import Subscribe from './components/Common/Subscribe';
import Advertisment from './components/Common/Advertisment';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home';
import Collection from './components/Pages/Collection';
import Blog from './components/Pages/Blog';
import ThemeFeature from './components/Pages/ThemeFeature';
import ShopHover from './components/Common/ShopHover';
function App() {
  const [show,setShow] = useState(false);
  const handleHover =()=>{
    setShow(true);
  }
  
  const handleHoverRemover =()=>{
    setShow(false);
  }
  
  return (
    <BrowserRouter>
      <Header />
      <NavLogo handleHoverRemover={handleHoverRemover} />
      <NavBar handleHover={handleHover} handleHoverRemover={handleHoverRemover} />
      {show && <ShopHover handleHoverRemover={handleHoverRemover}/> }
      <Advertisment />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collections' element={<Collection/>} />
        <Route path='/blogs/news' element={<Blog/>} />
        <Route path='/pages/theme-features' element={<ThemeFeature/>} />
      </Routes>
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
