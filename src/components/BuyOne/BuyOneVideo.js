import React from 'react'
import '../styles/BuyOne/BuyOneVideo.css'

const BuyOneVideo = ({src}) => {
    
    return (
      <div>
        <video className='buyOneVideo' autoPlay loop muted >
          <source src={src} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </div>
    )
}

export default BuyOneVideo
