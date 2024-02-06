import React from 'react'
import { Link } from 'react-router-dom'

const NewComponent = ({ data }) => {

    return (
        data.length > 0 &&
        (<>
            <h3 className='border-b border-[#d5d5d5] font-bold p-3 pt-0'>Products</h3>
            <div className='flex flex-wrap gap'>
                {
                    data.map((singelData, index) => {
                        return (
                            <div key={index} className=' flex flex-col items-center'>
                                <Link to={`products/${singelData.handle}`}><img className=' w-[193px] h-[257px] ' src={singelData.images[0].src} alt='Not Found' /></Link>
                                <div className=' flex flex-col items-center'>
                                    <Link to={`products/${singelData.handle}`} className='allAnchorsBlack'><p>{singelData.vendor}</p></Link>
                                    <Link to={`products/${singelData.handle}`} className='allAnchorsBlack'><p>{singelData.title}</p></Link>
                                    <p>$ {singelData.variants[0].price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>)
    )
}

export default NewComponent