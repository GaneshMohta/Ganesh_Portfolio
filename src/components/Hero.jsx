import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import {init} from 'ityped';
import React , { useEffect , useRef, useState} from "react";
import {AiOutlineGithub } from "react-icons/ai";
import {ImLinkedin} from "react-icons/im";
import {AiOutlineInstagram} from "react-icons/ai";
import {BiLinkAlt} from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

import "./Hero.scss";

const Hero = () => {

  const [Theme ,setTheme ] = useState(false);

  const dark_bright=()=>{
    setTheme((prev)=>!prev)
    const elements = document.querySelectorAll(".sectionSubText");

    if(Theme){
     document.getElementsByClassName("dark-bright")[0].style.backgroundColor = "white";
     document.getElementsByClassName("heroHeadText")[0].style.color = "black";
     document.getElementsByClassName("heroSubText")[0].style.color ="#ff950ae6"
    elements.forEach(element => {
      element.style.color = "black";
    });
    }
    else{
      document.getElementsByClassName("dark-bright")[0].style.backgroundColor = "black";
      document.getElementsByClassName("heroHeadText")[0].style.color = "white";
      document.getElementsByClassName("heroSubText")[0].style.color ="#dcdcdc8e"
      elements.forEach(element => {
        element.style.color = 'white';
      })
    }

  }

  const textRef=useRef();
  useEffect(()=>
  {
    init(textRef.current, { showCursor: true, strings: ['Full stack Developer', " Tech Enthusiast "] })
  },[]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="flex">
      <div
        className={`head1 absolute  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-90 h-40 violet-gradient' />
        </div>


        <div className="head2">
          <h1 className={`${styles.heroHeadText}  heroHeadText`}>
            Hii there, I'm <p className='name heroSubText'>Ganesh Mal</p>
          </h1>
          <h3>
            <span ref={textRef} className={`${styles.heroSubText} text-orange-400 mt-2 green-text-gradient`}></span>
          </h3>

        <div className="absolute link1">
        <a
          href="https://github.com/GaneshMohta" target="_blank">
          <AiOutlineGithub className="text-gray-600" />
        </a>
        <a
          href="https://www.linkedin.com/in/ganesh-mohata-480314251/" target="_blank">
          <ImLinkedin className="text-gray-600"/>
        </a>
        <a
          href="https://www.instagram.com/ganesh07mohta" target="_blank">
          <AiOutlineInstagram className="text-gray-600" />
        </a>
        {/* <a
          href="https://linktr.ee/" target="_blank">
          <BiLinkAlt />
        </a> */}
        <button onClick={dark_bright} className="text-[25px] pe-4">{!Theme ?<MdWbSunny className="text-gray-600"/> : <FaMoon className="text-gray-600"/> }</button>

      </div>

      </div>
      </div>
      {/* <div className="imgcontainer1 absolute violet-gradient">
        <img src={} alt="" className="object-contain"/>
      </div> */}
      </div>


      <ComputersCanvas />

      {/* <div className='absolute xs:bottom-2 bottom-6 w-10 flex justify-end items-center'>
        <a href='#education'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary  flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full text-slate-600 mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
