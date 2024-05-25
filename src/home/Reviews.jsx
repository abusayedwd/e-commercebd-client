import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";

const Reviews = () => {
const [reviews, setReviews] = useState([])
useEffect( () => {
   fetch('https://e-commercebd-server.vercel.app/reviews')
   .then(res => res.json())
   .then(data => setReviews(data))
},[])
     
   return (
      <div>
         <div className="mt-16 px-12">
         <h1 className="text-orange-700 text-2xl text-center font-semibold">Customer Review</h1>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper
           ">
        
         {
            reviews.map(review => <SwiperSlide key={review._id}>
                <div className="md:p-12 flex flex-col items-center">
                  <h1 className="text-xl text-orange-400  font-bold">{review.name}</h1>
                  <p className=" md:px-12 px-6">{review.descrip}</p>
                  <Rating
                      className="rating text-center"
                      style={{
                        maxWidth: 100,
                        height: "24px",
                      }}
                      value={review.rating}
                      readOnly
                    />
                    <p>{
                     review.reaction
                     }</p>

                </div>
        </SwiperSlide>
            )
         }
         
      </Swiper>
      </div>
         <div>

         </div>
      </div>
   );
};

export default Reviews;