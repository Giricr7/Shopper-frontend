import React, { useEffect, useState } from "react"
import { Base } from "./Base"
import { OccasionsSection } from "./components/OccasionsSection"
import { ShowProducts } from "./components/ShowProducts"
import {getProductsHome } from "./helper/mainAPICalls"
import { loadCart } from "./helper/addToCartHelper"


export const Home = () => {
  const [products, setProducts] = useState([])
 

  const loadData = async () => {
    try {
      const response = await getProductsHome()
      
      if (response) {
        setProducts(response.data)
       
      }
    } catch (error) {

    console.log(error)
    }
  }

  useEffect(() => {
    loadData()
    loadCart()
  }, [])

  return (
    <Base>
      <div className="Home">
        <ShowProducts products={products} />
       
        <OccasionsSection />
      </div>
    </Base>
  )
}
