import React from 'react'
import {featuredCardData} from '../../data/Blog/FeaturedCardData'
import '../styles/Blog/FeaturedCard.css'

const FeaturedCard = () => {
  return (
    <>
        {
            featuredCardData.map((card,index) => {
                return(
                    <div className='featuredCard' key={index}>
                        <h4>{card.title}</h4>
                        {
                            card.list.map((singleList,index) =>(
                                <p key={index}>{singleList.name}</p>
                            ))
                        }
                    </div>
                )
            })
        }
    </>
  )
}

export default FeaturedCard