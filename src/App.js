import './App.css';
import Advertisment from './components/Advertisment';
import AutoImageSlider from './components/AutoImageSlider';
import Category from './components/Category';
import Features from './components/Features';
import Header from './components/Header';
import NavBar from './components/NavBar';
import NavLogo from './components/NavLogo';
import ProductSlider from './components/ProductSlider';

function App() {
  return (
    <>
      <Header/>
      <NavLogo/>
      <NavBar/>
      <Advertisment/>
      <AutoImageSlider/>
      <Features/>
      <ProductSlider/>
      <Category/>
    </>
  );
}

export default App;
