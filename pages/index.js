import ProductCard from "@/components/productcard/productCard";
import db from '../components/data/db.json'

export default function Home() {
  return (
    <>
   
   <div className="container">
    <div className="section">


      <h1>لپ تاپ(laptops)</h1>
        <div className="row">
         {db.laptops.slice(0 , 4).map((laptop) =>(
          <div className="col" key={laptop.id}>
           <ProductCard {...laptop}/>
             </div>
         )   
         )}          
        </div>

      <h1> موبایل(mobiles)</h1>
        <div className="row">
         {db.mobiles.slice(0 , 4).map((mobile) =>(
          <div className="col" key={mobile.id}>
           <ProductCard {...mobile}/>
             </div>
         )   
         )}          
        </div>

      <h1> دوربین(cameras)</h1>
        <div className="row">
         {db.cameras.slice(0 , 4).map((camera) =>(
          <div className="col" key={camera.id}>
           <ProductCard {...camera}/>
             </div>
         )   
         )}          
        </div>



   </div>
  </div>
   
    </>
  );
}
