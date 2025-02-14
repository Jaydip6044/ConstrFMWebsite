import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";


function Services() {

    const { scrollYProgress } = useScroll(); // Track scroll progress
    
      // Text moves up & fades out
      const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
      const textTranslateY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    
      // Background image fades out
      const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    
  return (
    <>
      {/* Services Section */}
      <motion.section className="h-auto bg-white p-8">
        <h1 className="text-blue-900 text-4xl sm:text-6xl font-bold text-center relative">
          SERVICES
          <span className="block w-24 h-1 bg-amber-500 mx-auto mt-2"></span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 mt-8">
          {/* Service Box 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center hover:scale-105 transition-transform duration-300">
            <img
              src="/serv1.avif"
              alt="Service 1"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">
              Preconstruction Planning
            </h3>
            <motion.p className="text-gray-600 mt-2 text-justify"
             initial={{ x: "-100vw", opacity: 0 }} // Start from the left, invisible
             animate={{ x: 0.3, opacity: 1 }} // Move to the original position
             transition={{ duration:1 , ease: "anticipate" }} // Smooth transition
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque tenetur qui corrupti at sit, quis nisi repudiandae ad,
              veritatis quidem, vitae saepe? Placeat, error molestiae facilis
              accusamus, vel beatae reprehenderit corporis suscipit dignissimos
              eveniet libero officia illum rerum mollitia dolor! Dolore error
              fugit atque ipsa pariatur sapiente aliquam. Exercitationem, at.
            </motion.p>
          </div>

          {/* Service Box 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center hover:scale-105 transition-transform duration-300">
            <img
              src="/serv3.avif"
              alt="Service 2"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">
              Architectural Modelling
            </h3>
            <motion.p className="text-gray-600 mt-2 text-justify"
                 initial={{ y: "-100vw", opacity: 0 }} // Start from the left, invisible
                 animate={{ y: 0.3, opacity: 1 }} // Move to the original position
                 transition={{ duration:1 , ease: "anticipate" }} // Smooth transition
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              illum, sint consequuntur cum quis reiciendis enim. Doloribus
              architecto maxime alias quisquam sint tempore cum amet earum atque
              adipisci aliquam autem harum doloremque quidem illo quam natus
              dolores magnam at minima, perspiciatis voluptatum. Aliquam
              repellat expedita exercitationem sunt ipsa illo ad.
            </motion.p>
          </div>

          {/* Service Box 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center hover:scale-105 transition-transform duration-300">
            <img
              src="serv2.avif"
              alt="Service 3"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">
              Construction Management
            </h3>
            <motion.p className="text-gray-600 mt-2 text-justify"
                initial={{ x: "+100vw", opacity: 0 }} // Start from the left, invisible
                animate={{ x: 0.3, opacity: 1 }} // Move to the original position
                transition={{ duration:1 , ease: "anticipate" }} // Smooth transition
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem necessitatibus fuga possimus libero dolorem, est,
              recusandae illum modi, fugit officia et quidem consequatur! Vitae
              porro eveniet, possimus similique ut quia? Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Molestias alias impedit volup
            </motion.p>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Services
