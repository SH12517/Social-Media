import React from 'react'
import "./mainpost.css";
import Post from "../PostContainer/Post"
import ContentPost from "../ContentPostContainer/ContentPost"
export default function MainPost() {
  return (
    <div className='mainPostContainer'>
      <ContentPost/>
      <Post/>
      <Post/>
    </div>
  )
}
