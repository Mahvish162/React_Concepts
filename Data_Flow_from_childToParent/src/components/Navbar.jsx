import React from 'react'

const Navbar = (props) => {

    function changeTheme(){
        props.setTheme('Dark')
    }

  return (
    <div>
      <button onClick={changeTheme} style={{color:"red"}}>Change Theme</button>
    </div>
  )
}

export default Navbar