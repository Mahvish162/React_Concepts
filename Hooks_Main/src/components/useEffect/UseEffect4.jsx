import React, { useEffect, useState } from 'react'

const UseEffect4 = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then((x) => x.json())
            .then((y) => setUsers(y))
            .catch(err => console.log(err))
    }, [])

    return (
        <body>
            <div className='userDiv'>
                {users.map((x)=>{
                 return <div className='userDivSep'>
                    <h1>{x.id}</h1>
                    <h1><img src={x.avatar_url
                    } alt="" className='userImg'/></h1>
                    <h1>{x.login}</h1>
                 </div>
                })}
            </div>
        </body>
    )
}

export default UseEffect4
