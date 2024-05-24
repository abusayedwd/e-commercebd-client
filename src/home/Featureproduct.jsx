import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import '@smastrom/react-rating/style.css'

const Featureproduct = () => {
  const [products, setProduct] = useState([])
 useEffect( () => {
         fetch("/data.json")
         .then(res => res.json())
         .then(data => setProduct(data))
         console.log(products)
  } ,[]);

  
   return (
      <div className='my-8'>
<h1 className='text-2xl text-center'>product list {products.length}</h1>
           <div  className='grid md:grid-cols-4'>
           {
            products.slice(1,9).map( (product, index) => (
               <div>
                    <div
                  className="flex h-28 my-4 cardbody hover:shadow items-center justify-evenly p-3 border-r-2"
                  key={ product.id}
                >
                  <div>
                    <img className="h-24 cade w-24" src={ product.image} alt="" />
                  </div>
                  <div>
                    <h1>{ product.name}</h1>
                    <div className=" ">
 
                      <p className="text-yellow-300 font-bold">
                        ${ product.price}
                      </p>
                    </div>
                    <Rating
                      className="text-yellow-400"
                      style={{
                        maxWidth: 100,
                        height: "24px",
                        color: "burlywood",
                      }}
                      value={ product.rating}
                      readOnly
                    />
                  </div>
                   
                </div>
               </div>
            )
         )
           }
           </div>
      </div>
   );
};

export default Featureproduct;