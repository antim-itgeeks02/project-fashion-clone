import React, { useEffect, useState } from 'react'
import { Link, unstable_HistoryRouter, useLocation, useNavigate, useParams } from 'react-router-dom';
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
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import BuyOneVideo from './BuyOne/BuyOneVideo';
import AllProductsThreeInLine from './Collection/Reusable/AllProductsThreeInLine';
import MidAdBuyOne from './BuyOne/MidAdBuyOne';
import '../components/styles/BuyOne.css'


const SingleOneDemo = ({ allThreeWatches }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const getPath = useLocation();
  console.log(id);
  let found = allThreeWatches.findIndex(function (element) {
    return element.name === id;
  });
  console.log(found);
  const youMayLike = allThreeWatches.filter(oneData => oneData.name.trim() !== id);
  // const showingNow = allThreeWatches.filter(oneData => oneData.name.trim() === id);

  const [indexChange, setIndexChange] = useState(found);
  const [inputValue, setInputValue] = useState(1);
  const handleLess = () => {
    inputValue > 1 && setInputValue(inputValue - 1);
  }
  const handleMore = () => {
    setInputValue(inputValue + 1);
  }
  const handleLeftClick = () => {
    setIndexChange(indexChange - 1);
  }
  const handleRightClick = () => {
    setIndexChange(indexChange + 1);
  }

  useEffect(() => {
    const go =allThreeWatches[indexChange]?.name;
    navigate(`/collections/tag-heuer/products/${go}`);
  }, [indexChange])

  const src = "https://cdn.shopify.com/videos/c/vp/709152aa79f54ebb916a8300cbf46847/709152aa79f54ebb916a8300cbf46847.HD-1080p-7.2Mbps-17926183.mp4";
  return (
    <>
      <div className='buyOneMain'>
        <div className='buyOneImageDiv'>
          <img className='buyOneImage' src={allThreeWatches[indexChange]?.image} />
        </div>
        <div className='buyOneContentDiv'>
          <div className='buyOneHeadingButton'>
            <div className='buyOneHeadingDiv'>
              <h1 className='buyOneHeading'>{allThreeWatches[indexChange]?.name}</h1>
              <p className='buyOnePrice'>{allThreeWatches[indexChange]?.price}</p>
            </div>
            <div >
              <button className='buyOneLeftRightButton' style={{ display: (indexChange === 0 && "none") }} onClick={handleLeftClick}><FaChevronLeft /></button>
              <button className='buyOneLeftRightButton' style={{ display: (indexChange === 2 && "none") }} onClick={handleRightClick}><FaChevronRight /></button>
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
      <BuyOneVideo src={src} />
      <div className='buyOneAlsoLikeMain'>
        <h3 className='buyOneAlsoLikeHeading'>You may also like</h3>
        <div><AllProductsThreeInLine data={youMayLike} /></div>
      </div>
      <MidAdBuyOne />
    </>
  )
}

export default SingleOneDemo