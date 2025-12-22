import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const ViewStudent = () => {  

  const [users, setUsers] = useState([])
  const navigate=useNavigate()

  function fetchData() {
    axios.get("http://localhost:5000/users")
      .then(x => setUsers(x.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  function handleUpdate(id){
    navigate(`/updatestudent/${id}`)
  }
  function handleDelete(id){
    axios.delete(`http://localhost:5000/users/${id}`)
    .then(()=>{
      fetchData()
    })
    .catch((err)=>console.log(err))
  }


  return (
    <>
      <center>
        <h1>View Student</h1> <br /><br />

        {users.map((x) => {
          return <div>

            <h1>Name : {x.name}</h1>
            <h3>Email :{x.email}</h3>
            <h3>Dept : {x.dept}</h3>
            <h3>Course : {x.course}</h3>

            <button onClick={()=>handleUpdate(x.id)}>edit</button>
            <button onClick={()=>handleDelete(x.id)}>delete</button>

            <br /><br />
          </div>
        })}
      </center>
    </>
  )
}

export default ViewStudent
