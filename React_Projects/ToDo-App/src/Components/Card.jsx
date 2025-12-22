import axios from 'axios'
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { MdSettingsBackupRestore } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";


const Card = () => {

    const [task, setTask] = useState("");
    const [data, setData] = useState([])

    const [editId,setEditId]=useState(null)
    const [isEditing,setIsEditing]=useState(false)

    function addTask() {
        if (task !== "") {
            axios.post("http://localhost:5000/tasks", { task })
                .then(x => {
                    console.log(x.data)
                    setTask("");
                    showTask();
                })
                .catch((err) => console.log(err))
        }
    }

    function showTask() {
        axios.get("http://localhost:5000/tasks")
            .then(x => {
                console.log(x.data)
                setData(x.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        showTask()
    }, [])

    function deleteTask(id) {
        axios.delete(`http://localhost:5000/tasks/${id}`)
            .then(() => {
                showTask()
            })
            .catch(err => console.log(err))
    }


    function toggleTask(id) {

        const updatedTask = data.map((x) => x.id === id ? { ...x, completed: !x.completed } : x);

        setData(updatedTask)
        console.log(updatedTask);

    }

    // ALTERNATIVE FOR  NEXT HANDLEEDIT FUNCTION , PLUS POINT HERE IS WE CAN AVOID AXIOS CALL BY DIRECTLY TAKING THE WHOLE OBJECT FROM THE FUNCTION CALL TIME
    // function handleEdit(id) {
    //     axios.get(`http://localhost:5000/tasks/${id}`)
    //         .then((x) => {
    //             setTask(x.data.task)
    //                 setEditId(x.data.id)
    //                  setIsEditing(true);
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    function handleEdit(taskObj){
        setTask(taskObj.task)
        setIsEditing(true)
        setEditId(taskObj.id)
    }

    function updateTask(){
        axios.put(`http://localhost:5000/tasks/${editId}`,{task})
        .then(()=>{
            setTask("")
            setEditId(null)
            setIsEditing(false)
            showTask()
        })
        .error((err)=>{
             console.log(err)
        })
    }

    return (

        <>

            <div className="min-h-[500px] w-[400px] backdrop-blur-3xl rounded-4xl flex flex-col justify-start items-center p-3 px-4">
                <h1 className='text-white  flex gap-2 text-3xl font-bold mb-10'>To-Do List <GiNotebook className=" mt-1.5 font-2xl " /> </h1>

                {isEditing && (
                    <p className="text-white text-sm mb-1">Editing task...</p>
                )}

                <div className="flex bg-gray-400 rounded-full p-2 w-full ">


                    <input type="text" required placeholder='Waiting for new Tasks  .  .  .  .' value={task} onChange={(x) => {
                        setTask(x.target.value);
                        console.log(x.target.value)
                    }} className='rounded-2xl p-2 w-full placeholder:text-gray-600  outline-none border-none focus:outline-none focus:ring-0 focus:border-none' />

                    <MdSettingsBackupRestore className="text-4xl  bg-green-500 rounded-full p-1" onClick={() => {
                        isEditing ? updateTask() : addTask();
                    }} />

                </div>


                <div className='flex flex-col gap-3 mt-10 w-full'>
                    {data.map((elem, index) => {
                        return <div key={index} className='bg-gray-400 rounded-2xl p-1.5 px-2 w-full flex justify-between items-center'>

                            {elem.completed ? (<RiCheckboxCircleLine className='text-2xl font-bold cursor-pointer text-green-700 ' onClick={() => {
                                toggleTask(elem.id)
                            }} />) : (<RiCheckboxBlankCircleLine className='text-2xl font-bold cursor-pointer' onClick={() => {
                                toggleTask(elem.id)
                            }} />)}

                            <span className={elem.completed ? "line-through text-gray-700" : ""}> {elem.task}</span>

                            <div className="flex justify-center items-center gap-3 text-xl">
                                <FaRegEdit
                                    className="cursor-pointer"
                                    onClick={() => handleEdit(elem)}
                                />
                                <MdOutlineDeleteForever className="cursor-pointer text-red-600" onClick={() => deleteTask(elem.id)} />
                            </div>
                        </div>
                    })}

                </div>

                <div>

                </div>

            </div>

        </>

    )
}

export default Card
