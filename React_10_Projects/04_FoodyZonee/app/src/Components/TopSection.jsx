
const TopSection = ({ search, setSearch, setCategory }) => {
    return (
        <div className='bg-[#323334] p-3'>

            <div className="TopFirst flex flex-col sm:flex-row justify-center items-center sm:justify-between pl-4 pr-4 gap-5">

                <h1 className='text-5xl font-bold text-white'>F<span className="text-red-500">oo</span>dyZ<span className="text-red-500">o</span>ne</h1>

                <input value={search} onChange={(e) => {
                    setSearch(e.target.value)
                }} className="text-white w-[200px] h-[30px] sm:w-[250px] border-2 px-4 py-2 border-red-800 rounded-[5px] placeholder-font-sm bg-transparent placeholder:text-gray-300 " placeholder='Search food....' />

            </div>

            <div className="flex flex-wrap justify-center gap-2 justify-center mt-5">

                <div className=' bg-red-500 text-white p-2.5 rounded-[7px] text-[13px]' onClick={() => {
                    setCategory("all")
                }}>All</div>

                <div className=' bg-red-500 text-white p-2.5 rounded-[7px] text-[13px]' onClick={() => {
                    setCategory("breakfast")
                }} >BreakFast</div>

                <div className=' bg-red-500 text-white p-2.5 rounded-[7px] text-[13px]' onClick={() => {
                    setCategory("lunch")
                }} >Lunch</div>

                <div className=' bg-red-500 text-white p-2.5 rounded-[7px] text-
                [13px]' onClick={() => {
                        setCategory("dinner")
                    }} >Dinner</div>

            </div>
        </div>
    )
}

export default TopSection