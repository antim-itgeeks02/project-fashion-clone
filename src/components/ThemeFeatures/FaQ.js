import React, { useState } from 'react'
import'../styles/ThemeFeature/FaQ.css'
import {faqData} from '../../data/ThemeFeature/FaQData'

const FaQ = () => {
  const [mainState,setMainState] = useState(false);
  const handleClick=()=>{
    setMainState(!mainState);
  }
  return (
    <div className='faQMain'>
      <div className='faQDiv'><h2>FAQ</h2></div>
      <div className='faQDiv2'>
      {
        faqData.map((faq,index)=>{
          return(
            <div key={index} className='faQDiv3' >
              <p onClick={handleClick}>{faq.question}</p>
              {mainState &&(<p className='faqP'>{faq.answer}</p>)}
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default FaQ