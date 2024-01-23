import React, { useEffect, useState } from 'react'
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";

import { ReactComponent as VISA } from '../components/svg/visa.svg';
import { ReactComponent as MASTER } from '../components/svg/master.svg';
import { ReactComponent as AMERICAN } from '../components/svg/american.svg';
import { ReactComponent as PAYPAL } from '../components/svg/paypal.svg';
import { ReactComponent as UNK } from '../components/svg/unk.svg';
import { ReactComponent as DISCOVER } from '../components/svg/discover.svg';

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { tagHeuerData } from '../data/Collection/Shop By Brand/TagHeuerData'
import { mainData } from '../data/Collection/Shop By Brand/MainData';
import BuyOneVideo from './BuyOne/BuyOneVideo';
import AllProductsThreeInLine from './Collection/Reusable/AllProductsThreeInLine';
import MidAdBuyOne from './BuyOne/MidAdBuyOne';

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import './BuyOne.css'

const BuyOne = () => {
  const getPath = useLocation();
  const navigate = useNavigate();
  const [pathNameUrl, setpathNameUrl] = useState(getPath.pathname.slice(32, getPath.pathname.length));
  const getThePath = getPath.pathname.split("/");
  // console.log(getThePath);

  // console.log(pathNameUrl)
  const [toShow, setToShow] = useState(0);
  const [otherIndex, setOtherIndex] = useState(0);

  useEffect(() => {
    const allBrandData = mainData.findIndex(element => element.id.toLowerCase() === getThePath[2].toLowerCase())
    setOtherIndex(allBrandData);
    // console.log(allBrandData);
    console.log(otherIndex);
    const index = mainData[otherIndex].value.findIndex(element => element.name.toLowerCase() === pathNameUrl.toLowerCase());
    setToShow(index);
  }, [otherIndex])
  const actualData = mainData[otherIndex].value;
  const alsoLike = actualData.filter(oneData => oneData.name.toLowerCase() !== pathNameUrl.toLowerCase());

  return (
    <>
      <div className='buyOneMain'>
        <div className='buyOneImageDiv'>
          <img className='buyOneImage' src={actualData[toShow].image} />
        </div>
        <div className='buyOneContentDiv'>
          <div className='buyOneHeadingButton'>
            <div className='buyOneHeadingDiv'>
              <h1 className='buyOneHeading'>{actualData[toShow].name}</h1>
              <p className='buyOnePrice'>{actualData[toShow].price}</p>
            </div>
            <div >
              <button className='buyOneLeftRightButton'><FaChevronLeft /></button>
              <button className='buyOneLeftRightButton'><FaChevronRight /></button>
            </div>
          </div>
          <div>
            <div>
              <MdOutlineVerified />
              <p>5 Year International Warranty</p>
            </div>
            <div>
              <MdOutlineSecurity />
              <p>Secure online shopping</p>
            </div>
          </div>
          <div>
            <label htmlFor="quantity" >Quantity</label>
            <button>-</button>
            <input type='number' id='quantity' defaultValue={1} />
            <button>+</button>
          </div>
          <div>
            <input type='text' />
            <p>Personalize with engraving:</p>
          </div>
          <button>Add to cart</button>
          <button>But it now</button>
          <div className='svgDiv'>
            Secure online shopping
            <VISA />
            <MASTER />
            <AMERICAN />
            <PAYPAL />
            <UNK />
            <DISCOVER />
            <div></div>
            <div className='icons'>
              Share:
              <Link to='https://www.facebook.com/ugmedia' target='_blank' className='icon ' ><FaFacebookF className='allAnchorsBlack' /></Link>
              <Link to='https://twitter.com/undergrndmedia' target='_blank' className='icon' ><FaXTwitter className='allAnchorsBlack' /></Link>
              <Link to='https://www.instagram.com/undergroundmedia/' target='_blank' className='icon' ><FaInstagram className='allAnchorsBlack' /></Link>
            </div>
          </div>
        </div>
      </div>
      <BuyOneVideo />
      <h3>You may also like</h3>
      <AllProductsThreeInLine data={alsoLike} />
      <MidAdBuyOne />
    </>
  )
}

export default BuyOne

// if (
//   getPath.pathname === "/collections/tag-heuer/products/"
//   ||
//   getPath.pathname === "/collections/tag-heuer/products"
// ) {navigate('/collections/tag-heuer')}