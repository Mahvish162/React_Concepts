import React from "react";
import "../Styles/global.css"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"


const Home = () => {
    return (
        <>
        <Nav/>
        
            <div className="banner">
                <img src="http://wallpapercave.com/wp/k4MoxI3.jpg" alt="" />
            </div>

            <center><h1>Product</h1></center>

            <div className="container">
                <img src="https://i.pinimg.com/originals/ce/f9/f7/cef9f77d387c10b8f258b0faf61f5f38.jpg" alt="" />
                <img src="https://i.pinimg.com/originals/ce/f9/f7/cef9f77d387c10b8f258b0faf61f5f38.jpg" alt="" />
                <img src="https://i.pinimg.com/originals/ce/f9/f7/cef9f77d387c10b8f258b0faf61f5f38.jpg" alt="" />
            </div>
            <div className="container">
                <img src="https://i.pinimg.com/originals/ce/f9/f7/cef9f77d387c10b8f258b0faf61f5f38.jpg" alt="" />
                <img src="https://i.pinimg.com/originals/ce/f9/f7/cef9f77d387c10b8f258b0faf61f5f38.jpg" alt="" />
                <img src="https://i.pinimg.com/originals/ce/f9/f7/cef9f77d387c10b8f258b0faf61f5f38.jpg" alt="" />
            </div>
            <Footer/>
        </>
    )
}
export default Home