import React from 'react'
import '../styles/Home/ReviewSection.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WithStyles from './WithStyles';
import {ratingData} from '../../data/Home/ReviewSectionData'

const ReviewSection = () => {
  return (
    <>
      <div className='reviewSection'>
        <h2>DON'T JUST TAKE OUR WORD FOR IT</h2>
        <p>What our customers are saying...</p>
      </div>
      <div style={{padding:'20px',margin:'10px'}}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {
            ratingData.map((item,index)=>(
              <WithStyles key={index} item={item}/>
            ))
          }
        </Carousel>
      </div>
    </>
  )
}

export default ReviewSection

