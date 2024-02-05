import React from 'react'
import '../styles/ThemeFeature/AdvanceFeatures.css'
import { ImEqualizer } from "react-icons/im";
import { MdLaptopChromebook } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";

const AdvanceFeatures = () => {
    return (
        <div className='advanceFeatures'>
            <div>
                <MdLaptopChromebook className='advanceFeaturesIconsSpecial'/><br/>
                <strong>30+ SECTIONS EVERYWHERE</strong>
                <p>Cross promote products & bring your pages to life with rich content.</p>
            </div>
            <div>
                <ImEqualizer className='advanceFeaturesIcons'/><br/>
                <strong>FACETED PRODUCT FILTERS</strong>
                <p>Filter products by color, size, tags, vendors and all product properties.</p>
            </div>
            <div>
                <BsCameraReelsFill className='advanceFeaturesIcons'/><br/>
                <strong>RICH PRODUCT MEDIA</strong>
                <p>Ready for your rich content, show product videos and 3D objects</p>
            </div>
        </div>
    )
}

export default AdvanceFeatures