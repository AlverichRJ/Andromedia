import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const Conocenos = () => {
  return (
    <div className=' h-screen w-full  container mx-auto  py-16 tracking-tighter ' id='conocenos'>
        <motion.h2
        className=" lg: lg:text-[35px] lg:ml-[840px] lg:-mt-3  xl:text-[50px] xl:ml-[1020px] xl:-mt-3"
        intial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    >
       CONÓCENOS
    </motion.h2>
    <motion.h3
        className="  lg:text-[45px] lg:ml-[120px] lg:mt-16   xl:text-[60px] xl:ml-[230px] xl:mt-16"
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

      <div className="lg:w-[1500px] lg:text-justify lg:ml-56 lg:text-[2rem] lg:mt-40    xl:w-[1900px] xl:text-justify xl:ml-52 xl:text-[38px] xl:mt-72 ">

      {ABOUT.text2}

      </div>
       
    </motion.p>
    </div>
  )
}

export default Conocenos