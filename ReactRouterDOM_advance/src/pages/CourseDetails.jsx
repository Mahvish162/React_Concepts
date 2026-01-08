import React from 'react'
import { useParams } from 'react-router-dom'


const CourseDetails = () => {
  const params = useParams()

  return (
    <div>
      <h1 className='pt-[45%] pl-[45%] text-black'>{params.id} Courses Details</h1>
    </div>
  )
}

export default CourseDetails
