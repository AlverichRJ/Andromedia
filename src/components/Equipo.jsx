import { TESTIMONIALS } from "../constants";
import { motion } from "framer-motion";


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
const Equipo = () => {
  return (

    <div
    className=" h-screen  "
    id="equipo"
  >
    <h2 className="lg:mt-2 text-center text-4xl font-semibold">

     EQUIPO DE MARKETING
    </h2>
    <motion.div
      className="sm:mx-auto sm:max-w-[400px] sm:mt-[180px]                   lg:mx-auto lg:max-w-[800px] lg:mt-[230px]    xl:mx-auto xl:max-w-[800px] xl:mt-[300px] "
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      {TESTIMONIALS.map((testimonial, index) => (
        <motion.div
          key={index}
          className="lg:relative lg:-mt-40 lg:mx-8 lg:mb-44 lg:flex flex-col lg:items-center lg:rounded-lg lg:border lg:border-dotted lg:border-purple-800 lg:bg-[#efefef] lg:p-8 lg:md:flex-row 
                     xl:relative xl:-mt-40 xl:mx-8 xl:mb-56 xl:flex  xl:items-center xl:rounded-xl xl:border xl:border-dotted xl:border-purple-800 xl:bg-[#efefef] xl:p-8 xl:md:flex-row 
                     md:relative md:-mt-40 md:mx-8 md:mb-56 md:flex  md:items-center md:rounded-xl md:border md:border-dotted md:border-purple-800 md:bg-[#efefef] md:p-8 md:md:flex-row 
                     sm:hidden sm:-mt-40 sm:mx-3 sm:mb-8   sm:items-center sm:rounded-xl sm:border sm:border-dotted sm:border-purple-800 sm:bg-[#efefef] sm:-p-6 sm:md:flex-row 
                     "
          variants={itemVariants}
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="hidden lg:block xl:block    lg:mb-8 lg:mr-6 lg:h-16 lg:w-16 lg:rounded-full         xl:mb-8 xl:mr-6 xl:h-16 xl:w-16 xl:rounded-full md:mb-0 "
          />
          <div >
            <p className="hidden lg:block xl:block md:mb-4 sm:italic md:text-black lg:mb-4 md:italic lg:text-black   xl:mb-4 xl:italic xl:text-black">"{testimonial.quote}"</p>
            <p className="hidden lg:block xl:block  font-bold text-black" >{testimonial.name}</p>
            <p className="hidden  lg:block xl:block text-[#a3447c] font-bold">{testimonial.title}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
   
  )
}

export default Equipo