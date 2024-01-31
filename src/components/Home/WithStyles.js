import React from 'react'

const WithStyles = ({item}) => {
  return (
    <div>
        <p>{item.para1}</p>
        <p>{item.para2}</p>
        <p>{item.para3}</p>
    </div>
  )
}

export default WithStyles