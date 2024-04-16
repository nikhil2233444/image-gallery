import React from 'react'
import { FcSearch } from "react-icons/fc";
import { IoFilter } from "react-icons/io5";
import { BsToggle2On } from "react-icons/bs";
import { BsToggle2Off } from "react-icons/bs";

function Navbar({color,toggle,bgcolor,togglebutton}) {
  return (
    <>
      <div className="nav-bar"
      >
        <div className="logo"  style={{
        backgroundColor:`${bgcolor}`,
        color:`${color}`
         }}> WDM 
        <div onClick={togglebutton}>
          {toggle ? (<BsToggle2On/>) : (<BsToggle2Off/>)}
        
        </div>
         </div>

        <div className="search" style={{
        backgroundColor:`${bgcolor}`,
        color:`${color}`
      }}>
            <div className="left"> <FcSearch />search here....</div>
            <div className="right"><IoFilter/>Filter</div>
        </div>
        <div className="seller" style={{
        backgroundColor:`${bgcolor}`,
        color:`${color}`
      }}>Become a seller!</div>
      </div>
    </>
  )
}

export default Navbar
