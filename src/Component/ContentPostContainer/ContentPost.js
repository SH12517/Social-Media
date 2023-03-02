import React from "react";
import "./contentpost.css";
import imageIcon from "../images/galleryicon.png";
import emogi from "../images/emogi.jpg";
import videoicon from "../images/videoicon.png";
import profileimage from "../images/profile.png";
export default function ContentPost() {
  return (
    <div>
      <div className="ContentUploadContainer">
        <div style={{ display: "flex", alignItems: "center", padding:10}}>
          <img src={`${profileimage}`} className="profileimage" alt="" />
          <input
            type="text"
            className="containerWritingpart"
            placeholder="Write your real thought"/>
        </div>
        <div>
            <div style={{ display: "flex", marginLeft:"8px" , marginRight:'8px',paddingTop:'20px'}}>
            <img src={`${imageIcon}`} className="icons" alt="" />
            <img src={`${emogi}`} className="icons" alt="" />
            <img src={`${videoicon}`} className="icons" alt="" />
            <button
              style={{
                marginLeft:"340px",
                paddingLeft:"10px",
                paddingRight:"40px",
                paddingTop:5,
                paddingBottom:5,
                border:"none",
                backgroundColor:"green",
                borderRadius: "4px",
                color:'white',
               cursor: "pointer"
              }}
              className="icons">
              Post
            </button>
            </div>
            </div>
          </div>
        </div>
  );
}
