import React, { createContext, useState } from 'react'

export const ThemeData = createContext()

const ThemeDataContext = (props) => {

    const [theme, setTheme] = useState('light')
    const [name, setName] = useState('mahvish fatima')

    return (
        <div>
            <ThemeData.Provider value={{ theme, setTheme, name, setName }}>
                {props.children}
            </ThemeData.Provider>
        </div>
    )
}

export default ThemeDataContext
