import React from 'react'
import Cards from './components/Cards'

const App = () => {
  
  const mosques= [
    {
      // "id": "01",
      "name": "Al-Masjid al-Haram",
      "location": "Mecca, Saudi Arabia",
      "rank": "Largest mosque in the world",
      "area_sq_meters": 356800,
      "description": "Located in Mecca, Saudi Arabia, it is the largest mosque in the world, covering an area of 356,800 square meters."
    },
    {
      // "id": "02",
      "name": "Al-Masjid an-Nabawi",
      "location": "Medina, Saudi Arabia",
      "rank": "Second-largest mosque in the world",
      "area_sq_meters": 400500,
      "description": "Located in Medina, Saudi Arabia, it is the second-largest mosque in the world, covering an area of 400,500 square meters."
    },
    {
      // "id": "03",
      "name": "Imam Reza Shrine",
      "location": "Mashhad, Iran",
      "rank": "Third-largest mosque in the world",
      "area_sq_meters": 267079,
      "description": "Located in Mashhad, Iran, it is the third-largest mosque in the world, covering an area of 267,079 square meters."
    },
    {
      // "id": "04",
      "name": "Hassan II Mosque",
      "location": "Casablanca, Morocco",
      "rank": "Fourth-largest mosque in the world",
      "area_sq_meters": 200000,
      "description": "Located in Casablanca, Morocco, it is the fourth-largest mosque in the world, covering an area of 200,000 square meters."
    },
    {
      // "id": "05",
      "name": "Faisal Mosque",
      "location": "Islamabad, Pakistan",
      "rank": "Fifth-largest mosque in the world",
      "area_sq_meters": 180000,
      "description": "Located in Islamabad, Pakistan, it is the fifth-largest mosque in the world, covering an area of 180,000 square meters."
    }
  ];


  return (
    <>
       <center><h1>5 LARGEST MASJID IN THE WORLD</h1></center>

       { mosques.map(function(elem){
            return <Cards name={elem.name} description={elem.description} location={elem.location} rank={elem.rank}/>
        })}

    </>
  )
}

export default App
