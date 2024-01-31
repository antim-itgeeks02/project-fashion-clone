import React from 'react'
import HeadingBanner from '../Collection/Reusable/HeadingBanner';
import ApracticleRight from './ApracticleRight';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const LastBlog = () => {
    const image = 'https://fashionopolism-galleria.myshopify.com/cdn/shop/products/tag-heuer-carrera.png?v=1447726695&width=800';

    return (
        <div className='aPracticleMain'>
            <HeadingBanner src={'https://fashionopolism-galleria.myshopify.com/cdn/shop/articles/gallerie-010.jpg?v=1592250645&width=1200'} title={'What to Get That Special September Someone'} />
            <p style={{ margin: '3%' }} className='mainCentreHeading'><Link to={'/'} className='mainHome'>Home</Link><Link to={'/blogs/news'} className='mainHome'>/News</Link>/What to Get That Special September Someone</p>
            <div className='aPracticle'>
                <div style={{ width: '70%' }}>
                    <p>Posted on November 16 2015</p>
                    <video className='buyOneVideo' muted >
                        <source src='https://www.youtube.com/watch?v=ySEIXYfBVjs' type="video/mp4" />
                        Sorry, your browser doesn't support videos.
                    </video>
                    <p>If it seems as if you’re buying birthday gifts during September more than any other time of the year, you most likely are.</p>
                    <p>The reason is that it’s the month when most American babies are born. If you do the math, you’ll understand why. “The holidays may not be a popular time for birthdays, but they sure are a popular time for conception,” notes ancestry.com.</p>
                    <p>Trivia buffs will be interested to know that all 10 of the top birth dates are in September. And September 16—the most popular birthday of all—also happens to be shared by Mickey Rourke and David Copperfield (judge for yourself how that worked out).</p>
                    <p>If you’re into astrology, you know these birthday boys and girls have certain personality traits that offer clues into what gifts they might like. Here’s some ideas that might speak to the Libras and Virgos in your life:</p>
                    <ul>
                        <li>Sensual. If only we could all afford to give the $160,000 worth of free goodies that top Oscar nominees went home with last March. Among the swag: French Mediterranean sea salts “harvested by man like it has been for 2,000 years.” If its $1,548 price tag seems to be something only Hollywood royalty could afford, try one of those beauty boxes-of-the-month subscriptions.</li>
                        <li>Intellectual. Clearly, the oeuvre of an Adam Sandler is beyond them, so consider a boxed set of Ken Burns documentaries. With horned-rimmed glasses thrown in for easier viewing.</li>
                        <li>Perfectionist. The Wall Street Journal used this word to describe Baume & Mercier’s Clifton line of watches for men earlier this year. The affordable 10052 model — epito-mizing the trend towards timepieces the paper notes “can be operated without a Ph.D” — screams class with its sun satin-finished silver dial, thick black alligator strap, and elegant blue steel hands that sweep past the hours and seconds.</li>
                    </ul>
                    <p>And since diamonds are considered lucky for anyone born in September, the women’s polished steel Promesse 10178 from the same Swiss watchmaker is also a no-brainer. The diamonds — eight of them — are set in the indexes of the silver “drape guilloche” decor dial, and its shimmery oval bezel is carved from natural white mother-of-pearl. You can shop both watches at the Baume & Mercier e-boutique or by calling 1-800-MERCIER, where free engraving and wrapping are available.<a href='https://www.youtube.com/watch?v=ySEIXYfBVjs'>Click here to watch the video.</a> </p>
                    <p>And, oh, Begley also happens to have been born on September 16.</p>
                    <div className='icons'>
                        <div>Share:</div>
                        <Link to='https://www.facebook.com/ugmedia' target='_blank' className='icon' ><FaFacebookF className='allAnchorsBlack buyOneSingleIcon' /></Link>
                        <Link to='https://twitter.com/undergrndmedia' target='_blank' className='icon' ><FaXTwitter className='allAnchorsBlack buyOneSingleIcon' /></Link>
                        <Link to='https://www.instagram.com/undergroundmedia/' target='_blank' className='icon' ><FaInstagram className='allAnchorsBlack buyOneSingleIcon' /></Link>
                    </div>

                </div>
                <ApracticleRight image={image} />
            </div>
        </div>
    )
}

export default LastBlog