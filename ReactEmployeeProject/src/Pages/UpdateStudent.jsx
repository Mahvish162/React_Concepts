import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const UpdateStudent = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [dept, setDept] = useState("")
    const [course, setCourse] = useState("")
    let { id } = useParams()
    let navigate=useNavigate()

    function handleUpdate(e) {
        e.preventDefault()
        let userData = { name, email, dept, course }
        axios.put(`http://localhost:5000/users/${id}`, userData)
            .then(() => {
                navigate("/viewstudent")
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${id}`)
            .then(x => {
                setName(x.data.name)
                setEmail(x.data.email)
                setDept(x.data.dept)
                setCourse(x.data.course)
            })
    }, [])
    
    return (

        <>
            <center><h2>Update student</h2></center>
            <br />
            <br />
            <center>
                <form action="" onSubmit={handleUpdate}>

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
                    <button >Update student</button>
                </form>
            </center>
        </>
    )
}

export default UpdateStudent
