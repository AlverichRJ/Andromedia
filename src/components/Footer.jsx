import { SOCIAL_MEDIA_LINKS } from "../constants";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="">
      <div className=" ">
        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <img src={logo} width={400} className=" bg-orange-300" />
          <div  />
        </motion.figure>
      </div>
      <div className=" ">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5 * index }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
     
    </div>
  );
};

export default Footer;