import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import NavLogo from './components/NavLogo';
import Subscribe from './components/Subscribe';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Collection from './components/collections/Collection/Collection';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavLogo />
      <NavBar />
      <Collection/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
