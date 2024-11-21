import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

import { SiFacebook } from "react-icons/si";
import { BsCameraReels } from "react-icons/bs";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcSignature } from "react-icons/fc";
import { CiVideoOn } from "react-icons/ci";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInternetExplorer } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { SiGradleplaypublisher } from "react-icons/si";

import image1 from "../assets/project1.jpg";
import image2 from "../assets/project2.jpg";
import image3 from "../assets/project3.jpg";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";


export const NAVIGATION_LINKS = [
  { label: "CONÓCENOS", href: "#conocenos" },
  { label: "PROYECTOS", href: "#proyectos" },
  { label: "SERVICIOS", href: "#servicios" },
  
  { label: "EQUIPO", href: "#equipo" },
  { label: "CONTACTO", href: "#contact" },
];

export const PROFILE = {
  name: "",
  info: "",
};

export const ABOUT = {
  text1:
    "🚀 Apasionados por el mkt y la publicidad. Transformamos ideas en estrategias ",
  text2:
    "En nuestra agencia de marketing y publicidad, llevamos la creatividad y la estrategia al siguiente nivel. Somos apasionados por conectar marcas con sus audiencias, entendiendo sus necesidades y superando sus expectativas. Transformamos ideas en estrategias innovadoras y efectivas que generan impacto y potencian el crecimiento de nuestros clientes. Con un enfoque integral, combinamos el análisis de mercado, la creatividad y las últimas tendencias digitales para ofrecer soluciones personalizadas y resultados medibles. Más que una agencia, somos el aliado que tu marca necesita para destacar en un mundo competitivo.",
};

export const PROJECTS = [
  {
    title: "E-commerce Platform",
    subtitle:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    image: image1,
  },
  {
    title: "Social Media App",
    subtitle:
      "A social media application developed using Next.js and Firebase.",
    image: image2,
  },
  {
    title: "Project Management Tool",
    subtitle: "A project management tool built with Django and PostgreSQL.",
    image: image3,
  },
  
];

export const SKILLS = [
  {
    icon: <FaSquareFacebook  className="text-4xl lg:text-6xl " />,
    name: " Análisis y Planificación",
    experience: <p>Comprender las necesidades y objetivos de cada cliente  <br />  <br /> 
      <p>Realizar un análisis de la competencia y el mercado. <br />  <br /> 
      <p>
      Identificar las oportunidades y desafíos específicos.


      </p>


      </p>




    </p> ,
  },
  {
    icon: <CiVideoOn className="text-4xl lg:text-6xl text-white" />,
    name: "Servicios de Redes Sociales",
    experience: <p>Gestión de Redes Sociales <br />  <br /> 

      <p>
      Generación de Contenido <br />  <br /> 

      <p>
      Estrategia de Social Media <br />  <br /> 

      <p>
      Publicidad en Redes Sociales <br />  <br /> 



      </p>



      </p>

      </p>






    </p>,
  },
  {
    icon: <SiGradleplaypublisher className="text-4xl lg:text-6xl " />,
    name: "Servicios de Creatividad Publicitaria y Branding",
    experience: <p>Creatividad Publicitaria <br />  <br /> 

    <p>Branding/Rebranding <br />  <br /> 

      <p>Diseño de Logos y Style Guides <br />  <br /> 

        <p>Naming <br />  <br /> 



        </p>



      </p>


    </p>




  </p>,
  },
  {
    icon: <FaInternetExplorer  className="text-4xl lg:text-6xl " />,
    name: "Servicios de Diseño Web y Marketing Digital",
    experience:<p>Diseño de Páginas Web <br />  <br /> 

    <p>Google Ads <br />  <br /> 

      <p>SEO y SEM <br />  <br /> 

        <p>Chatbots <br />  <br />  

          <p>E-commerce <br />  <br /> 


          </p>


        </p>


      </p>



    </p>







  </p> ,
  },
  {
    icon: <MdOndemandVideo className="text-4xl lg:text-6xl " />,
    name: "Servicios de Video Marketing y Eventos",
    experience: <p>Video Marketing <br />  <br /> 

      <p>Cobertura de Eventos <br />  <br /> 
 


      </p>





    </p> ,
  },

 

];

export const ACHIEVEMENT = {
  title: " ¿Qué podemos hacer?",
  award: "Crear tu identidad ",
  description:
    "Podemos crear la identidad de tu marca, hacer que tus potenciales clientes desarrollen un lazo con tu marca y así puedas tener clientes que siempre esten contigo.",
};

export const TESTIMONIALS = [
  {
    name: "Alverich Root Jordison",
    title: "Lead Developer, Digital Solutions",
    quote:
      "El trabajo de Alverich es de vital importancia ya que sus fundamentos y visiones en el mundo de la tecnologia logran posionar todas las plataformas en los mejores lugares .",
    image: user1,
  },
  {
    name: "Carlos Guerrero",
    title: "CTO, Creative Minds",
    quote:
      "Uno de los mejores diseñadores de México, pues sus inovadores ideas logran crear la perfeccion visual que estas buscando",
    image: user2,
  },
  {
    name: "Jorge Melendez",
    title: "CEO, Marketing",
    quote:
      "Nuestro CEO tiene una de las mejores visiones en el mundo del marketing pues sus ideas han ayudado a posicionar a las mejores marcas en posiciones de alto nivel.",
    image: user3,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61560385270437&mibextid=LQQJ4d",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  
  {
    href: "https://www.instagram.com/andromedia.mkt?igsh=Y3FzMHl5bWk5cDVy&utm_source=qr",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },

  {
    href: "https://www.tiktok.com/@andromedia.mkt",
    icon: <FaTiktok fontSize={25} className="hover:opacity-80" />,
  },
  
];
