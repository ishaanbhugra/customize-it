import React, { useEffect, useRef, useState } from 'react'
import { HexColorPicker, } from "react-colorful";
import ColorBox from './ColorBox';
import axios from 'axios';
import House from './House';
// import './house.css';


const Left = () => {

  const [color, setColor] = useState("brown");
  const [window, setWindow] = useState("skyBlue");
  const [door, setDoor] = useState("pink");
  const [flower, setFlower] = useState("yellow");



  // console.log(color)
  // const hexColor = '#ff5733';

  // axios.post('http://localhost:3001/colour', {
  //   color:{color}
  // })
  // .then(res=>{
  //   console.log(res.data)
  // })
  // .catch(err=>{
  //   console.log(err)
  // })










  return (
    <>
      <h2>DESIGN YOUR HOUSE !</h2>
      <div style={{ display: "flex", justifyContent:"space-around" }}>
      <div style={{ display: "flex", flexDirection:"column" }}>
        <p style={{ textAlign: "left", marginLeft: "10px" }}>SELECT BUILDING COLOUR: </p>
        <div>
          <HexColorPicker color={color} onChange={setColor} style={{ marginLeft: "10px", marginRight: "10px" }} />
          {/* <p>{color}</p> */}
          {/* <ColorBox color={color} /> */}
        </div>



        <p style={{ textAlign: "left", marginLeft: "10px" }}>SELECT WINDOW COLOUR: </p>
        <div>
          <HexColorPicker color={window} onChange={setWindow} style={{ marginLeft: "10px", marginRight: "10px" }} />


          {/* <div>
              <h1>Color Box</h1>
              <ColorBox color={window} />
            </div> */}
        </div>

        </div>


        <div style={{ display: "flex", flexDirection:"column" }}>
        <p style={{ textAlign: "left", marginLeft: "10px" }}>SELECT DOOR COLOUR: </p>
        <div>
          <HexColorPicker color={door} onChange={setDoor} style={{ marginLeft: "10px", marginRight: "10px" }} />


          {/* <div>
                <h1>Color Box</h1>
                <ColorBox color={door} />
              </div> */}
        </div>



        <p style={{ textAlign: "left", marginLeft: "10px" }}>SELECT FLOWER COLOUR: </p>
        <div>
          <HexColorPicker color={flower} onChange={setFlower} style={{ marginLeft: "10px", marginRight: "10px" }} />
        </div>


        {/* <div>
                  <h1>Color Box</h1>
                  <ColorBox color={flower} />
                </div> */}

</div>
<div>
  <p>YOU IMAGINED YOUR HOUSE LIKE THIS:</p>
<House color={color} window={window} door={door} flower={flower}/>

</div>

</div>
        



     
    </>
  )
}

export default Left