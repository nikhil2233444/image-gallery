import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

function Postbar1({data,bgcolor,color}) {
    return (
        <>
            <div className="post_container" style={{
        backgroundColor:`${bgcolor}`,
        color:`${color}`
      }}>
                <div className="person">
                    <div className="author">
                        <div className="img">
                            <img src={data.pImg} />
                        </div>
                        <div className="text">
                            <h3>{data.userName}</h3>
                            <p>{data.title}</p>
                        </div>
                    </div>

                    <div className="dot"><BsThreeDotsVertical/></div>
                </div>
                <p className='parr'> {data.description}</p>
                <div className="post_image">
                    <img src={data.mImg} alt=""  />
                </div>
               
                <div className="like_comment">
                    <div className="likes"><FaHeart className='items'/>{data.like}{" "}K </div>
                    <div className="comments"><FaComments className='items'/>{data.comment}{" "}K</div>
                    <div className="share"><FaShare className='items'/>{data.share}{""}K</div>
                </div>
            </div>
        </>
    )
}

export default Postbar1
