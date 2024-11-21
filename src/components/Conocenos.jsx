import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const Conocenos = () => {
  return (
    <div className=' h-screen w-full  container mx-auto  py-16 tracking-tighter ' id='conocenos'>
        <motion.h2
        className="//telefonos//  sm:ml-32 sm:-mt-16 sm:text-[40px]     //telefonos// md:ml-20     //Pantallas//  lg: lg:text-[35px] lg:ml-[655px] lg:-mt-3 lg:bg-transparent  //Pantallas Wide//  xl:text-[50px] xl:ml-[1020px] xl:-mt-3 xl:bg-transparent "
        intial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    >
       CONÓCENOS
    </motion.h2>
    <motion.h3
        className=" //telefonos// sm:mt-8 sm:text-[30px] sm:text-justify    //laptops// md:mt-6  md:text-[22px] md:text-justify   //Pantallas// lg:text-[45px] lg:ml-[10px] lg:mt-16   //Pantallas Wide//  xl:text-[60px] xl:ml-[230px] xl:mt-16"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
    >
        {ABOUT.text1}
    </motion.h3>
    <motion.p
    
    initial={{opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    >

      <p className=" //telefonos// sm:mt-36  sm:text-[20px]  //laptops// md:text-[19px] md:text-center md:text-current  //Pantallas// lg:w-[1500px] lg:text-justify lg:ml-12 lg:text-[2rem] lg:mt-40   //Pantallas Wide// xl:w-[1900px] xl:text-justify xl:ml-52 xl:text-[38px] xl:mt-72 ">

      {ABOUT.text2}

      </p>
       
    </motion.p>
    </div>
  )
}

export default Conocenos