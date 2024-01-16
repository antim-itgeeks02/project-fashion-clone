import React from 'react'
import './styles/Footer.css'
import { footerData } from '../data/FooterData'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaDollarSign } from "react-icons/fa";
import { ReactComponent as VISA } from './svg/visa.svg';
import { ReactComponent as MASTER } from './svg/master.svg';
import { ReactComponent as AMERICAN } from './svg/american.svg';
import { ReactComponent as PAYPAL } from './svg/paypal.svg';
import { ReactComponent as UNK } from './svg/unk.svg';
import { ReactComponent as DISCOVER } from './svg/discover.svg';

const Footer = () => {
    return (
        <div className='footerParent'>
            <div className='upperFooter'>
                {
                    footerData.map((obj, index) => {
                        return (
                            obj.title === 'ABOUT' || obj.title === 'RECENT POSTS' ?
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
                                                    <p key={index}> {item.name}</p>
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
                        <FaFacebookF className='icon' />
                        <FaXTwitter className='icon' />
                        <FaInstagram className='icon' />
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

