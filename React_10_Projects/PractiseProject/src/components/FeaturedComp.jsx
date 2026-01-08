
const FeaturedComp = ({movies}) => {

  return (

    <div className="text-white flex mt-15">
      {movies.map((e) => {
        return <div key={e.id} className="w-[200px] p-3 grid justify-center items-center ">
         
          <img src={e.imageUrl}  alt="" className="border-1 rounded-full h-[80px] w-[80px] " />
         
          <div className="mt-3 text-[10px]">
            {e.name}
          </div>

        </div>

      })}
    </div>

  )
}

export default FeaturedComp