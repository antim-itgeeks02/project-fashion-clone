import React from 'react'
import parse from 'html-react-parser'
import '../styles/BuyOne/ParserHt.css'

const ParserHt = ({ data }) => {
  return (
    <div className='parse'>{parse(data)}</div>
  )
}

export default ParserHt