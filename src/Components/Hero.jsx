// import React from 'react'
// import { motion, useScroll, useTransform } from "framer-motion";


// function Hero() {

  

//     const { scrollYProgress } = useScroll(); // Track scroll progress

//   // Text moves up & fades out
//   const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//   const textTranslateY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

//   // Background image fades out
//   const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//   return (
//     <>
//        {/* Hero Section */}
//        <motion.section
//         style={{ opacity: bgOpacity }}
//         className="relative h-screen flex items-center justify-center bg-[url('/bImg.avif')] bg-cover bg-center text-white"
//       >
//         <motion.div
//           transition={{ duration: 2 }}
//           style={{ opacity: textOpacity, y: textTranslateY }}
//           className="text-center font-medium text-5xl sm:text-6xl"
//         >
//           <motion.div   
//               initial={{ opacity: 0, y: 200 }} // Starts invisible and slightly below
//               animate={{ opacity: 1.3, y: 0 }} // Moves up and becomes visible
//               transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
//               className='font-bold'
//           >
//           <h1 className="p-2 ">LEADERS IN QUALITY</h1>
//           <h1 className="p-2">CONSTRUCTION AND</h1>
//           <h1 className="p-2">INFRASTRUCTURE</h1>
//           <h1 className="p-2 text-6xl sm:text-7xl">▼</h1>
//           </motion.div>
//         </motion.div>
//       </motion.section>

//     </>
//   )
// }

// export default Hero


import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Text animations (Fade-out & move-up)
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textTranslateY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Background image fades out
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden relative">
      {/* Background Image with Fade-Out */}
      <motion.section
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-cover bg-center bg-[url('/bImg.avif')]"
      />

      {/* Animated Text */}
      <motion.div
        transition={{ duration: 2 }}
        style={{ opacity: textOpacity, y: textTranslateY }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white font-medium px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1.3, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
        >
          <h1 className="p-2">LEADERS IN QUALITY</h1>
          <h1 className="p-2">CONSTRUCTION AND</h1>
          <h1 className="p-2">INFRASTRUCTURE</h1>
          <h1 className="p-2 text-5xl sm:text-6xl md:text-7xl">▼</h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

