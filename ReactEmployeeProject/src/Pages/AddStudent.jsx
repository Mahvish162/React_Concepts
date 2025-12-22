import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [dept, setDept] = useState("")
    const [course, setCourse] = useState("")

    let navigate=useNavigate()
    
    function handleData(e) {
        e.preventDefault()
        const userData = { name, email, dept, course }
        axios.post('http://localhost:5000/users', userData)
            .then(() => {
                setName("")
                setEmail("")
                setDept("")
                setCourse("")
                navigate("/viewstudent")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <center><h2>Add student</h2></center>
            <br />  
            <br />
            <center>
                <form action="" onSubmit={handleData}>

                    <input type="text" placeholder='Enter name' value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} required /> <br /> <br />
                    <input type="email" placeholder='Enter email' value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} required /> <br /> <br />
                    <input type="text" placeholder='Enter department' value={dept} onChange={(e) => {
                        setDept(e.target.value)
                    }} required /> <br /> <br />
                    <input type="text" placeholder='Enter course' value={course} onChange={(e) => {
                        setCourse(e.target.value)
                    }} required /> <br /> <br />
                    <button>Add student</button>
                </form>
            </center>
        </>
    )
}

export default AddStudent
