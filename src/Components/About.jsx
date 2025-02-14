import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      {/* About Section */}
      <section className="h-auto p-10 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* About Text */}
          <div className="text-center md:text-left px-6">
            <h1 className="text-4xl sm:text-6xl font-medium text-blue-900 relative">
              ABOUT
              <span className="block w-24 h-1 bg-amber-500 mx-auto md:mx-0 mt-2"></span>
            </h1>
            <motion.p className="text-gray-700 mt-6 leading-relaxed"
             initial={{ y: "-100vw", opacity: 0 }} // Start from the left, invisible
             animate={{ y: 0.3, opacity: 0.9 }} // Move to the original position
             transition={{ duration:1 , ease: "anticipate" }} // Smooth transition
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              quis eligendi ab soluta officiis corrupti quod nisi repudiandae
              tempore impedit laboriosam veritatis, earum debitis harum unde,
              obcaecati excepturi eos laudantium nobis officia iste magnam error
              at. Expedita quasi fuga error porro autem veritatis ut asperiores 
              nemo eos excepturi, eius blanditiis sunt obcaecati distinctio
              atque, cupiditate enim adipisci, consequatur numquam
              temporibusLorem30 Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore iusto aspernatur consequatur? Cumque
              voluptates voluptatum vero atque eum, nostrum porro. Unde
              exercitationem molestiae repellendus earum officia ipsum quidem a
              cum!
            </motion.p>
          </div>

          {/* About Image */}
          <div className="w-full h-96 bg-[url('/bg2.avif')] bg-cover bg-center rounded-lg shadow-lg"></div>
        </div>
      </section>

      <section className="bg-[#EDCD1F] py-10 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 px-8 text-center">
          {[
            { number: "2035", label: "Year Established" },
            { number: "206", label: "Projects Completed" },
            { number: "870", label: "Contractors Appointed" },
            { number: "26", label: "Awards Won Currently" },
          ].map((item, index) => (
            <div key={index} className="w-full max-w-xs mx-auto">
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-[#3D5975]">
                {item.number}
              </h1>
              <h3 className="font-medium text-lg sm:text-xl md:text-2xl text-[#3D5975]">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
