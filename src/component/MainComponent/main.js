import React from 'react'

import Middle from './middleContent/Middle'
import RightBar from './RightBar/RightBar'
import SideBar from './sideBar/SideBar'

export default function Main() {
  return (
    <div className="container d-flex">
        <h1>name here</h1>
        <br/>
        <SideBar/>
        <Middle/>
        <RightBar/>
    </div>
    
  )
}
