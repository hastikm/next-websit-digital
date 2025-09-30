import styles from './ProductCard.module.css'
function ProductCard() {
   return (
      <div className={styles.cardContainer}>
         <div className={styles.cardHeader}>
            <img src="https://dl.next1code.ir/images/nextjs/chapter04/laptop01.jpg" />
         </div>
         <div className={styles.cardMiddle}>
            <p>
               لپ تاپ لنوو 15.6 اینچی مدل ThinkBook 15 پردازنده Core i3 1115G4 رم 8GB حافظه 256GB
               SSD
            </p>
         </div>
         <div className={styles.cardFooter}>
            <button>افزودن به سبد خرید</button>
            <p>24,900,000</p>
         </div>
      </div>
   )
}

export default ProductCard
