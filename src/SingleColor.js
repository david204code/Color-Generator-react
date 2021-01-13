import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  console.log(hexColor);
  const [alert, setAlert] = useState(false);
  // seperate the each item with a comma
  const bcg = rgb.join(',');
  // console.log(bcg);
  const hex = rgbToHex(...rgb);

  // construct a string
  const hexValue = `#${hexColor}`
  return(
    <>
    {/* for color if the index is greater than 10 ADD one more class which is color-light */}
      <article 
        className ={`color ${index > 10 && 'color-light'}`} 
        style ={{backgroundColor: `rgb(${bcg})`}}
        onClick ={() => {
          setAlert(true);
          // copy the event to the clipboard
          navigator.clipboard.writeText(hexValue);
        }}
      >
        <p className ="percent-value">
          {weight}%  
        </p> 
        <p className ="color-value">
          {hex}
        </p>
        <p className ="color-value">
          {hexValue}
        </p>
        {/* if alert is true than display <p></p>*/}
        {alert && <p className ="alert">copied to clipboard</p>}
      </article>
    </>
  ); 
}

export default SingleColor
