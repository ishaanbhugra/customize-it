import React, { useEffect, useRef } from 'react'
import './jscolor'; // Importing jscolor library
import ColorPicker from './ColorPicker';


const Left = () => {
    
        // const colorInputRef = useRef(null);
    
        // useEffect(() => {
        //     // Initialize jscolor on component mount
        //     if (colorInputRef.current) {
        //         new window.jscolor(colorInputRef.current);
        //     }
        // }, []);


  return (
    <>
    <div>WHAT'S ON YOUR MIND</div>

   <p>Select color: 
    <input id='color' data-jscolor=""></input>

    {/* <ColorPicker /> */}


    {/* Color: <input ref={colorInputRef} defaultValue="#3399FF80" data-jscolor="{}" /> */}
    </p> 
    {/* const userInput = document.getElementById('color').value;
    console.log(id)   */}
   </>
  )
}

export default Left