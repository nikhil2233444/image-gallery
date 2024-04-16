import React from 'react'

function Rightbar1({data,color,bgcolor}) {
  return (
   <div className="right_container" style={{
    backgroundColor:`${bgcolor}`,
    color:'white'
  }} >
    <div className="postImg">
      
    <img  id='_img'src={data.img} alt="" />

      <div className="inside_img">
        <div className="img">
        <img src={data.authorImg} alt="" />
        </div>
      

      <div className="text">
        <h3>{data.authorName}</h3>
        <p >{data.authortext}</p>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Rightbar1
