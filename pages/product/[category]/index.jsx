import { useRouter } from 'next/router'
import db from '../../../components/data/db.json'
import { useEffect, useState } from 'react'
import ProductCard from '@/components/productcard/productCard'
import styles from '../../../styles/ProductsByCategory.module.css'

function ProductsByCategory() {
    const router = useRouter();
    const { category } = router.query

    const [products, setProducts] = useState([]);

    const [initialProducts, setInitialProducts] = useState([]); 
    const [searchkey , setSearchkey] = useState('')

    const getProductsData = (categoryName) => {
        if (!categoryName) return []
        const key = categoryName.endsWith('s') ? categoryName : `${categoryName}s`
        const data = db[key]
        return Array.isArray(data) ? data : [] 
    }

    useEffect(() => {
        if (category) {
            const dataToDisplay = getProductsData(category);
  
            setInitialProducts(dataToDisplay); 
            setProducts(dataToDisplay);

            setSearchkey('');
        } else {
             setInitialProducts([]);
             setProducts([]);
        }
    }, [category]); 


    useEffect(() => {

        if (searchkey.trim() === '') {
  
            setProducts(initialProducts);
            return;
        }

     
        const searchproducts = initialProducts.filter(product => 
         
            product.text.toLowerCase().includes(searchkey.toLowerCase())
        );

        setProducts(searchproducts);

    }, [searchkey, initialProducts]); 

    if (!category) {
        return <div>در حال بارگذاری دسته‌بندی...</div>;
    }

    return (
        <div className="container">
            <div className={`${styles.searchContainer} section`}>
                <input 
                    onChange={(e) => setSearchkey(e.target.value)} 
                    type="text" 
                    placeholder="دنبال چی میگردی؟" 
                    className={styles.search} 
                    value={searchkey} 
                />
            </div>

            <div className="section">
                <h1>محصولات ({category})</h1>
                <div className="row">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div className="col" key={product.id}>
                                <ProductCard {...product} />
                            </div>
                        ))
                    ) : (
                         <div>محصولی برای این دسته بندی یافت نشد.</div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default ProductsByCategory;