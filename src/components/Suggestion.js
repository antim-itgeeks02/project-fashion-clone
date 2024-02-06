import React from 'react'
import { Link } from 'react-router-dom'

const Suggestion = ({ data }) => {
    return (
        data.length > 0 && (<div className='tracking-[0.5px] font-[15px] text-[#2b2b2b] '>
            <h3 className='border-b border-[#d5d5d5] font-bold p-3'>Suggestions</h3>
            <div className='flex flex-col p-3 gap-4 pt-4'>
                {
                    data.map((item, index) => (
                        <Link to={item.path} key={index}>{item.name}</Link>
                    ))
                }
            </div>
        </div>)

    )
}

export default Suggestion