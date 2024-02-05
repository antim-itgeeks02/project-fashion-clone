import React from 'react'
import { Link } from 'react-router-dom'

const NewComponent = ({ data }) => {

    return (
        <div className=' bg-white w-[95%] h-auto absolute z-[250] border left-[38px] top-[123px] flex flex-wrap gap-3 p-3 '>
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
    )
}

export default NewComponent