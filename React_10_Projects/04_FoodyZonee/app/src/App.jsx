import React, { useEffect, useState } from 'react'
import TopSection from './Components/TopSection'
import BottomSection from './Components/BottomSection'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:9000/");
        setData(res.data);
        console.log(res.data)
      } catch (err) {
        console.error(err);
      }
    }
    getData()
  }, [])

  // 🔥 FILTER LOGIC
  const filteredData = data.filter((item) => {

    let matchesSearch = false;
    let matchesCategory = false;

    // 🔎 Search check
    if (item.name.toLowerCase().includes(search.toLowerCase())) {
      matchesSearch = true;
    }

    // 🍽 Category check
    if (category === "all") {
      matchesCategory = true;
    }
    else if (item.type === category) {
      matchesCategory = true;
    }

    // ✅ Final decision
    if (matchesSearch && matchesCategory) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className='flex flex-col h-screen w-screen m-0'>
      <TopSection search={search} setSearch={setSearch} setCategory={setCategory} />
      <BottomSection data={filteredData} />
    </div>
  )
}

export default App
