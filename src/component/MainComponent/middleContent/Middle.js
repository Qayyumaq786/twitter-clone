import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Middle() {
  return (
    <div className='col-lg-4'>
    <h1>Middle</h1>

    <Outlet/>
    
    </div>
  )
}
