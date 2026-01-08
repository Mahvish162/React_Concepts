import { useContext, useState } from "react"
import { DataContext } from "../Context/DataContext"

const useSearch = () => {

    const {moviesData}=useContext(DataContext)

    const [search,setSearch]=useState("")

    const filteredData=moviesData.filter((item)=>

        item.name.toLowerCase().includes(search.toLowerCase())

    )

    return { search, setSearch,filteredData}
}

export default useSearch
