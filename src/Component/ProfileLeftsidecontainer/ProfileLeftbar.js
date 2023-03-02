import React from "react";
import "./profileleftbar.css";
import images from "../images/profile.png";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import gallery1 from "../images/gallery1.jpg";
import image6 from "../images/image6.jpg";
export default function ProfileLeftbar() {
  return (
    <div className="ProfileLeftbar">
      <div className="NotificationsContainer">
        <img src={`${image1}`} className="ProfilePageCover" />
        <div style={{ display: "flex", alignItems: "center", marginTop: -30 }}>
          <img src={`${images}`} className="ProfilePageimage" />
          <div>
            <p
              style={{
                marginLeft: 7,
                marginTop: 23,
                color: "black",
                textAlign: "start",
                fontSize:'18px'
              }}
            >
              {" "}
              Suman{" "}
            </p>
            <p
              style={{
                marginLeft: 7,
                marginTop: -16,
                color: "#aaa",
                textAlign: "start",
                fontSize: 15,
              }}
            >
              {" "}
              Software Developer{" "}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "black", marginLeft: 18, fontSize: "14x" }}>
            Profile Views
          </p>
          <p
            style={{
              color: "black",
              marginRight: 10,
              fontSize: "12x",
              marginTop: 17,
            }}
          >
            {" "}
            43924
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: -20,
          }}
        >
          <p style={{ color: "black", marginLeft: 18, fontSize: "14x" }}>
            Friends
          </p>
          <p
            style={{
              color: "black",
              marginRight: 10,
              fontSize: "12x",
              marginTop: 17,
            }}
          >
            {" "}
            4520
          </p>
        </div>
        <div style={{ marginTop: -20 }}>
          <h5
            style={{
              color: "black",
              marginLeft: 18,
              fontSize: "14x",
              marginRight: 30,
              marginTop: 30,
            }}
          >
            User Bio{" "}
          </h5>
          <p
            style={{
              color: "black",
              fontSize: "12x",
              marginTop: -20,
              textAlign: "star",
              marginLeft: "10px",
            }}
          >
            {" "}
            I am Software Developer and Web Developer and Looking for new Job{" "}
          </p>
        </div>
        <button
          style={{
            width: "100%",
            paddingTop: 7,
            paddingBottom: 7,
            border: "none",
            backgroundColor: "green",
          }}
        >
          Edit Bio
        </button>
      </div>

      <div className="NotificationsContainers">
      <h3 style={{marginTop:8}}> Your Friends</h3>
      <div style = {{display:'flex', justifyContent:'space-between'}}>
      <p style={{marginLeft:'10px', marginTop:-9}}> Friends </p>
      <p style={{marginRight:'10px',color:'#aaa', marginTop:-9}} > See all </p>
      </div>
      
      <div style={{display:'flex', flexWrap:'wrap', marginLeft:5}}>
         <div style={{marginLeft:4}}>
            <img src={`${image2}`} className="friendimage" alt=""/>
            <p style={{marginTop:-2}}> Daniel </p>
         </div>
         <div style={{marginLeft:4}}>
            <img src={`${image6}`} className="friendimage" alt=""/>
            <p style={{marginTop:-2}}> Kishan </p>
         </div>
         <div style={{marginLeft:4}}>
            <img src={`${image5}`} className="friendimage" alt=""/>
            <p style={{marginTop:-2}}> Suresh P</p>
         </div>
         <div style={{marginLeft:4}}>
            <img src={`${image4}`} className="friendimage" alt=""/>
            <p style={{marginTop:-2}}> Samm Y </p>
         </div>
         <div style={{marginLeft:4}}>
            <img src={`${image3}`} className="friendimage" alt=""/>
            <p style={{marginTop:-2}}> Ramesh  </p>
         </div>
         <div style={{marginLeft:4}}>
            <img src={`${img6}`} className="friendimage" alt=""/>
            <p style={{marginTop:-2}}> Vijay y  </p>
         </div>
         <div style={{marginLeft:4}}>
            <img src={`${img7}`} className="friendimage" alt=""/>
            <p style={{marginTop:-2}}> Satish </p>
         </div>         <div style={{marginLeft:4}}>
            <img src={`${image6}`} className="friendimage" alt=""/>
            <p style={{marginTop:-2}}> Kishan  </p>
         </div>
         
         </div>
      </div>
    </div>
  );
}
