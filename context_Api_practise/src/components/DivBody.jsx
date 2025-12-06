import React, { useContext } from 'react'
import { ThemeData } from './Context/ThemeDataContext'

const DivBody = () => {

    const { theme, name } = useContext(ThemeData)

    return (

        <div>
            <h1>this is {theme} mode enabled by {name}</h1>
        </div>

    )

}

export default DivBody
