import React from 'react';
import Navbar from './componets/Navbar'
import Rightbar1 from './componets/Rightbar1';
import Sidebar1 from './componets/Sidebar1';
import Postbar1 from './componets/Postbar1';
import {data} from './Data'
import { data2 } from './Data';
import { useState } from 'react';

function App() {
 
  const [bgColor, setbgColor] = useState("#232D3f")
  const [color, setColor] = useState("white")
  const [toggle, setToggle] = useState(true)

  const toggleButton = () =>{
    setToggle(!toggle)
    if(toggle){
      setbgColor("rgb(255,255,255)");
      setColor("black")
      document.querySelector("body").style.backgroundColor = "#cbc5c5"
    }else{
      setbgColor("#232D3f");
      setColor("white");
      document.querySelector("body").style.backgroundColor = "black";
    }
  }


  return (
    <>
    <Navbar bgColor={bgColor} color={color} toggle={toggle} togglebutton={toggleButton}/>

    <div className="container">

      <div className="side_bar">
        <Sidebar1 bgColor={bgColor} color={color}  />
      </div>

      <div className="postbar">
        {
          data.map((d)=> <Postbar1 key={d.id} data={d} bgColor={bgColor} color={color}  /> )
        }
      </div>


      <div className="right_bar">
        { data2.map((d) =>  <Rightbar1 key={d.id} data={d} bgColor={bgColor} color={color} /> )  }
      
      </div>

    
    </div>
    </>
  )
}

export default App


