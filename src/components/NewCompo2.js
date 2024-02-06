import React from 'react'
import Suggestion from './Suggestion'
import NewComponent from './NewComponent'

const NewCompo2 = ({ ankit, choudhary }) => {
    return (
        <div className=' bg-white w-[95%] h-auto absolute z-[250] left-[38px] top-[123px] flex flex-col flex-wrap gap-3 p-3 '>
            {
                (ankit.length > 0 || choudhary.length > 0) ?
                    (<><Suggestion data={choudhary} /><NewComponent data={ankit} /></>) :
                    (<h1>No Result Found</h1>)
            }
        </div>
    )
}

export default NewCompo2