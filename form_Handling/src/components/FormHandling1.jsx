import React, { useState } from 'react'

const FormHandling1 = () => {

    const [name, setName] = useState("")
    const [show,setShow]=useState(false)

    const onSubmit = (e) => {

        e.preventDefault()
        console.log("form submitted by ",name)
        // setName('')
    }

    const toggle=()=>{
        setShow(!show)
    }

    return (
        <div className='flex justify-center pt-[45%]'>
            <form onSubmit={(e)=>{
                    onSubmit(e)
                }} className=' bg-gray-200 flex flex-col justify-center align-middle gap-5 p-5 rounded-2xl border-black border-2'>
                {/* <h1>Name : {name}</h1> */}
                <input type="text" placeholder='enter the name' className='border-2 p-3 rounded-2xl' value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />
                <button onClick={toggle} className='border-2 p-2 rounded-2xl bg-gray-400 '>submit</button>            
                {show && <h1>Form Submitted By : {name}</h1> }

            </form>
            {/* <h1>Form Submitted By : {name}</h1> */}
            


        </div>
    )
}

export default FormHandling1
