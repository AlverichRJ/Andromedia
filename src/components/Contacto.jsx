import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";

import { SOCIAL_MEDIA_LINKS } from "../constants";
import logo from "../assets/logo.png";





const Contacto = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [errors, setErrors] = useState({});
      const [isSending, setIsSending] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = "El campo NOMBRE es obligatorio";
        if (!formData.email) {
          errors.email = "El campo CORREO es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = "El correo electrónico ingresado no parece ser válido";
        }
        if (!formData.message) errors.message = "El campo MENSAJE es obligatorio";
        return errors;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
          setErrors({});
          setIsSending(true);
    
          emailjs
            .send(
              "service_uibux4m", // Replace with your EmailJS service ID
              "template_6avkvvo", // Replace with your EmailJS template ID
              formData,
              "EBqX0QK1l9lSOf_U4",
            )
            .then((response) => {
              console.log("ENVIADO!", response.status, response.text);
              toast.success("Mensaje enviado!");
              setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
              console.log("ERROR...", error);
              toast.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
            })
            .finally(() => {
              setIsSending(false);
            });
        }
      };

  return (

    <div className=" h-[90vh]  lg:mx-auto max-w-3xl p-4    xl:h-[900px]  " id="contact">



      
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter  ">
      Cuéntanos tus dudas
      </h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}

        
      >
        <div className="mb-4 bg-">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Nombre"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border-2 border-white bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
          {errors.name && (
            <motion.p
              className="text-sm text-pink-700 "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
            >
              {errors.name}
            </motion.p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border-2 border-white bg-transparent px-3 py-2 focus:border-gray-400 focus:outline-none"
          />
          {errors.email && (
            <motion.p
              className="text-sm text-pink-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
            >
              {errors.email}
            </motion.p>
          )}
        </div>
        <div className="mb-4 ">
          <textarea
            id="message"
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            className="mb-3 w-full appearance-none rounded-lg border-2 border-white bg-transparent px-3 py-2 focus:border-gray-400 focus:outline-none"
            rows="4"
          />
          {errors.message && (
            <motion.p
              className="text-sm text-pink-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
            >
              {errors.message}
            </motion.p>
          )}
        </div>
        <button
          type="submit"
          className={`sm:mb-8  w-full rounded bg-[#cf86fa] px-4 py-1 text-sm font-semibold text-slate-950 hover:bg-[#7c23a6] ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Enviar"}
        </button>
      </motion.form>







      <div className="">
      <div className=" ">
        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <img src="" width={400} className=" bg-orange-300" />
          <div  />
        </motion.figure>
      </div>
      <div className="sm:-mt-3 flex justify-center gap-5 lg:mt-56 xl:mt-80 uw:mt-80 ">
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
  



      
    </div>
    
  )
}

export default Contacto