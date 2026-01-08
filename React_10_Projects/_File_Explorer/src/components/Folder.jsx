import { useState } from "react";

function Folder({ explorer }) {

    const [expand, setExpand] = useState(false)
    const [showInput,setShowInput]=useState({
        visible:false,
        isFolder:null
    })

    const handleNewFolder=(e,isFolder)=>{
        e.stopPropagation()
        setExpand(true)
        setShowInput({
            visible:true,
            isFolder:isFolder
        })
    }

    console.log(explorer)

    if (explorer.isFolder) {
        return (
            <div style={{ marginTop: 5 }}>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span>
                        📁{explorer.name}
                    </span>
                    <div>
                        <button onClick={(e)=> handleNewFolder(e,true)}>Folder+</button>
                        <button onClick={(e)=> handleNewFolder(e,false)}>File+</button>
                    </div>
                </div>

                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }} >

                    {showInput.visible && (
                        <div className="inputContainer">
                            <span>{showInput.isFolder ? "📁" : "📄"}</span>
                            <input type="text" className="inputContainer__input" autoFocus onBlur={()=> setShowInput({...showInput,visible:false})} />
                        </div>
                    )}

                    {explorer.items.map((exp) => {
                        return <Folder explorer={exp} key={exp.id} />
                    })}
                </div>
            </div >
        );
    }
    else {
        return <span> 📄{explorer.name}</span>
    }

}

export default Folder

