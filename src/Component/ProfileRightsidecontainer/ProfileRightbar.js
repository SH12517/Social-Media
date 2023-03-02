import React from "react";
import "./profilerightbar.css";
import ads1 from "../images/adsnull.jpg";
import ads2 from "../images/adsimage.jpg";
import ads3 from "../images/ads.png";
import adfriend from "../images/addicon.png";
import image2 from "../images/image1.jpg";
import image3 from "../images/image3.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
export default function ProfileRightbar() {
  return (
    <div className="Profilerightbar">
      <div className="Profilerightcontainer">
      <h3> Friend request </h3>
      <div>
      <div> 
      <div style={{display:"flex", alignItems:'center', marginLeft:'10px', cursor:'pointer'}}>
          <img src={`${image2}`} className="friendsimage" alt=""/>
          <p style={{textAlign:'start',marginLeft:10}}> Rim jonsion want to make you friend </p>
        </div>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <button style= {{paddingLeft:15,paddingRight:15, paddingTop:4, paddingBottom:4, border:"none",borderRadius:5, backgroundColor:'black', color:'white'}}> Accept</button>
          <button style= {{paddingLeft:15,paddingRight:15, paddingTop:4, paddingBottom:4, border:"none",borderRadius:5, backgroundColor:'black', color:'white'}}> Reject </button>
        </div>
      </div>
      <div> 
      <div style={{display:"flex", alignItems:'center', marginLeft:'10px', cursor:'pointer'}}>
          <img src={`${image3}`} className="friendsimage" alt=""/>
          <p style={{textAlign:'start',marginLeft:10}}> Rakesh Y jonsion want to make you friend </p>
        </div>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <button style= {{paddingLeft:15,paddingRight:15, paddingTop:4, paddingBottom:4, border:"none",borderRadius:5, backgroundColor:'black', color:'white'}}> Accept</button>
          <button style= {{paddingLeft:15,paddingRight:15, paddingTop:4, paddingBottom:4, border:"none",borderRadius:5, backgroundColor:'black', color:'white'}}> Reject </button>
        </div>
      </div>
      <div> 
      <div style={{display:"flex", alignItems:'center', marginLeft:'10px', cursor:'pointer'}}>
          <img src={`${img6}`} className="friendsimage" alt=""/>
          <p style={{textAlign:'start',marginLeft:10}}> Dam Saniel want to make you friend </p>
        </div>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <button style= {{paddingLeft:15,paddingRight:15, paddingTop:4, paddingBottom:4, border:"none",borderRadius:5, backgroundColor:'black', color:'white'}}> Accept</button>
          <button style= {{paddingLeft:15,paddingRight:15, paddingTop:4, paddingBottom:4, border:"none",borderRadius:5, backgroundColor:'black', color:'white'}}> Reject </button>
        </div>
      </div>
      </div>
      </div>
      <div className="rightcontainer2">
        <h3 style={{textAlign:'start',marginLeft:'10px'}}> Sugegested for you</h3>
        <div style={{marginTop:'-10px'}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image2}`} className="profileimage" />
              <div>
                <p style={{ marginLeft: "50px", textAlign: "start" }}>Jumann</p>
                <p style={{textAlign: "start", marginLeft:'50px', marginTop:'-16px', fontSize:"11px",color:"#aaa" }}> Suggested for you </p>
              </div>
            </div>
            <div style={{cursor:"pointer"}}>
              <img src={`${adfriend}`} className="addfriend" alt="" />
            </div>
          </div>
          <div style={{marginTop:'-10px'}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image3}`} className="profileimage" />
              <div>
                <p style={{ marginLeft: "50px", textAlign: "start" }}>Danish</p>
                <p style={{textAlign: "start", marginLeft:'50px', marginTop:'-16px', fontSize:"11px",color:"#aaa" }}> Two Mutual friends </p>
              </div>
            </div>
            <div style={{cursor:"pointer"}}>
              <img src={`${adfriend}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{marginTop:'-10px'}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${img6}`} className="profileimage" />
              <div>
                <p style={{ marginLeft: "50px", textAlign: "start" }}>Suman</p>
                <p style={{textAlign: "start", marginLeft:'50px', marginTop:'-16px', fontSize:"11px",color:"#aaa" }}> Followed by suman you </p>
              </div>
            </div>
            <div style={{cursor:"pointer"}}>
              <img src={`${adfriend}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{marginTop:'-10px'}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${img7}`} className="profileimage" />
              <div>
                <p style={{ marginLeft: "50px", textAlign: "start" }}>Suresh Yadav</p>
                <p style={{textAlign: "start", marginLeft:'50px', marginTop:'-16px', fontSize:"11px",color:"#aaa" }}> Suggested for you </p>
              </div>
            </div>
            <div style={{cursor:"pointer"}}>
              <img src={`${adfriend}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{marginTop:'-10px'}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${img8}`} className="profileimage" />
              <div>
                <p style={{ marginLeft: "50px", textAlign: "start" }}>Daniel</p>
                <p style={{textAlign: "start", marginLeft:'50px', marginTop:'-16px', fontSize:"11px",color:"#aaa" , }}> Suggested for you </p>
              </div>
            </div>
            <div style={{cursor:"pointer"}}>
              <img src={`${adfriend}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image3}`} className="profileimage" />
              <div>
                <p style={{ marginLeft: "50px", textAlign: "start" }}>Dhirendra Yadav</p>
                <p style={{textAlign: "start", marginLeft:'50px', marginTop:'-16px', fontSize:"11px",color:"#aaa" , }}> Suggested for you </p>
              </div>
            </div>
            <div style={{cursor:"pointer"}}>
              <img src={`${adfriend}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${image2}`} className="profileimage" />
              <div>
                <p style={{ marginLeft: "50px", textAlign: "start" }}>Danie</p>
                <p style={{textAlign: "start", marginLeft:'50px', marginTop:'-16px', fontSize:"11px",color:"#aaa" , }}> Suggested for you </p>
              </div>
            </div>
            <div style={{cursor:"pointer"}}>
              <img src={`${adfriend}`} className="addfriend" alt="" />
            </div>
          </div>
      </div>
    </div>
  );
}