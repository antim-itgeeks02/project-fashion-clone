import React, { useEffect, useState } from 'react'
import './styles/AutoImageSlider.css'
import imageData from '../data/AutoImageSliderData'

const AutoImageSlider = () => {
    
    useEffect(() => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 5000)
        
        return () => clearInterval(intervalId);
    }, [])
    return (
        <div><img src={images[currentIndex]} /></div>
    )
}

export default AutoImageSlider