import './App.css';
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavLogo />
      <NavBar />
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
