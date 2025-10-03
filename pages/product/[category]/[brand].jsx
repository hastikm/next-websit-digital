import { useRouter } from 'next/router'
import db from '../../../components/data/db.json'
import { useState , useEffect } from 'react'
import ProductCard from '@/components/productcard/productCard'
const ProductsByBrand = () => {

  const {category , brand} = useRouter().query
  const [laptops , setLaptops] = useState([])



    useEffect(() => {
     {
      setLaptops(getLaptops(brand))
     
    }
  }, [brand])


        const getLaptops = (brand) => {

          return db.laptops.filter(laptop => laptop.brand == brand)

         }   


  return (
    <>
   <div className="container">
    <div className="section">
      <h1>laptops- {brand}</h1>
      <div className="row">
        {laptops.map(laptop => (
          <div className="col" key={laptop.id}>
            < ProductCard {...laptop}/>
          </div>
        ))}
      </div>
    </div>
   </div>
    </>
  )
}

export default ProductsByBrand;
