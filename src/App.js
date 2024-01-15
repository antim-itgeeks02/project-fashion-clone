import './App.css';
import Advertisment from './components/Advertisment';
import AutoImageSlider from './components/AutoImageSlider';
import BrandsLogo from './components/BrandsLogo';
import BuyNowPayLater from './components/BuyNowPayLater';
import Category from './components/Category';
import Features from './components/Features';
import Header from './components/Header';
import NavBar from './components/NavBar';
import NavLogo from './components/NavLogo';
import ProductSlider from './components/ProductSlider';
import ReviewSection from './components/ReviewSection';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <>
      <Header/>
      <NavLogo/>
      <NavBar/>
      <Advertisment/>
      <AutoImageSlider/>
      <Features/>
      <Category/>
      <ProductSlider/>
      <BrandsLogo/>
      <BuyNowPayLater/>
      <ReviewSection/>
      <Subscribe/>
    </>
  );
}

export default App;
