import React, { useEffect, useState } from 'react'
import './styles/AutoImageSlider.css'
import { imageData } from '../data/AutoImageSliderData'
import Buttons from './Button';

const AutoImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === imageData.length - 1) {
                setCurrentIndex(0);
            }
            else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 5000)

        return () => clearInterval(intervalId);
    }, [currentIndex])
    const background = imageData[currentIndex].image;

    return (
        <div style={{ backgroundImage: `url(${background})` }} className='autoImageSliderContainer'>
            <h2>{imageData[currentIndex].heading}</h2>
            <p>{imageData[currentIndex].para}</p>
            <Buttons className='autoImageSliderButtons' title={imageData[currentIndex].name}/>
        </div>
    )
}

export default AutoImageSlider