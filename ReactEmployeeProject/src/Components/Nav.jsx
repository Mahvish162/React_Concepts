import React from 'react'
import "../styles/global.css"
import { Link } from 'react-router-dom'
import ViewStudent from './../Pages/ViewStudent';


const Nav = () => {
    return (
        <>
            <div className="nav">
               <div className="left">
                    <h2>Logo</h2>
               </div>
               <div className="right">
                    <Link to={"/addstudent"} className='link'> <h2>Add</h2></Link>
                    <Link to={"/viewstudent"} className='link'> <h2>View</h2></Link>
               </div>
            </div>
        </>
    )
}

export default Nav