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
import CollectionRoot from './components/Pages/CollectionRoot';

import AllInformation from './components/Pages/AllInformation';
import CartPage from './components/Pages/CartPage';
import AllBrands from './components/AllBrands';
import AllInformationEmpty from './components/Pages/AllInformationEmpty';
import SingleBrand from './components/SingleBrand';
import APracticleGuide from './components/Blog/APracticleGuide';
import MillionairesBlog from './components/Blog/MillionairesBlog';
import LastBlog from './components/Blog/LastBlog';
function App() {
  const [show, setShow] = useState(false);
  const handleHover = () => {
    setShow(true);
  }

  const handleHoverRemover = () => {
    setShow(false);
  }

  return (
    <BrowserRouter>
      <Header />
      <NavLogo handleHoverRemover={handleHoverRemover} />
      <NavBar handleHover={handleHover} handleHoverRemover={handleHoverRemover} />
      {show && <ShopHover handleHoverRemover={handleHoverRemover} />}
      <Advertisment />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs/news' element={<Blog />}/>
        <Route path='/pages/theme-features' element={<ThemeFeature />} />
        {/* collections starts */}
        <Route path='/collections' element={<Collection />}>
          <Route path='' element={<CollectionRoot />} />
          <Route path=':name' element={<AllBrands />} >
            <Route path='products' >
              <Route path=':id' element={<SingleBrand />} />
            </Route>
          </Route>
        </Route>
        
        <Route path='/pages' element={<AllInformationEmpty />} >
          <Route path=':id' element={<AllInformation />} />
        </Route>
        <Route path='/blogs/news/a-practical-guide-to-watches' element={<APracticleGuide />} />
        <Route path='/blogs/news/78257667-watches-of-monaco' element={<MillionairesBlog/>} />
        <Route path='/blogs/news/78257155-watches-of-wall-street' element={<LastBlog/>} />
        <Route path='/cart' element={<CartPage />} />
        
      </Routes>
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
