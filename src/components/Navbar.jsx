"use client"
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
//Se creo las constante header y setheader para hacer el efecto de scroll
  const [header,setHeader] = useState(false);

  const scrollHeader =() =>{

    if(window.scrollY >= 20 ){

      setHeader(true)

    } else{

      setHeader(false)
    }

  }

    useEffect(() => {

      window.addEventListener('scroll', scrollHeader)

      return()=>{

        window.addEventListener('scroll', scrollHeader)


      }


    },[])

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
        color: 'white'
      });
    }
    setIsMobileMenuOpen(false);
  };

 

  return (
    <div  >
      <nav className="fixed left-0 right-32 top-3 z-50 w-full  ">
        {/* Desktop Menu */}
        <div className={header ? "mx-auto max-w-4xl   backdrop-blur-[10px] " : "mx-auto max-w-4xl"}
        
        >
          <div className="flex ">
            <div >
              <a href="#">
                <img src={logo} width={150} alt="Logo" className="mt-6 ml-40 " />
              </a>
            </div>
            <div>
              <ul className="flex items-center -space-x-12 mt-8 si">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="hover:text-[#a3447c] mr-16  "
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>




        

        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden ml-9 -mr-28">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img src={logo} width={90} alt="Logo" className="m-2" />

              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md ">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    className="block w-full text-xl font-semibold "
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

    
    </div>



  );
};

export default Navbar;