import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import "./profile.css"
import ProfileLeftbar from "../../Component/ProfileLeftsidecontainer/ProfileLeftbar.js"
import ProfileRightbar from '../../Component/ProfileRightsidecontainer/ProfileRightbar.js'
import ProfileMainPost from '../../Component/ProfileMainPostContainer/ProfileMainPost.js'
export default function Profile() {
  return (
    <div className='ProfileContainer'>
        <Navbar/>
        <div className='subProfileContainer'>
            <ProfileLeftbar/>
            <ProfileMainPost/>
            <ProfileRightbar/>
        </div>
    </div>
  )
}
