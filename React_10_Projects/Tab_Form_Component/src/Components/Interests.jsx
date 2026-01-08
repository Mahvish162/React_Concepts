const Interests = ({ data, setData }) => {

  const { interests } = data;

  const handleDataChange = (e) => {
    // If the checkbox is checked, add its value to the interests array.
// If unchecked, remove it—without touching other state data.
    setData((prevState) => ({ ...prevState,
      
      interests: e.target.checked ?
       
      [...prevState.interests, e.target.name] :
       
       prevState.interests.filter((i) => i !== e.target.name) }))  // Removes the unchecked value from array // We use i !== value inside filter() to remove a specific element while keeping the rest of the array immutable.
    //    i    	i !== "Sports"    	Kept?
    // "Music"	        true	            ✅
    // "Sports"      	false	❌          (removed)
    // "Reading"     	true	             ✅
  }

  return (
    <div>
      <div>
        <label htmlFor="">
          <input type="checkbox" name="coding" checked={interests.includes("coding")} onChange={handleDataChange} />Coding
        </label>
      </div>
      <div>
        <label htmlFor="">
          <input type="checkbox" name="music" checked={interests.includes("music")} onChange={handleDataChange} />Music
        </label>
      </div>
      <div>
        <label htmlFor="">
          <input type="checkbox" name="javascript" checked={interests.includes("javascript")} onChange={handleDataChange} />JavaScript
        </label>
      </div>
    </div>
  )
}

export default Interests
