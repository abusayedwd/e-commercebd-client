import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useRef, useState } from 'react';
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Featureproduct = () => {
  const [products, setProduct] = useState([])
  const [search, setSearch] = useState('')
 useEffect( () => {
         fetch(`https://e-commercebd-server.vercel.app/products?search=${search}`)
         .then(res => res.json())
         .then(data => setProduct(data))
        //  console.log(products)
  } ,[search]);

  const searchRef = useRef(null)

  const handleSearch = () => {
    setSearch(searchRef.current.value)
    // console.log(searchRef.current.value)
  }

  
   return (
      <div className='my-8'>
<h1 className='text-3xl underline ml-16 text-slate-400 font-thin font-smebold   my-4'>Features Product</h1>
<div className='flex ml-16'>
    <div>
      <input className="input bg-slate-200 join-item" ref={searchRef} placeholder="Search your product"/>
    </div>
  <div className="indicator">
    <button onClick={handleSearch} className="btn btn-secondary join-item">Search</button>
  </div>
  </div> 
  <small className=' ml-16 font-semibold'>this product dynamicly sort by low price</small>
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
           <Link className=' ml-16' to ='/products'>

           <button className='btn btn-secondary'>
            show more <FaArrowRight />
           </button>
           </Link>
      </div>
   );
};

export default Featureproduct;