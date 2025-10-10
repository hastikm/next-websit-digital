import { useRouter } from 'next/router'
import db from '../../../components/data/db.json'
import { useEffect, useState } from 'react'
import ProductCard from '@/components/productcard/productCard'
import styles from '../../../styles/ProductsByCategory.module.css'

function ProductsByCategory() {
    const router = useRouter();
    const { category } = router.query;

    const [products, setProducts] = useState([]);
    const [initialProducts, setInitialProducts] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    const getProductsData = (categoryName) => {
        if (!categoryName) return [];
        const key = categoryName.endsWith('s') ? categoryName : `${categoryName}s`;
        const data = db[key];
        return Array.isArray(data) ? data : [];
    };

    useEffect(() => {
        if (category) {
            const dataToDisplay = getProductsData(category);
            setInitialProducts(dataToDisplay);
            setProducts(dataToDisplay);
            setSearchKey('');
        } else {
            setInitialProducts([]);
            setProducts([]);
        }
    }, [category]);

    useEffect(() => {
        if (searchKey.trim() === '') {
            setProducts(initialProducts);
            return;
        }

        const filtered = initialProducts.filter(product =>
            product.text.toLowerCase().includes(searchKey.toLowerCase())
        );
        setProducts(filtered);
    }, [searchKey, initialProducts]);

    if (!category) {
        return <div>در حال بارگذاری دسته‌بندی...</div>;
    }

    return (
        <div className="container">
            <div className={`${styles.searchContainer} section`}>
                <input 
                    type="text"
                    placeholder="دنبال چی میگردی؟"
                    className={styles.search}
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                />
            </div>

            <div className="section">
                <h1>محصولات ({category})</h1>
                <div className="row">
                    {products.length > 0 ? (
                        products.map(product => (
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
    );
}

export default ProductsByCategory;
