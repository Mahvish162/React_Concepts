const Profile = ({data,setData}) => {
    const {name,email,age}=data;

    const handleDataChange=(e,item)=>{
        setData((prevState)=>({
            ...prevState,
            [item]:e.target.value       // dynamic value for name,email,age
        }))
    }

  return (
    <div>
      <div>
        <label htmlFor="">Name :</label>
        <input type="text" value={name} onChange={(e)=>handleDataChange(e,"name")}/>
      </div>
      <div>
        <label htmlFor="">Email :</label>
        <input type="text" value={email} onChange={(e)=>handleDataChange(e,"email")}/>
      </div>
      <div>
        <label htmlFor="">Age :</label>
        <input type="Number" value={age} onChange={(e)=>handleDataChange(e,"age")}/>
      </div>
    </div>
  )
}

export default Profile