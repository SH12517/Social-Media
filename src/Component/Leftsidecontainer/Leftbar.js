import React from "react";
import "./leftbar.css";
import image from "../images/Profile.jpg"
import images from "../images/profile.png"
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"
import img6 from "../images/img6.jpg"
import img7 from "../images/img7.jpg"
import gallery1 from "../images/gallery1.jpg"
import image6 from "../images/image6.jpg"
export default function leftbar() {
  return (
    <div className="leftbar">
      <div className="NotificationsContainer">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                     <p  style={{marginLeft:"-14px"}}> Notificaton</p>
                     <p style={{ color: "#aaa",marginLeft:"40px"}}> See all </p>
            </div>
            <div style={{display:'flex', alignItems:'center', marginTop:-10}}>
               <img src={`${image}`} className='notificationimg' alt=""/>
               <p style={{marginLeft:'5px', color:'#aaa', fontSize:'13' , textAlign:"start" ,width:"120px"}}>Madan like your post</p>
               <img src={`${image}`} className="likeimage" />
            </div>
            <div style={{display:'flex', alignItems:'center', marginTop:-10}}>
               <img src={`${images}`} className='notificationimg' alt=""/>
               <p style={{marginLeft:'5px', color:'#aaa', fontSize:'13', textAlign:"start" ,width:"120px"}}> Suman Started following you</p>
               <img src={`${images}`} className="likeimage" />
            </div>
            <div style={{display:'flex', alignItems:'center' , marginTop:-10}}>
               <img src={`${image6}`} className='notificationimg' alt=""/>
               <p style={{marginLeft:'5px', color:'#aaa', fontSize:'13' , textAlign:"start" ,width:"120px"}}>Suman like your post</p>
               <img src={`${image6}`} className="likeimage" />
            </div>
            <div style={{display:'flex', alignItems:'center', marginTop:-10}}>
               <img src={`${image2}`} className='notificationimg' alt=""/>
               <p style={{marginLeft:'5px', color:'#aaa', fontSize:'13' , textAlign:"start" ,width:"120px"}}>Suresh like your post</p>
               <img src={`${image2}`} className="likeimage" />
            </div>
            <div style={{display:'flex', alignItems:'center', marginTop:-10}}>
               <img src={`${image1}`} className='notificationimg' alt=""/>
               <p style={{marginLeft:'5px', color:'#aaa', fontSize:'13' , textAlign:"start" ,width:"120px"}}>Ramesh started following you</p>
               <img src={`${image1}`} className="likeimage" />
            </div>
            <div style={{display:'flex', alignItems:'center' , marginTop:-10}}>
               <img src={`${image4}`} className='notificationimg' alt=""/>
               <p style={{marginLeft:'5px', color:'#aaa', fontSize:'13', textAlign:"start" ,width:"120px"}}>Rahul like your post</p>
               <img src={`${image4}`} className="likeimage" />
            </div>
            <div style={{display:'flex', alignItems:'center' , marginTop:-10}}>
               <img src={`${image5}`} className='notificationimg' alt=""/>
               <p style={{marginLeft:'5px', color:'#aaa', fontSize:'13' , textAlign:"start" ,width:"120px"}}>Sohan started following you</p>
               <img src={`${image5}`} className="likeimage" />
            </div>
            <div style={{display:'flex', alignItems:'center', marginTop:-10}}>
               <img src={`${images}`} className='notificationimg' alt=""/>
               <p style={{marginLeft:'5px', color:'#aaa', fontSize:'13' , textAlign:"start" ,width:"120px"}}>Mohan like your post</p>
               <img src={`${images}`} className="likeimage" />
            </div>
       </div>
       
<div className="NotificationsContainer">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                     <p style={{marginLeft:'-8px'}}> Explore </p>
                     <p style={{ color: "#aaa",  marginLeft:"40px"}}> See all </p>
            </div>
            <div style={{ alignItems:'center'}}>
               <img src={`${images}`} className='exploreimage' alt=""/>
               <img src={`${image1}`} className='exploreimage' alt=""/>
               <img src={`${image2}`} className='exploreimage' alt=""/>
               <img src={`${image3}`} className='exploreimage' alt=""/>
               <img src={`${image4}`} className='exploreimage' alt=""/>
               <img src={`${image6}`} className='exploreimage' alt=""/>
               <img src={`${image5}`} className='exploreimage' alt=""/>
               <img src={`${image1}`} className='exploreimage' alt=""/>
               <img src={`${image6}`} className='exploreimage' alt=""/>
               <img src={`${img6}`} className='exploreimage' alt=""/>
               <img src={`${img7}`} className='exploreimage' alt=""/>
               <img src={`${gallery1}`} className='exploreimage' alt=""/>
            </div>
            

            </div>
     </div>
  );
}
