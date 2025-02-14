import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <>
      {/* Projects Section */}
      <section className="w-full pt-6 bg-gray-100">
        <h1 className="text-blue-900 text-3xl sm:text-5xl font-bold text-center relative">
          Projects
          <span className="block w-24 h-1 bg-amber-500 mx-auto mt-2"></span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-6 sm:px-12 lg:px-24 py-8">
          {["/const-6.jpg", "/const-5.jpg", "/const-7.jpg", "/cont-8.jpg"].map(
            (img, index) => (
              <div
                key={index}
                className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden group rounded-lg shadow-lg"
              >
                {/* Background Image */}
                <motion.div
                 initial={{ x: 200, opacity: 0 }} // Start from the right
                 animate={{ x: 0, opacity: 1 }}  // Slide into position
                 transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:opacity-60 group-hover:scale-110"
                  style={{ backgroundImage: `url(${img})` }}
                ></motion.div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg sm:text-xl font-bold opacity-0 transition-all duration-500 group-hover:opacity-100 hover:bg-transparent  hover:bg-opacity-20">
                  Project {index + 1}
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;
