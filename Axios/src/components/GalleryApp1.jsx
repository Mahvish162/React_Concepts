import { React, useEffect, useState } from 'react'
import axios from 'axios'


const GalleryApp1 = () => {

    const [data, setData] = useState([])
    const [index, setIndex] = useState(1)

    const getData = async () => {
        let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
        console.log(response.data)
        setData(response.data)
    }

    useEffect(()=>{
        getData()
    },[index])

    let printUserData = data.map((elem, idx) => {
        return <div key={idx}>
            <a href={elem.url} target='_blank'>
                <div className='h-40 w-44 overflow-hidden rounded-xl'>
                    <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
                </div>
                <h2 className='font-bold text-lg text-white'>{elem.author}</h2>
            </a >
        </div>
    })


    return (
        <div className='bg-black h-screen w-screen font-white text-center overflow-hidden'>
            <div className='flex h-[82%] flex-wrap gap-4 p-2'>
                {printUserData}
            </div>

            <div className="flex justify-center items-center gap-5 text-white">

                <button className="flex justify-center bg-amber-400 p-4 rounded-2xl" onClick={() => {
                    if (index > 1) {
                        setIndex(index - 1)
                    }
                }}>Prev</button>

                <h2>Page {index}</h2>

                <button className="flex justify-center bg-amber-400 p-4 rounded-2xl" onClick={() => {
                    setIndex(index + 1)
                }}>Next</button>

            </div>
        </div>
    )
}

export default GalleryApp1
