import React, { useEffect } from 'react'
import '../styles/Home/BrandsLogo.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const BrandsLogo = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='brandsLogo'>
        <img data-aos="fade-right" src='https://fashionopolism-galleria.myshopify.com/cdn/shop/files/image_grid4.jpg?v=1613696317&width=800' alt='Image Not Found'/>
        <img data-aos="fade-right" src='https://fashionopolism-galleria.myshopify.com/cdn/shop/files/image_grid3.jpg?v=1613696317&width=800' alt='Image Not Found'/>
        <img data-aos="fade-right" src='https://fashionopolism-galleria.myshopify.com/cdn/shop/files/image_grid2.jpg?v=1613696317&width=800' alt='Image Not Found'/>
        <img data-aos="fade-right" src='https://fashionopolism-galleria.myshopify.com/cdn/shop/files/image_grid1.jpg?v=1613696317&width=800' alt='Image Not Found'/>
    </div>
  )
}

export default BrandsLogo