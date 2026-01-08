import React, { useContext } from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Cards from './components/Cards';
import useSearch from './CustomHooks/useSearch';
import { DataContext } from './Context/DataContext';

const App = () => {

   const { moviesData } = useContext(DataContext);

  const {search,setSearch,filteredData}=useSearch(moviesData)

  return (
    <div className='h-screen w-screen'>

      <NavBar search={search} setSearch={setSearch}/>
      <div className="flex h-full">
        <SideBar />
        <Cards filteredData={filteredData}/>
      </div>
    </div>
  )
}

export default App