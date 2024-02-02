import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
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
import ParserHt from './BuyOne/ParserHt';
import { useSelector, useDispatch } from 'react-redux'
import { addToCard } from './redux/CartSlice';

const SingleBrand = () => {
  const src = "https://cdn.shopify.com/videos/c/vp/709152aa79f54ebb916a8300cbf46847/709152aa79f54ebb916a8300cbf46847.HD-1080p-7.2Mbps-17926183.mp4";
  const [input, setInput] = useState(1);

  const minus = () => {
    if (input > 1) {
      setInput(input - 1);
    }
  }
  const add = () => {
    setInput(input + 1);
  }
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const { name } = useParams();

  const { id } = useParams();

  const [dataToShow, setDataToShow] = useState([]);
  const [newRelatedData, setnewRelatedData] = useState([]);
  // const [clickValue,setClickValue] = useState()
  async function fetchDataToShow() {
    // API for One Product
    const response = await fetch(`https://fashionopolism-galleria.myshopify.com/collections/${name}/products/${id}.json`);
    const mainData = await response.json();
    setDataToShow(mainData.product);
    // console.log(dataToShow);

    // API for all Other Related
    const res = await fetch(`https://fashionopolism-galleria.myshopify.com/collections/${name}/products.json`);
    var otherData = await res.json();
    setnewRelatedData(otherData.products.filter((item) => item.title !== mainData.product.title))
    // console.log(newRelatedData);
  }

  useEffect(() => {
    fetchDataToShow();
  }, [name, id])

  // redux
  const dispatch = useDispatch();

  const datToSend={
    dataToShow:dataToShow,
    id:dataToShow.id,
    quantity:input
  }
  const addItemToCart = () => {
    dispatch(addToCard(datToSend));
  }

  return (
    <>
      {dataToShow?.images ?
        (<>
          <div className='buyOneMain'>
            <div className='buyOneImageDiv'>
              <img className='buyOneImage' src={dataToShow?.images[0]?.src} />
            </div>
            <div className='buyOneContentDiv'>
              <div className='buyOneHeadingButton'>
                <div className='buyOneHeadingDiv'>
                  <h1 className='buyOneHeading'>{dataToShow?.title}</h1>
                  <p className='buyOnePrice'>$ {dataToShow?.variants[0]?.price}</p>
                </div>
                <div >
                  <button className='buyOneLeftRightButton'><FaChevronLeft /></button>
                  <button className='buyOneLeftRightButton' ><FaChevronRight /></button>
                </div>{/*onClick={leftClick}*/}{/*onClick={rifhtClick}*/}
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
                  <button className='buyOneInputButton' onClick={minus} >-</button>
                  <input className='buyOneInputMain' type='number' id='quantity' onChange={handleChange} value={input} />
                  <button className='buyOneInputButton' onClick={add}>+</button>
                </div>
              </div>
              <div className='buyOnePersonalizeDiv'>
                <input className='buyOnePersonalizeInput' placeholder='Personalize with engraving:' type='text' />
                <p className='buyOnePersonalizePara'>Personalize with engraving:</p>
              </div>
              <div className='buyOneCartButtonsDiv'>
                <button className='buyOneCartButtons' onClick={() => addItemToCart()} >Add to cart</button>
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
              <ParserHt data={dataToShow.body_html} />
            </div>
          </div>
          <BuyOneVideo src={src} />
          <div className='buyOneAlsoLikeMain'>
            <h3 className='buyOneAlsoLikeHeading'>You may also like</h3>
            <div><AllProductsThreeInLine data={newRelatedData} /></div>
          </div>
          <MidAdBuyOne />
        </>)
        : (<div className="loader"></div>)}

    </>
  )
}

export default SingleBrand