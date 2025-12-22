const NumberSelected = ({numSelected,NumHandler}) => {


    const arr = [1, 2, 3, 4, 5, 6]

    return (

        <div className='flex gap-5 '>
           
            {arr.map((elem, idx) => {
                const isSelected = numSelected === elem
                return <div key={idx} onClick={() => NumHandler(elem)} className={`numBox h-[60px] w-[60px] border-2 border-black flex justify-center items-center ${isSelected ? "bg-black text-white": "bg-white text-black"}`}>{elem}</div>
            })}

        </div>

    )
}

export default NumberSelected
