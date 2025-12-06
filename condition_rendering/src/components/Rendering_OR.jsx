import React, { useState } from 'react'

const Rendering_OR = () => {

    const [view, setView] = useState(false)

    let toggle = () => {
        setView(!view)
        console.log(view)
    }
    return (
        <div>
            <img src="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/k12x-5g-in/listpage/427-600-blue.png" alt="" style={{ height: "250px" }} />

            <h1> Mobile : oppo 12 5g</h1>
            <h1>Price : 110000</h1>
            <h1>WMI : 1000/month</h1>

            <button onClick={toggle}>View More</button>

            {view ||

                <div>
                    <p> <b>Ratings</b>  : ⭐⭐⭐⭐</p>
                    <p> <b>RAM/ROM</b>  : 3GB/32GB</p>
                    <p> <b>Screen Resolution</b>  : 3000mah</p>
                    <p> <b>Camera</b>  : 8MP and 16MP</p>
                    <p> <b>Processor</b>  : Mediatek</p>
                </div>

            }


        </div>
    )
}

export default Rendering_OR
