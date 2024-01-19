import React, { useState } from 'react'
import OurSlider from './OurSlider';
import { productSliderData } from '../../data/Home/ProductSliderData'
import { productSliderData2 } from '../../data/Home/ProductSliderData2'
import '../styles/Home/TwoTypes.css'

const TwoTypes = () => {
    const [type, setType] = useState(true);
    const handleClick = () => {
        setType(true);
    }
    const handleClick2 = () => {
        setType(false);
    }
    return (
        <div className='twoTypesMain'>
            <h2 className='twoTypesH'>HIGHLIGHTS</h2>
            <div className='theUnderLine'></div>
            <div>
                <button onClick={handleClick} className={type ? 'active' : 'notActive'} >Dress Watches</button>
                <button onClick={handleClick2} className={!type ? 'active' : 'notActive'}>Most Wanted</button>
            </div>
            <div className='ourCompo'>
                {
                    type ? <OurSlider products={productSliderData} /> : <OurSlider products={productSliderData2} />
                }
            </div>
        </div>
    )
}

export default TwoTypes