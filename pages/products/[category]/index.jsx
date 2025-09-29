import { useRouter } from 'next/router'


const Products = () => {

  const {category} = useRouter().query
  return (
    <>
         <h1>Products page - {category}</h1>   
    </>
  )
}

export default Products
