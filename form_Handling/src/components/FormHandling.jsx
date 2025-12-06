import React from 'react'

const FormHandling = () => {
    
    const onSubmit=(e)=>{
        e.preventDefault()
        console.log("formHandling submitted")
    }

  return (
    <div>
      <formHandling onSubmit={onSubmit}>
        
        <input type="text" />

        <button>submit</button>

      </formHandling>
    </div>
  )
}

export default FormHandling