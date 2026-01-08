import React, { createContext } from 'react'

export const ThemeDataContext = createContext()

const ThemeContext = (props) => {

    return ( 
        <div>
            <ThemeDataContext.Provider value="mahvish">
                {props.children}
            </ThemeDataContext.Provider>

        </div>
    )
}

export default ThemeContext


// steps of context api

// create kro context   -------------> createContext

// provide kro context  ------------->
//  <var_name.Provider>
//         {wrap the children u want to display}
//  </var_name.Provider>

// use kro context

