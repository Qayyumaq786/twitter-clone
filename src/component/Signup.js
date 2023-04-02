import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    })
    const navigate=useNavigate();
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });


    }
    const postData = async () => {
        
        
        const { name, phone, email, password } = user;
        const res = await fetch("https://testing-1ca65-default-rtdb.firebaseio.com/singnupdetails.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                phone,
                email,
                password,
            })
        });
        if(res){

        setUser({name: "",
        phone: "",
        email: "",
        password: "",})

        alert("Account Created Successfully .");
        
        navigate("/");
        }
    //    const r=await fetch("https://testing-1ca65-default-rtdb.firebaseio.com/singnupdetails").then((res)=>{
    //     return res.json();
    //    })
    //    console.log(r);
        
       



    }


    return (
        <div style={{ height: "100%", margin: "100px auto", color: " rgb(29, 161, 242)" }}>
            <div >
                <i class="fa-brands fa-twitter" style={{ fontSize: "80px" }}></i>
            </div>
            <h2>Create an account</h2>
            <form method="POST" onSubmit={(e)=>{e.preventDefault();
            postData()}} >
                <div className="form-group my-2" >
                    <label htmlFor="name"><b>Name</b></label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp"
                        onChange={getUserData}
                        name="name"
                        value={user.name}
                        required

                        placeholder="Enter your name" />

                </div>
                <div className="form-group my-2">
                    <label htmlFor="number"><b>Mobile Number</b></label>
                    <input type="number" className="form-control" id="number"
                        onChange={getUserData}
                        name="phone"
                        value={user.phone}
                        required
                        placeholder="Enter your number" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="exampleInputEmail1"><b>Email address</b></label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={getUserData}
                        name="email"
                        value={user.email}
                        required
                        placeholder="Enter email" />
                    
                </div>
                <div className="form-group my-2">
                    <label htmlFor="exampleInputPassword1"><b>Password</b></label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        onChange={getUserData}
                        name="password"
                        value={user.password}
                        required
                        placeholder="Password" />
                </div>


              

                <button type="submit" class="btn  my-3" style={{backgroundColor:"rgb(29, 161, 242)",color:"white"}}>Sing-up</button>


            </form>
        </div>
    )
}
