import React, { useEffect, useState } from 'react'
import '../styles/Home/AutoImageSlider.css'
import { imageData } from '../../data/Home/AutoImageSliderData'
import { Link } from 'react-router-dom';

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
            <button className='autoImageSliderButtons'><Link to={imageData[currentIndex].list[1]} className='allAnchorsWhite'>{imageData[currentIndex].list[0]}</Link></button>
        </div>
    )
}

export default AutoImageSlider