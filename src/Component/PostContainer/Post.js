import React, { useState } from "react";
import "./post.css";
import Profileimage from "../images/profile.png";
import Profileimg from "../images/profile.png";
import LikeIcon from "../images/likeImg.png"
import CommentIcon from "../images/commentImg.png"
import ShareIcon from "../images/shareImg.png"
import MoreIcon from "../images/moreImg.png"
import anotherlikeicon from "../images/anotherlike.jpg"

export default function Post() {
  const [Like, setLike ] = useState(LikeIcon);
  const[count,setCount] = useState(10);
  const[Comments, setComments]=useState([]);
  const [commentwriting,setcommentwriting]= useState('');
  const [show, setshow] = useState(false);
  const handleLike=()=>{
    if(Like===LikeIcon){
      setLike(anotherlikeicon);
      setCount(count+1);
    } else{
      setLike(LikeIcon)
      setCount(count-1);

    }
  }
  const addComment =()=>{
    const comment={
      "id":"61fsb23123123123123",
      "username": "Suman",
      "title": `${commentwriting}`
    }
    setComments(Comments.concat(comment));
  }
 const handleComment =() =>{
  addComment();
 }
 console.log(Comments)
 const handleshow = () => {
  if(show=== false){
    setshow(true)
  } else{
     setshow(false)
  }
 }
  return (
    <div className="PostContainer">
      <div className="SubPostContainer">
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`${Profileimage}`} className="PostImage" />
            <div>
              <p style={{ marginLeft: "8px", textAlign: "start" }}>Suman</p>
              <p
                style={{
                  fontSize: "11px",
                  textAlign: "start",
                  marginLeft: 5,
                  marginTop: -13,
                  color: "#aaa",
                }}
              >
                {" "}
                Following by suman{" "}
              </p>
            </div>
            <img src={`${MoreIcon}`} className="moreIcons" />
          </div>
          <p
            style={{
              textAlign: "start",
              width: "94%",
              marginLeft: 10,
              marginTop: 0,
            }}
          >
            {" "}
            Hello World Its looks Cools{" "}
          </p>
          <img src={`${Profileimg}`} className="PostImages" />
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", marginLeft: "10px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={`${Like}`}
                  className="iconsforPost"
                  onClick={handleLike}
                />
                <p style={{ marginLeft: "6px" }}> {count} Likes </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "20px",

                }}
              >
                <img src={`${CommentIcon}`} className="iconsforPost" onClick={handleshow} style={{cursor: "pointer"}} />
                <p style={{ marginLeft: "6px" }}> 10k Comments </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "150px",
                cursor: "pointer"
                
              }}
            >
              <img src={`${ShareIcon}`} className="iconsforPost" />
              <p style={{ marginLeft: "6px" }}> Shares </p>
            </div>
          </div>
          {show === true ? 
          <div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${Profileimage}`} className="PostImage" />
              {/*<p style={{marginLeft:'7px'}}> Suman</p> */}
              <input
                type="text"
                className="commentinput"
                placeholder="Write your Comment"
                onChange={(e) => setcommentwriting(e.target.value)}
              />
              <button className="addcommentbtn" onClick={handleComment}>
                Post
              </button>
            </div>
            {Comments.map((item) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={`${Profileimage}`} className="PostImage" />
                <p style={{ marginLeft: "7px",fontSize:18, marginTop:8 }}> {item.username}</p>
                <p style={{ marginLeft: "10px" }}>{item.title}</p>
                <p style={{ marginLeft: "21pc" , marginTop:10, color:'#aaa',fontSize:13}}>Reply</p>
              </div>
            ))}
          </div> :''
          }
        </div>
      </div>
    </div>
  );
}
