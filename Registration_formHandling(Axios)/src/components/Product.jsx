import axios from 'axios'
import React, { useState } from 'react'

const Product = () => {

  const [prod_name, setProd_name] = useState("")
  const [prod_price, setProd_price] = useState("")

  const [data, setData] = useState([])
  const [showData, setShowData] = useState(false);

  const toggle = () => {
    setShowData(!showData)
  }

  const getData = async () => {
    let response = await axios.get(`http://localhost:5000/products`)
    console.log(response)
    setData(response.data)
  }


  const printUserData = data.map((elem) => {
    return <div>

      <h5>Product Name : {elem.prod_name}</h5>
      <h5>Product Price : {elem.prod_price}</h5>

    </div>
  })

  const onSubmit = (e) => {
    e.preventDefault()
    const prodData = { prod_name, prod_price }
    axios.post("http://localhost:5000/products", prodData)
      .then(() => {
        alert("product data saved successfully")
        getData()
        toggle();
        setProd_name("")
        setProd_price("")
      })
      .catch((err) => { console.log(err) })
  }

  return (

    <div>

      <h2>Enter Product details :</h2>

      <form onSubmit={onSubmit}>

        <input type="text" placeholder='enter product name' value={prod_name} onChange={(e) => {
          setProd_name(e.target.value)
        }} required/>

        <br /><br />

        <input type="text" placeholder='enter product price' value={prod_price} onChange={(e) => {
          setProd_price(e.target.value)
        }} />

        <br /><br />

        <button>Submit</button>

      </form>
      {showData && printUserData}


    </div>
  )
}

export default Product
