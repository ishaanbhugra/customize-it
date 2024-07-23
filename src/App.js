import './App.css';
import Footer from './Components/Footer';
import Left from './Components/Left';
import Right from './Components/Right';

function App() {
  return (
   <>
   <h1 style={{textAlign:"center"}}>CUSTOMIZE-IT</h1>

<div style={{justifyContent:"space-around", display:"flex", width:"90vw", margin:"auto"}}>

   <div style={{textAlign:"center",width:"90vw",height:"80vh", border:"2px solid white"}}>
   <Left />
   </div>

   {/* <div style={{textAlign:"center",width:"40vw",height:"85vh", border:"2px solid white"}}>
   <Right />
   </div> */}

</div>

<Footer/>
   </>
  );
}

export default App;
