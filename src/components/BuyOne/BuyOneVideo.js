import React from 'react'

const BuyOneVideo = () => {
    const src = "https://cdn.shopify.com/videos/c/vp/709152aa79f54ebb916a8300cbf46847/709152aa79f54ebb916a8300cbf46847.HD-1080p-7.2Mbps-17926183.mp4";
    return (
      <div>
        <video autoPlay loop muted width="100%">
          <source src={src} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </div>
    )
}

export default BuyOneVideo