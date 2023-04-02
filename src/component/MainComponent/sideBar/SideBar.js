import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className='col-lg-4'>
    <h1>SideBar</h1>

    <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>Notificatioon</li>
        <li>Massages</li>
        <li>Bookmark</li>
        <li>TwitterBlue</li>
        <li>Profile</li>
        <li>More</li>
    </ul>

   <Link to='/main/'> home</Link>
   <Link to='/main/Notification'><button>notification</button></Link> 
    
    </div>

  )
}
