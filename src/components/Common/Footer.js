import React from 'react'
import '../styles/Common/Footer.css'
import { footerData } from '../../data/Common/FooterData'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaDollarSign } from "react-icons/fa";
import { ReactComponent as VISA } from '../svg/visa.svg';
import { ReactComponent as MASTER } from '../svg/master.svg';
import { ReactComponent as AMERICAN } from '../svg/american.svg';
import { ReactComponent as PAYPAL } from '../svg/paypal.svg';
import { ReactComponent as UNK } from '../svg/unk.svg';
import { ReactComponent as DISCOVER } from '../svg/discover.svg';
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <div className='footerParent'>
            <div className='upperFooter'>
                {
                    footerData.map((obj, index) => {
                        return (
                            obj.title === 'ABOUT' ?
                                (
                                    <div key={index} className='upperFooterDiv'>
                                        <p className='title'>{obj.title}</p>
                                        <p>{obj.disc}</p>
                                    </div>
                                ) :
                                (
                                    <div key={index} className='upperFooterDiv'>
                                        <p className='title'>{obj.title}</p>
                                        {

                                            obj.list.map((item, index) => {
                                                return (
                                                    <Link to={item.path}  key={index} className='allAnchorsBlack'><p> {item.name}</p></Link>
                                                )
                                            })

                                        }
                                    </div>
                                )
                        )
                    })
                }
            </div>
            <div className='lowerFooter'>
                <div className='lowerFooterDiv1'>
                    <div className='iconsFoo'>
                    <Link to='https://www.facebook.com/ugmedia' target='_blank' className='allAnchorsBlack'><FaFacebookF /></Link>
                    <Link to='https://www.facebook.com/ugmedia' target='_blank' className='allAnchorsBlack'><FaXTwitter /></Link>
                    <Link to='https://www.facebook.com/ugmedia' target='_blank' className='allAnchorsBlack'><FaInstagram /></Link>
                    </div>
                    <p>© 2024 Fashionopolism Galleria • Powered by Shopify</p>
                </div>
                <div className='lowerFooterDiv2'>
                    <button className='usdButton'>
                        <LiaFlagUsaSolid className='usdIcon' />
                        <p className='usdIcon'>USD</p>
                        <FaDollarSign className='usdIcon' />
                    </button>
                    <div className='svgDiv'>
                        <VISA />
                        <MASTER/>
                        <AMERICAN/>
                        <PAYPAL/>
                        <UNK/>
                        <DISCOVER/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

