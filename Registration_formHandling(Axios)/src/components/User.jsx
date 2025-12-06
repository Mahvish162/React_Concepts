import axios from 'axios'
import React, { useState } from 'react'

const User = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [location, setLocation] = useState("")
    const [data, setData] = useState([])
    const [showData, setShowData] = useState(false)

    
    const toggle = () => {
        setShowData(!showData)
    }

    let printUserData = data.map((elem) => {
        return <div>
            <p>Name : {elem.name}</p>
            <p>Email : {elem.Email}</p>
            <p>Password : {elem.pass}</p>
            <p>Location : {elem.location}</p>
        </div>
    })

    const getData = async () => {
        let response = await axios.get(`http://localhost:5000/users`)
        console.log(response)
        setData(response.data)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const userData = { name, email, pass, location }
        axios.post("http://localhost:5000/users", userData)
            .then(() => {
                alert("data saved successfully");
                getData();
                toggle();
                setName("")
                setEmail("")
                setPass("")
                setLocation("")

            })
            .catch((err) => { console.log(err) })
    }

    return (
        <div className='main'>

            <h2>FILL FORM:</h2>

            <form onSubmit={onSubmit} >
                <input type="text" placeholder='enter a name' value={name} onChange={(e) => {
                    setName(e.target.value)
                }} required /> <br /> <br />
                <input type="text" placeholder='enter a email' value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} required /> <br /> <br />
                <input type="text" placeholder='enter a password' value={pass} onChange={(e) => {
                    setPass(e.target.value)
                }} required /> <br /> <br />
                <input type="text" placeholder='enter a location' value={location} onChange={(e) => {
                    setLocation(e.target.value)
                }} required /> <br /> <br />

                <button>submit</button>
            </form>

            {showData && printUserData}

        </div>
    )
}

export default User