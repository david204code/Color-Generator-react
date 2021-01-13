import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  console.log(hexColor);
  const [alert, setAlert] = useState(false);
  // seperate the each item with a comma
  const bcg = rgb.join(',');
  // console.log(bcg);
  const hex = rgbToHex(...rgb);

  return(
    <>
    {/* for color if the index is greater than 10 ADD one more class which is color-light */}
      <article className ={`color ${index > 10 && 'color-light'}`} style ={{backgroundColor: `rgb(${bcg})`}}>
        <p className ="percent-value">
          {weight}%  
        </p> 
        <p className ="color-value">
          {hex}
        </p>
        <p className ="color-value">
          #{hexColor}
        </p>
      </article>
    </>
  ); 
}

export default SingleColor
