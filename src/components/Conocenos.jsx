import { ABOUT } from "../constants";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Conocenos = () => {
  return (
    <div className=' h-screen w-full  container mx-auto  py-16 tracking-tighter ' id='conocenos'>
        <motion.h2
        className="//telefonos//  sm:ml-[20px] sm:-mt-16 sm:text-[40px]     //telefonos// md:ml-20     //Pantallas//  lg: lg:text-[35px] lg:ml-[655px] lg:-mt-3 lg:bg-transparent  //Pantallas Wide//  xl:text-[50px] xl:ml-[1020px] xl:-mt-3 xl:bg-transparent //ULTRA WIDE// uw:text-[50px] uw:ml-[1350px] uw:-mt-3 uw:bg-transparent "
        intial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    >
       CONÓCENOS
    </motion.h2>
    <motion.h3
        className=" //telefonos// sm:mt-5 sm:text-[15px] sm:text-justify    //laptops// md:mt-6  md:text-[22px] md:text-justify   //Pantallas// lg:text-[45px] lg:ml-[10px] lg:mt-16   //Pantallas Wide//  xl:text-[60px] xl:ml-[230px] xl:mt-16  //ULTRA WIDE// uw:text-[60px] uw:ml-[330px] uw:mt-16 "
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

      <p className=" //telefonos// sm:mt-28  sm:text-[13px] sm:text-justify  //laptops// md:text-[19px] md:text-center md:text-current  //Pantallas// lg:w-[1500px] lg:text-justify lg:ml-12 lg:text-[2rem] lg:mt-40   //Pantallas Wide// xl:w-[1900px] xl:text-justify xl:ml-52 xl:text-[38px] xl:mt-72 //ultra wide// uw:w-[1900px] uw:text-justify uw:ml-[550px] uw:text-[38px] uw:mt-70">

      {ABOUT.text2}

      </p>
       
    </motion.p>


    <div>

      
    <a className="md:hidden lg:hidden xl:hidden uw:hidden" >
                <img src={logo} width={90} alt="Logo" className="  position: absolute  sm:-mt-[708px] sm:ml-[80px] sm:scale-150  " />

              </a>

             

    </div>
    </div>
  )
}

export default Conocenos