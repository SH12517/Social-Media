import React from 'react'
import "./profilemainpost.css";
import Coverimage from "../images/image1.jpg"
import Post from "../PostContainer/Post"
import ContentPost from "../ContentPostContainer/ContentPost"
export default function MainPost() {
  return (
    <div className='ProfilemainPostContainer'>
    <div>
      <img src={`${Coverimage}`} className='profilecoverimage' alt=''/>
        <h2 style={{marginTop:-44,color:'white', textAlign:'start',marginLeft:"34px"}}> Your Profile</h2>
    </div>


    <ContentPost/>
      <Post/>
      <Post/>
      <Post/>

    </div>
  )
}
