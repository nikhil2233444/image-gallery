import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { SiTheconversation } from "react-icons/si";
import { FaWallet } from "react-icons/fa";

import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";

function Sidebar1({color,bgcolor}) {
  return (
    <>
      <div className="side_bar_component" style={{
        backgroundColor:`${bgcolor}`,
        color:`${color}`
      }}>
        <div className="top_content">
            <div className="items"><FaHome className='icons'/>Home</div>
            <div className="items"><IoIosNotifications className='icons' />Notification</div>
            <div className="items"><FaBagShopping className='icons' />Shop</div>
            <div className="items"><SiTheconversation className='icons'/>conversation</div>
            <div className="items"><FaWallet className='icons' />Wallet</div>
            <div className="items"><MdSubscriptions className='icons' />Subscription</div>
            <div className="items"><CgProfile className='icons'/>My Profile</div>
        </div>
        <div className="bottom_content items">
        <IoIosLogOut className='icons'/> Log Out!
        </div>
      </div>
    </>
  )
}

export default Sidebar1
