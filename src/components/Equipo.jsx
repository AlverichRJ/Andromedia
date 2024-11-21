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
      className="lg:mx-auto lg:max-w-[800px] lg:mt-[230px]    xl:mx-auto xl:max-w-[800px] xl:mt-[300px] "
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      {TESTIMONIALS.map((testimonial, index) => (
        <motion.div
          key={index}
          className="lg:relative lg:-mt-40 lg:mx-8 lg:mb-44 lg:flex flex-col lg:items-center lg:rounded-lg lg:border lg:border-dotted lg:border-purple-800 lg:bg-[#efefef] lg:p-8 lg:md:flex-row 
                     xl:relative xl:-mt-40 xl:mx-8 xl:mb-56 xl:flex  xl:items-center xl:rounded-xl xl:border xl:border-dotted xl:border-purple-800 xl:bg-[#efefef] xl:p-8 xl:md:flex-row "
          variants={itemVariants}
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="mb-8 mr-6 h-16 w-16 rounded-full md:mb-0 "
          />
          <div >
            <p className="mb-4 italic text-black">"{testimonial.quote}"</p>
            <p className="font-bold text-black" >{testimonial.name}</p>
            <p className="text-[#a3447c] font-bold">{testimonial.title}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
   
  )
}

export default Equipo