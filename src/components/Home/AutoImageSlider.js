import React, { useEffect, useState } from 'react'
import '../styles/Home/AutoImageSlider.css'
import { imageData } from '../../data/Home/AutoImageSliderData'
import { Link } from 'react-router-dom';

const AutoImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [bar, setBar] = useState(0);
    const [bar2, setBar2] = useState(0);

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
    const value = () => setTimeout(() => {
        if (currentIndex === 0) {
            setBar2(0);
            bar === 100 ? setBar(0) : setBar(bar + 2.59)
        } else {
            setBar(0);
            (bar2 === 100 ? setBar2(0) : setBar2(bar2 + 2.59))
        }
    }, 100);
    value();
    const background = imageData[currentIndex].image;

    return (
        <div style={{ backgroundImage: `url(${background})` }} className='autoImageSliderContainer' >
            <div className='autoImageSliderContainer'>
                <h2>{imageData[currentIndex].heading}</h2>
                <p>{imageData[currentIndex].para}</p>
                <Link to={imageData[currentIndex].list[1]} className='allAnchorsWhite'><button className='autoImageSliderButtons'>{imageData[currentIndex].list[0]}</button></Link>
            </div>
            <div className='processBar'>
                <div style={{ backgroundColor: '#333', height: '3px', width: '30px' }}>
                    <div style={{ width: `${bar}%`, backgroundColor: '#ccc', height: '3px' }}></div>
                </div><br />
                <div style={{ backgroundColor: '#333', height: '3px', width: '30px' }}>
                    <div style={{ width: `${bar2}%`, backgroundColor: '#ccc', height: '3px' }}></div>
                </div>
            </div>
        </div>
    )
}

export default AutoImageSlider