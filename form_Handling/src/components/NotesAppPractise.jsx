import React, { useState } from 'react'

const NotesAppPractise = () => {

    const [note, setNote] = useState('')
    const [details, setDetails] = useState('')
    const [task, setTask] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(title,details)

        const copyTask = [...task];

        copyTask.push({ note, details })
        setTask(copyTask)
        console.log(copyTask)

        setNote('')
        setDetails('')
    }

    const Delete=(idx)=>{
        const copyTask=[...task]
        copyTask.splice(idx,1)
        setTask(copyTask)
    }
    return (
        <div className='min-h-screen flex w-screen bg-black text-white p-10'>

            <form onSubmit={onSubmit} className='flex flex-col w-[50%] gap-10'>

                <h1 className='text-3xl font-bold '>Add a Note </h1>

                <input type="text" placeholder='Enter the title' className='border-2 p-3 text-medium rounded ' value={note} onChange={(e) => { setNote(e.target.value) }} />

                <textarea name="" id="" placeholder='Enter the description' className='border-2 p-3 text-medium rounded ' value={details} onChange={(e) => { setDetails(e.target.value) }} ></textarea>

                <button className='border-2 p-3 text-medium rounded-2xl active:scale-95 bg-gray-100 text-black font-bold'>Add Note</button>

            </form>

            <div className='w-[50%] border-l-white ml-10 '>

                <h1 className='text-3xl font-bold mb-10'>Add a Note </h1>

                <div className='flex flex-wrap gap-5 mt-5 h-full justify-start items-start overflow-auto'>
                    {task.map((elem, idx) => {
                        return <div key={idx} className="h-57 w-40 bg-[url('https://i.pinimg.com/1200x/fc/77/2f/fc772fa18c84df530dbe9ce069da44e5.jpg')] ml-10 rounded-2xl text-black p-5 flex justify-between flex-col bg-cover">
                            <div className='pl-5 pt-4 '>
                                <h2>{elem.note}</h2>
                                <p>{elem.details}</p>
                            </div>
                            <button className='bg-purple-400 text-xs border-2 border-amber-400 p-1 rounded-full' onClick={Delete}>DELETE</button>
                        </div>
                    })}
                </div>


            </div>


        </div>
    )
}

export default NotesAppPractise
