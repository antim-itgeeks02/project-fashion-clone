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
import Chronographs from './components/Collection/Shop By Style/Chronographs';
import DressWatches from './components/Collection/Shop By Style/DressWatches';
import PremierWatches from './components/Collection/Shop By Style/PremierWatches';
import OurFavourites from './components/Collection/Shop By Style/OurFavourites';
import TagHeuer from './components/Collection/Shop by Brand/TagHeuer';
import Omega from './components/Collection/Shop by Brand/Omega';
import IWC from './components/Collection/Shop by Brand/IWC';
import Hublot from './components/Collection/Shop by Brand/Hublot';
import Breitling from './components/Collection/Shop by Brand/Breitling';
import AudemarsPiguet from './components/Collection/Shop by Brand/AudemarsPiguet';
import CollectionRoot from './components/Pages/CollectionRoot';
import Products from './components/Products';
import BuyOne from './components/BuyOne';
import AllInformation from './components/Pages/AllInformation';
import CartPage from './components/Pages/CartPage';
function App() {
  const [show, setShow] = useState(false);
  const [productPath, setPath] = useState("");
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
        <Route path={`/collections/tag-heuer/products/:name`} element={<BuyOne />} />

        <Route path='/blogs/news' element={<Blog />} />
        <Route path='/pages/theme-features' element={<ThemeFeature />} />
        {/* collections starts */}
        {/* Shop by style */}

        <Route path='/collections/chronographs' element={<Chronographs />} />
        <Route path='/collections/dress-watches' element={<DressWatches />} />
        <Route path='/collections/premier-watches' element={<PremierWatches />} />
        <Route path='/collections/our-favourites' element={<OurFavourites />} />
        {/* Shop by Brand */}
        <Route path='/collections' element={<Collection />}>
          <Route path='' element={<CollectionRoot />} />
          <Route path='tag-heuer' element={<Collection />} >
            <Route path='' element={<TagHeuer />} />

          </Route>
          <Route path='omega' element={<Collection />} >
            <Route path='' element={<Omega />} />
            {/* setPath={setPath} */}
            <Route path={`products/:name`} element={<BuyOne />} />
            {/* <Route path={`products/${productPath}`} element={<BuyOne />}></Route> */}
          </Route>
        </Route>
        {/* <Route path='/collections/' element={</>} /> */}
        <Route path='/collections/iwc' element={<IWC />} />
        <Route path='/collections/hublot' element={<Hublot />} />
        <Route path='/collections/breitling' element={<Breitling />} />
        <Route path='/collections/audemars-piguet' element={<AudemarsPiguet />} />
        {/* Information */}
        {/* <Route path='pages' /> */}
        {/* <Route exact path="/" component={<ShopHover/>} />
        <Route path="/pages/:id">
          <AllInformation />
        </Route> */}
        <Route path='/pages/:id' element={<AllInformation />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
