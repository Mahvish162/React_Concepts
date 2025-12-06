import axios from 'axios'
import React, { useState } from 'react'

const Employee = () => {

    const [empName, setEmpName] = useState("")
    const [empJobRole, setEmpJobRole] = useState("")
    const [empJobLoc, setEmpJobLoc] = useState("")
    const [data, setData] = useState([])
    const [showData, setShowData] = useState(false)

    const toggle = () => {
        setShowData(!showData)
    }

    const getData = async () => {
        const resp = await axios.get('http://localhost:5000/employee');
        console.log(resp)
        setData(resp.data)
    }

    const printUserData = data.map((elem) => {
        return <div className='min-height-[50px] min-width-[50px] bg-white rounded-3xl p-5 text-black'>
            <p><span className='font-bold'>Emp. Name</span>: {elem.empName}</p>
            <p><span className='font-bold'>Emp. Job Role</span>: {elem.empJobRole}</p>
            <p><span className='font-bold'>Emp Job Location</span>: {elem.empJobLoc}</p>
        </div>

    })

    const onSubmit = (e) => {
        e.preventDefault()
        const empData = { empName, empJobRole, empJobLoc }
        axios.post('http://localhost:5000/employee', empData)
            .then(() => {
                // console.log(empData)
                alert("Data saved successfully")
                getData()
                toggle()
                setEmpName("")
                setEmpJobLoc("")
                setEmpJobRole("")
            })
    }

    return (
        <div className='bg-black min-h-screen w-screen flex justify-center items-center flex-col'>

            <div className="p-10 flex flex-col justify-between items-start border-2xl text-white bg-black-400 rounded-4xl border-white border-2  m-5">

                <form className='flex flex-col gap-10 justify-center items-center m-auto' onSubmit={onSubmit}>

                    <h1 className='text-[30px] font-bold'>Employee Form</h1>

                    <div className='flex gap-10 justify-center items-center'>
                        <label className="text-2xl font-light" htmlFor="name">Employee Name    : </label>
                        <input type="text" id="name" placeholder='Enter the name' className='border-2 border-amber-50 rounded-2xl p-2 pl-5' value={empName} onChange={(e) => {
                            setEmpName(e.target.value);
                        }} />
                    </div>
                    <div className='flex gap-10 justify-center items-center'>
                        <label className="text-2xl font-light" htmlFor="role">Employee Job Role    : </label>
                        <select id="role" className='border-2 border-amber-50 rounded-2xl p-2 pl-5 bg-black' value={empJobRole} onChange={(e) => {
                            setEmpJobRole(e.target.value);
                        }}>
                            <option value="Hr">HR</option>
                            <option value="React Developer">React Developer</option>
                            <option value="Front End Developer">Front End Developer</option>
                            <option value="Node.Js Developer">Node.Js Developer</option>
                        </select>
                    </div>
                    <div className='flex gap-15 justify-center items-center'>
                        <label className="text-2xl font-light" htmlFor="location">Employee Job Location    : </label>
                        <select id="location" className='border-2 border-amber-50 rounded-2xl p-2 pl-15 bg-black' value={empJobLoc} onChange={(e) => {
                            setEmpJobLoc(e.target.value);
                        }}>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Pune">Pune</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                    </div>
                    <div className='flex gap-10 justify-center items-center'>
                        <button className='border-2 border-amber-50 rounded-2xl p-2 bg-black'>Submit</button>

                    </div>

                </form>

            </div>
             <div className='flex flex-wrap gap-10 p-7 justify-center items-start'>
                    {showData && printUserData}
                </div>
        </div>
    )
}

export default Employee