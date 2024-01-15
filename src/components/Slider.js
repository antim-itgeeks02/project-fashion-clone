import React from 'react'
import './styles/Slider.css'

const Slider = ({ products }) => {
    return (
        <div className='product'>
            {products.map((product, index) => {
                return (
                    <div className='singleProduct' key={index}>
                        <img src={product.image} />
                        <p>{product.name}</p>
                        <p>{product.brand}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default Slider

