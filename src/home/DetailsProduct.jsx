import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { fadein } from "../hooks/fadein";
import { stringify } from "postcss";
import Swal from "sweetalert2";
import Reviews from "./Reviews";

const DetailsProduct = () => {
  const details = useLoaderData();

  const [category, setCategory] = useState("");
  console.log(details);
  const {
    availability,
    name,
    price,
    average_ratings,
    description,
    image,
    specification,
  } = details;

const reviewSubmit = (event) => {
   event.preventDefault();
   const form = event.target;
   const name = form.name.value;
   const rating = form.ratings.value;
   const date = form.date.value;
   const descrip = form.descrip.value;
   const  reaction = form.reaction.value;

   const reviews = {
      name,
      rating,
      date,
      descrip,
      reaction
   }
   console.log(reviews)
    
   fetch('https://e-commercebd-server.vercel.app/reviews', {
      method: 'POST',
      headers: {
         'content-type':'application/json'
      },
      body: JSON.stringify(reviews)
   })
   .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
         Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Review submit has been success",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset("")
      }
      
    })
}


  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div>
      <div>
        <motion.div
          variants={fadein("right", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div
            className="hero h-[400px]"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl text-yellow-500 font-bold">
                  {name}
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
        <div className=" bg-slate-600 md:flex justify-around">
          <div className="md:flex ml-10 md:ml-4 md:mt-5 py-4 md:w-1/2 w-full gap-5 text-white">
            <img className="h-40 w-48 rounded-2xl" src={image} alt="" />
            <div>
              <p className="text-xl">
                Availability:{" "}
                {availability ? (
                  <span className=" text-yellow-400">true</span>
                ) : (
                  <span className="text-red-300">false</span>
                )}
              </p>
              <p>{description}</p>
              <p className="font-semibold text-yellow-400"> Price: ${price}</p>
            </div>
          </div>
          <div className="text-white ml-10 md:ml-4 py-2">
            <h2 className="text-xl mt-4">Specifications:</h2>
            <ul className="list-disc list-inside">
              {Object.keys(specification).map((key) => (
                <li key={key} className="my-1">
                  <span className="font-medium">
                    {key.charAt(0).toUpperCase() +
                      key.slice(1).replace("_", " ")}
                    :
                  </span>
                  <span className="ml-2 text-yellow-400">
                    {Array.isArray(specification[key])
                      ? specification[key].join(", ")
                      : specification[key]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Review section */}

      <div className="bg-gray-200">
         
        <div className="w-full px-4 lg:px-8 lg:w-2/3 bg-slate-100 mx-auto p-10 rounded-lg">
          <h1 className="text-3xl text-slate-400 font-thin font-smebold mb-6">Please review the Product</h1>
          <form onSubmit={reviewSubmit}>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="border py-2 px-4 rounded-md w-full"
                required
              />

              <select
                className="border py-2 px-4 rounded-md w-full"
                name="reaction"
                onChange={handleChange}
              >
                <option defaultValue="">Reaction</option>
                <option defaultValue="Like">Like</option>
                <option defaultValue="DisLike">DisLike</option>
              </select>
               
              <input
                type="number"
                placeholder="Ratings"
                name="ratings"
                className="border py-2 px-4 rounded-md w-full"
                min={1}
                max={5}
              /> 
              <input 
              type="date" 
              name="date" 
              id="" 
              className="border py-2 px-4 rounded-md w-full"
              placeholder="date"
              />
            </div>
            <textarea
              className="textarea border py-2 px-4 rounded-md w-full my-4"
              name="descrip"
              placeholder="Description"
              required
            ></textarea>
            <input
              type="submit"
              className="btn hover:bg-[#2EBFED] hover:border-[#2EBFED] border-[#ff6899] bg-[#ff6899] w-full"
              value="Submit Your Review"
            />
          </form>
        </div>
      </div>
       <Reviews></Reviews>
    </div>
  );
};

export default DetailsProduct;
