import React from 'react'
import { Outlet } from 'react-router-dom'
// import Logininput from './Logininput'
// import Signup from './Signup'




export default function Login() {
  return (
    <div class="row" style={{ height: "100vh" }}>
      <div class="col-sm-12 col-md-6 col-lg-6" style={{ backgroundImage: 'url("https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk") ', height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: "center", display: "flex", opacity: "1" }}>


        <div style={{ margin: "auto ", color: " rgb(29, 161, 242)", marginLeft: "290px" }}>
          <h5><i className="fa-solid fa-magnifying-glass fa-beat" ></i>  Follow Your Interests. </h5>
          <h5> <i className="fa-solid fa-people-arrows fa-beat"></i>  Hear What Peaople Are Talking About. </h5>
          <h5><i className="fa-solid fa-comment fa-beat"></i>  Join The Conversation. </h5>
        </div>


      </div>
      <div class="col-sm-12 col-md-6 col-lg-6" style={{ backgroundColor: 'white', position: "relative", justifyContent: "center", display: "flex", height: "100%", marginTop:"07%" }}>

        <Outlet />
      </div>
    </div>
  )
}
