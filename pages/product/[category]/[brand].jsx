import { useRouter } from 'next/router'
import db from '../../../components/data/db.json'
import { useState, useEffect } from 'react'
import ProductCard from '@/components/productcard/productCard'

const ProductsByBrand = () => {
  const { category, brand } = useRouter().query
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (!category || !brand) return

    const categoryData = db[category] 
    if (categoryData) {
      const filtered = categoryData.filter(item => item.brand.toLowerCase() === brand.toLowerCase())
      setProducts(filtered)
    } else {
      setProducts([])
    }
  }, [category, brand])

  return (
    <div className="container">
      <div className="section">
        <h1>{category} - {brand}</h1>
        <div className="row">
          {products.map(product => (
            <div className="col" key={product.id}>
              <ProductCard {...product}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsByBrand
