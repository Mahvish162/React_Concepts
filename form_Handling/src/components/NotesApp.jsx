import React, { useState } from 'react'

const NotesApp = () => {

   const [title,setTitle]= useState('')
   const [details,setDetails]=useState('')
   const [task,setTask]=useState([])


    const submitHandler=(e)=>{
        e.preventDefault()
        // console.log(title,details)

        const copyTask=[...task];

        copyTask.push({title,details})
        setTask(copyTask)
        console.log(copyTask)

        setTitle('')
        setDetails('')
    }

    const deleteNote=(idx)=>{
        const copyTask=[...task];
        copyTask.splice(idx,1)
        setTask(copyTask)
    }

  return (
    <div className='min-h-screen bg-black text-white'>
     
       <form onSubmit={(e)=>{
        submitHandler(e)
       }} className="flex gap-4 lg:w-1/2 flex-col item-start p-10">

        <h1 className='text-4xl font-bold'>Add Notes</h1>

         <input type="text" placeholder='Enter the Title' className='border-2 w-full font-medium outline-none rounded p-2' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>

        <textarea name="" id="" placeholder='Enter notes' className='border-2 w-full font-medium outline-none rounded p-2' value={details} onChange={(e)=>{setDetails(e.target.value)}}></textarea>

        <button className='border-2 w-full font-medium rounded p-2 '>ADD</button>

       </form>

      <div className="lg:w-1/2 lg:border-pink-50 p-10">
         <h1 className='text-4xl font-bold'>Recent Notes</h1>
         
        <div className="flex flex-wrap gap-5 mt-5 h-full justify-start items-start overflow-auto">
          
        {task.map((elem,idx)=>{
            return   <div key={idx} className="flex flex-col justify-between items-start relative pt-9 px-7 pb-4 h-57 w-40 rounded-2xl bg-[url('https://i.pinimg.com/736x/34/69/db/3469db1c3f97f0c1b7627c44e734f955.jpg')] bg-cover">
                <div>
                    <h3 className=' text-amber-600 uppercase font-bold text-sm'>{elem.title}</h3>
                <p className=' mt-2 text-amber-400 font-bold text-xs '>{elem.details}</p>
                </div>

                <button onClick={()=>{
                    deleteNote(idx)
                 }} className='w-full cursor-pointer active:scale-95 bg-amber-600 py-1 text-sm rounded-2xl font-bold text-white'>Delete</button>
            </div>
            
        })}


        </div>
      </div>
    </div>
  )
}

export default NotesApp
