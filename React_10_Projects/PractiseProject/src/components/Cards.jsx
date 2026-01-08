import React, { useContext, useState } from 'react'
import FeaturedComp from './FeaturedComp';
import { DataContext } from '../Context/DataContext';

const Cards = ({filteredData}) => {

  const {catsData}=useContext(DataContext)

  const [activeImgAddress, setActiveImgAddress] = useState(0)

  const handlePrevImage = () => {
    setActiveImgAddress(activeImgAddress === 0 ? catsData.length - 1 : activeImgAddress - 1);
  }
  const handleNextImage = () => {
    setActiveImgAddress((activeImgAddress + 1) % catsData.length)
  }

  return (


    <div className="bg-black w-[85%] text-white p-6">

      <div className="flex justify-center items-center w-full">
        <button className="border-1 border-gray-700 p-4 rounded-full m-2 bg-gray-900 italic" onClick={handlePrevImage}>Prev</button>
        {catsData.map((cat, idx) => (
          <div
            key={cat.id}
            className={"w-[450px] h-[250px] border rounded-xl overflow-hidden bg-white text-black bg-cover bg-center flex-shrink-0 " + (activeImgAddress === idx ? "block" : "hidden")} style={{
              backgroundImage: `url(${cat.imageUrl})`,
            }}
          >

            <div className="p-6 font-extrabold text-black space-y-1 w-full h-full flex flex-col justify-between items-start">
              <div>Meet <span className='text-3xl text-red-600'>{cat.name}</span> of {cat.age} Years</div>
              <div>She is <span className='text-3xl text-red-600 italic'>{cat.temperament}</span></div>
              <div></div>
            </div>

          </div>
        ))}
        <button className="border-1 border-gray-700 p-4 rounded-full m-2 bg-gray-900 italic" onClick={handleNextImage}>Next</button>


      </div>

      <FeaturedComp movies={filteredData} />
    </div>

  )
}

export default Cards