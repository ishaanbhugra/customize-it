import React from 'react';
import './house.css';

const House = ({color,window,door,flower}) => {

    const houseStyle = {
        top: '20%',
        // left: '75px',
        height: '200px',
        width: '260px',
        backgroundColor: color,
        position: 'relative'
      };
      
      const windowStyle = {
        top: '35px',
        left: '25px',
        height: '80px',
        width: '70px',
        backgroundColor: window,
        zIndex: '3',
        position: 'absolute'
      };
      
      const doorStyle = {
        top: '70px',
        left: '150px',
        height: '130px',
        width: '70px',
        background: door,
        zIndex: '3',
        position: 'absolute'
      };
      
      const flowerStyle = {
        bottom: '0',
        height: '60px',
        width: '60px',
        background: flower,
        zIndex: '4',
        borderRadius: '0px 100px 0px 0px',
        boxShadow: '1px -1px 7px rgba(0, 0, 0, .5)',
        position: 'absolute'
      };
      



  return (
    <>
     {/* <div style={{height: '450px', width: '400px', position: 'relative'}}> */}
      <div style={houseStyle}>
        <div style={doorStyle}></div>
        <div style={flowerStyle}></div>
        <div style={windowStyle}></div>
      </div>
    {/* </div> */}
    </>
  );
}

export default House;