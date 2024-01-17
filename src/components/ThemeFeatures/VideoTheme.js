import React from 'react'

const VideoTheme = () => {
  const src = "https://cdn.shopify.com/videos/c/vp/fd60b4996e154fd39b7c7833198cb4a8/fd60b4996e154fd39b7c7833198cb4a8.HD-1080p-7.2Mbps-21532483.mp4";
  return (
    <div>
      <video autoPlay loop muted width="100%">
        <source src={src} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
    </div>
  )
}

export default VideoTheme