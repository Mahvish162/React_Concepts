import axios from 'axios'
import React, { useState } from 'react'

const MedicalDetails = () => {

    const [pat_name, setPatName] = useState("")
    const [bloodG, setBloodG] = useState("")
    const [weight, setWeight] = useState("")
    const [data,setData]=useState([])
    const [show,setShow]=useState(false)

    const toggle=()=>{
        setShow(!show);
    }

    const printUserData=data.map((elem)=>{
        
        return <div>
            <h5>Patients name : {elem.pat_name}</h5>
            <h5>Blood Group : {elem.bloodG}</h5>
            <h5>Patients Weight : {elem.weight}</h5>
        </div>
    })

    const getData= async ()=>{
        const resp= await axios.get('http://localhost:5000/medicalDetails')
        console.log(resp)
        setData(resp.data)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const patientDet = { pat_name, bloodG, weight }
        axios.post("http://localhost:5000/medicalDetails", patientDet)
            .then(() => {
                alert("Pateints data saved successfully")
                getData();
                toggle();
                setPatName("")
                setBloodG("")
                setWeight("")
            })
    }

    return (
        <div>

            <h1>Enter your Medical details here 👇</h1>

            <form onSubmit={onSubmit}>
                <label htmlFor="name">Patients Name :</label>
                <input type="text" id="name" value={pat_name} onChange={(e) => {
                    setPatName(e.target.value)
                }} />
                <br /><br />
                <label htmlFor="bloodG">Blood Group :</label>
                <select id="bloodG" value={bloodG} onChange={(e) => {
                    setBloodG(e.target.value)
                }}>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="F">F</option>
                </select>
                <br /><br />
                <label htmlFor="weight">Weight</label>
                <input type="text" placeholder='Enter weight' id="weight" value={weight} onChange={(e) => {
                    setWeight(e.target.value);
                }} required />

                <br /><br />
                <button>submit</button>

                {show && printUserData}
            </form>
        </div>
    )
}

export default MedicalDetails
