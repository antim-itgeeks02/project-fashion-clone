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
  const src = "https://cdn.shopify.com/videos/c/vp/709152aa79f54ebb916a8300cbf46847/709152aa79f54ebb916a8300cbf46847.HD-1080p-7.2Mbps-17926183.mp4";
  const getPath = useLocation();
  const navigate = useNavigate();
  const [pathNameUrl, setpathNameUrl] = useState(getPath.pathname.slice(32, getPath.pathname.length));
  const getThePath = getPath.pathname.split("/");
  // console.log(getThePath);

  // console.log(pathNameUrl)
  const [toShow, setToShow] = useState(0);
  const [otherIndex, setOtherIndex] = useState(0);
  const [inputValue,setInputValue] = useState(1);
  const handleLess =() =>{
    inputValue > 1 && setInputValue(inputValue-1);
  }
  const handleMore =() =>{
    setInputValue(inputValue+1);
  }

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
          <div className='buyOneFeaturesMain'>
            <div className='buyOneFeatures'>
              <MdOutlineVerified className='buyOneFeaturesIcons' />
              <p className='buyOneFeaturesText'>5 Year International Warranty</p>
            </div>
            <div className='buyOneFeatures'>
              <MdOutlineSecurity className='buyOneFeaturesIcons' />
              <p className='buyOneFeaturesText'>Secure online shopping</p>
            </div>
          </div>
          <div className='buyOneInputMainDiv'>
            <label htmlFor="quantity" >Quantity</label>
            <div className='buyOneInputMainDivBorder'>
              <button className='buyOneInputButton' onClick={handleLess}>-</button>
              <input className='buyOneInputMain' type='number' id='quantity' defaultValue={inputValue} />
              <button className='buyOneInputButton' onClick={handleMore} >+</button>
            </div>
          </div>
          <div className='buyOnePersonalizeDiv'>
            <input className='buyOnePersonalizeInput' placeholder='Personalize with engraving:' type='text' />
            <p className='buyOnePersonalizePara'>Personalize with engraving:</p>
          </div>
          <div className='buyOneCartButtonsDiv'>
            <button className='buyOneCartButtons' >Add to cart</button>
            <button className='buyOneCartButtons2'>But it now</button>
          </div>
          <div className='buyOneSvgMain'>
            <div>Secure online shopping</div>
            <div className='buyOneSvg'>
              <VISA className='buyOneSingleSvg' />
              <MASTER className='buyOneSingleSvg' />
              <AMERICAN className='buyOneSingleSvg' />
              <PAYPAL className='buyOneSingleSvg' />
              <UNK className='buyOneSingleSvg' />
              <DISCOVER className='buyOneSingleSvg' />
            </div>
          </div>
          <div className='icons'>
            <div>Share:</div>
            <Link to='https://www.facebook.com/ugmedia' target='_blank' className='icon' ><FaFacebookF className='allAnchorsBlack buyOneSingleIcon' /></Link>
            <Link to='https://twitter.com/undergrndmedia' target='_blank' className='icon' ><FaXTwitter className='allAnchorsBlack buyOneSingleIcon' /></Link>
            <Link to='https://www.instagram.com/undergroundmedia/' target='_blank' className='icon' ><FaInstagram className='allAnchorsBlack buyOneSingleIcon' /></Link>
          </div>

        </div>
      </div>
      <BuyOneVideo src={src}/>
      <div className='buyOneAlsoLikeMain'>
        <h3 className='buyOneAlsoLikeHeading'>You may also like</h3>
        <div><AllProductsThreeInLine data={alsoLike} /></div>
      </div>
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