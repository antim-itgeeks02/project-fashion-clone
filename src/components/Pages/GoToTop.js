import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

const GoToTop = () => {
    const [show, setShow] = useState(false)
    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    const heightReached = () => {
        let toShow = 3500;
        // console.log(document.documentElement.scrollTop);
        let windowHeight = document.documentElement.scrollTop;

        if (windowHeight > toShow) {
            setShow(true);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", heightReached);
        return()=>window.removeEventListener('scroll',heightReached);
    }, [])
    return (
        show && (
            <div onClick={goToTop} className='flex justify-end cursor-pointer'><IoIosArrowUp className='w-[2%] h-[2%] text-[grey] ' /></div>
        )
    )
}

export default GoToTop