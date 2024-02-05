import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'

const APracticleLeft = () => {
    return (
        <div className='aPracticleLeft'>
            <p>Posted on June 15 2020</p>
            <p> What’s the secret key code to the mansion of millionaires? Did they deserve their fortune, or did they just get lucky? There are different types of millionaires – some of them are self-made, some inherited the fortune from their forefathers, some became rich in a fair and honest way, while some dug their way to the riches in filthy ways. In this article, we will focus on millionaires who are self-made and value fair play.</p>
            <p>In the part below, you will find</p>
            <p>– 10 things you didn’t know about millionaires of the 21st century:</p>
            <img src='https://cdn.shopify.com/s/files/1/1063/3618/files/iwc-cut.jpg?2277015729178659699' alt='Image Not Found' />
            <div >
                <ol style={{ display: 'flex', flexDirection: 'column-reverse', gap: '10px' }}>
                    <li>They know it takes a team to succeed. A key factor. Although most of them are self-made millionaires, it would be still mission impossible, if it wasn’t for the team that assisted them in setting the foundations. All of them know that, and that’s why emotional intelligence plays an important role for expanding one’s social network.</li>
                    <li>Most of them welcome you in the club of millionaires. It is a mistake to think everybody else is a rival. Millionaires are well-aware that there is more than enough wealth for everyone and that for every new "member" of the 7-digit club, you also receive a potential partner.</li>
                    <li>They work hard. This is the number one factor millionaires exist. It is true that some of them started with more, and some of them started with less, but all of them wouldn’t be where they are if they weren’t hard workers. A lot of successful people start their day at 03-04 AM. For example, founder of Walmart, Sam Walton, started with a single store and a loan, only to end up with a retail empire.</li>
                    <li>A lot of them are self-made millionaires. Approximately only 18% of all millionaires inherited their fortune. The rest has built their financial kingdom with discipline, dedication and hard work. Also, many of them started out from extreme poverty and still managed to earn millions.</li>
                    <li>They acknowledge education. Even though the well-known stories of Mark Zuckerberg and Bill Gates beg to differ, most of millionaires have at least a bachelor’s degree. To be precise, only 15% of them never graduated, from which 12% dropped out, and 3% never attended college. Most of them agree that education played an important role in their success stories. The 3 highest paying degrees are business, economics and engineering.</li>
                    <img height={'253px'} src='https://cdn.shopify.com/s/files/1/1063/3618/files/pilot.jpg?2277015729178659699' alt='Image Not Found' />
                    <li>They are not only jacks of all trade. Many people think that businessmen only sell their talk, without possessing in-depth knowledge – which is not true. Most of them are passion-driven and every one of them has its own niche, or several niches (but not too many).</li>
                    <li>Their source of income comes from multiple streams. Relying only on one source of income can be risky – that’s why most millionaires spread their budget across multiple segments of business. Stock values vary from moment to moment, so it is really important not to go "all in", in order to prevent going broke.</li>
                    <li>Most of them don’t have a feeling of being rich. Even when you start earning 7-digit amounts, there will be still many who have much more than you, and that’s why many millionaires don’t feel like millionaires. Many of them still worry about the retirement and if they will be able to secure themselves for the rest of their lives. It’s that feeling that everyone has – thinking that the next milestone is a game-changer.</li>
                    <li>They don’t give you an impression of being rich. Genuine millionaires don’t have the urge to show their economic superiority through material possessions. You may notice many of them who wear cheap clothes, drive economic cars, or simply ride bicycles. It is a very important trait to wisely distribute your fortune, because, the less you need, the more you have.</li>
                    <li>They shop "differently". By "shopping", we don’t mean it in a conventional way – buying cars, gadgets, clothes etc. Yes, to some extent, but millionaires are really cautious when it comes to spending money. They compare the prices, analyze whether they truly need something or not, and if it’s worth investing. Many millionaires would focus their investment on stock, rather than on fancy yachts and planes.</li>
                </ol>
            </div>
            <div className='icons'>
                <div>Share:</div>
                <Link to='https://www.facebook.com/ugmedia' target='_blank' className='icon' ><FaFacebookF className='allAnchorsBlack buyOneSingleIcon' /></Link>
                <Link to='https://twitter.com/undergrndmedia' target='_blank' className='icon' ><FaXTwitter className='allAnchorsBlack buyOneSingleIcon' /></Link>
                <Link to='https://www.instagram.com/undergroundmedia/' target='_blank' className='icon' ><FaInstagram className='allAnchorsBlack buyOneSingleIcon' /></Link>
            </div>
        </div>
    )
}

export default APracticleLeft