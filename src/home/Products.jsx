import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

 
 const Products = () => {
  const [products, setProducts] = useState([])
    useEffect( () => {
      fetch("http://localhost:5000/productlist")
      .then(res => res.json())
      .then(data => setProducts(data) )
      
    },[])
   return (
      <div>
               <h1 className='text-3xl underline text-slate-400 font-thin font-smebold text-center my-4'>All Product</h1>
            <div className='grid md:grid-cols-4 gap-3'>
                
                {
                  products.map( singleProduct => 
                     <SingleProduct key={singleProduct._id} product={singleProduct}></SingleProduct>
                     
                  )
                }
               
            </div>
      </div>
   );
};

export default Products;