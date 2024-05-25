import React, { useRef } from "react";
import { motion } from "framer-motion";

import { fadein } from "../hooks/fadein";
import { useEffect, useState } from "react";
import "./Benner.css";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "SmartPhone",
  "Watch",
  "Laptop",
  "Camera",
  "Headphone",
   
];

const Benner = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const [currentImage, setCurrentImage] = useState(1); // Start with the second image

  // Array of background images for the carousel
  const backgroundImages = [
    "https://tse1.mm.bing.net/th?id=OIP.JCTsXcj9bUIoYyNktjgXZwHaHa&pid=Api&P=0&h=220",
    "https://www.styleskier.com/wp-content/uploads/2017/08/the-eltham-gold-mechanical-open-face-pocket-watch-iesherx-.jpg",
    "https://tse2.mm.bing.net/th?id=OIP.UMg6uiHdpndudR6Q5LDMYwHaEL&pid=Api&P=0&h=220",
    "https://shop.grandstores.ae/media/catalog/product/cache/f4356404ac24f13c2d79ac31d8c32034/1/0/101-1026-003652-1_.jpg",
     
    "https://i5.walmartimages.com/asr/41e14822-1e5d-4f7f-9bda-3bc5f264d4a8.695e8ae876b53efaebf555e6b7488ae6.jpeg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(timer); // Clean up the timer when the component unmounts
  }, [backgroundImages.length]);
 
  


  return (
    <div className="grid md:grid-cols-2 gap-3 h-[750px] md:h-[550px] md:py-12 bg-[#C1DCDC]">
      <div className="md:mt-8 md:ml-16 px-6">
        <motion.div
          variants={fadein("right", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        > 
          <h1 className="text-4xl font-bold uppercase">
          Buy your <br /> dream plants
          </h1>
          <div className="flex gap-8 items-center my-3">
                  <div>
                     <h1> <span className="font-semibold text-2xl ">50+</span> <br /> plan specise</h1>
                  </div>
                  <div  className="border-l-2 border-black">
                  <h1 className="ml-6"> <span className="font-semibold text-2xl ">100+</span> <br />Customers</h1>
                  </div>
          </div>

          <div className="flex items-center my-4 py-4 pl-4 bg-gradient-to-tr from-black via-white/10 to-black border border-white/10 rounded-xl">
                    <div className="w-14 h-14 bg-transparent  rounded-full border-[3px] border-[#191919]">
                        <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?people" alt="avatar navigate ui" />
                    </div>
                    <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919] relative -left-5">
                        <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?kid" alt="avatar navigate ui" />
                    </div>
                    <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-10">
                        <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?male" alt="avatar navigate ui" />
                    </div>
                    <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-[60px]">
                        <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?female" alt="avatar navigate ui" />
                    </div>

                    <div className="relative -left-5">
                        <p className=" text-white text-xl">420+</p>
                        <p className="text-sm text-white">people already using this site</p>
                    </div>
                </div>

        </motion.div>

        <motion.div className="join"
        variants={fadein("right", 2.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        >
   
</motion.div>

      </div>
      <div className="w-[60%] md:mt-16 mb-60 mx-auto">
        <motion.div
          variants={fadein("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          {backgroundImages.map((imageUrl, index) => (
            <div
              key={index}
              className={`banner-slide  ${
                index === currentImage ? "active" : ""
              }`}
            >
              <img className="md:h-52 md:w-60 rounded-3xl bg-slate-400" src={imageUrl} alt="" />

              <h1>
                <TextTransition
                  className="text-xl font-bold"
                  springConfig={presets.wobbly}
                >
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              </h1>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Benner;
