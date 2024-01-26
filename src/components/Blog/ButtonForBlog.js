import React from 'react'

const ButtonForBlog = ({title}) => {
    const mystyle = {
        width: "100%",
        cursor: "pointer",
        color: "white",
        fontWeight: "500",
        padding: "15px 15px",
        letterSpacing: "1px",
        backgroundColor: "#2b2b2b",
        border: "2px solid #2b2b2b",
        fontSize: "15px"
      };
  return (
    <button style={mystyle}>{title}</button>
  )
}

export default ButtonForBlog