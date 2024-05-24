import React from 'react';
import { Rating } from '@smastrom/react-rating';


const SingleProduct = ({product}) => {
   console.log(product)
   const { name, price, average_ratings, image,} = product;
   return (
      <div>
              <div className="max-[350px] cardbody h-88 mt-2 hover:bg-blue-100 mx-auto space-y-6 rounded-2xl bg-slate-100/70 px-8 py-4 shadow-md dark:bg-[#18181B] md:w-[350px]">
        {/* Card Image */}
        <img className="h-[190px] w-[350px] rounded-2xl bg-gray-400" src={image} alt="card navigate ui"/>
        {/* Card Heading */}
        <div className="space-y-2">
            <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">{name}</h2>
        {/* rating  */}
            <div className="flex gap-1">
            <Rating
                      className="text-yellow-400"
                      style={{
                        maxWidth: 100,
                        height: "24px",
                        color: "burlywood",
                      }}
                      value={average_ratings}
                      readOnly
                    />
                    
            </div>
        </div>
        {/* Price and action button */}
        <div className="mt-5 flex items-center justify-between">
            <h2 className="font-medium text-gray-700 md:text-xl dark:text-white/60">${price}</h2>
            
            <button className="text-xl w-32 h-10 rounded-md button md:mr-3 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-sky-300 duration-1000"><span className="absolute bg-sky-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-sky-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>View Details</button> 
        </div>
      </div>
      </div>
   );
};

export default SingleProduct;