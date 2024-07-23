import React from 'react'

const ColorBox = ({ color }) => {
    const boxStyle = {
        width: '40px',
        height: '20px',
        backgroundColor: color,
        border: '1px solid white',
marginTop:"15px", marginLeft:"5px"
      };
  return (
    <div style={boxStyle}>
      {/* You can add any content inside the box if needed */}
    </div>
  )
}

export default ColorBox


