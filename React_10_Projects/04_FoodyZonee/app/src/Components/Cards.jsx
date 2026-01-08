
const Cards = ({ data }) => {

    return ( 
        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 mt-6 place-items-center'>
            {data.map((elem) => {
                return <div className="text-white w-full max-w-[420px] flex justify-between align-middle p-1.5 rounded-4xl backdrop-blur-md border border-white/20 bg-white/7 shadow-lg">

                    <div className='leftCard w-[50%] pt-5'>
                        <img src={`http://localhost:9000${elem.image}`} alt="" className='h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] rounded-full object-cover' />
                    </div>

                    <div className='relative rightCard w-[50%] sm:w-[60%] text-center sm:text-left'>

                        <h5 className='text-[18px] sm:text-[20px] font-bold m-2'>{elem.name}</h5>
                        <p className='text-[11px]  sm:text-[13px] m-2 opacity-80'>{elem.text}</p>

                        <div className='border-red-400 text-[12px] sm:text-[14px] bg-red-500 inline-block rounded-[8px] p-1 m-2 pl-6 pr-6 sm:ml-20'>${elem.price}</div>

                    </div>

                </div>
            })}
        </div>
    )
}

export default Cards
