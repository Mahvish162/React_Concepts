import React from 'react'

const StyledComponent = (WrappedComp) => {
    return () => {
        return (
            <div style={{ color: "red", backgroundColor: "black", padding:"10px",margin:"20px" }}>
                <WrappedComp />
            </div>
        )
    }
}

export default StyledComponent
