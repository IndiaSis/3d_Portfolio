import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";



const Icon = ({icon, name, index}) => (
    
        <div className=" bg-tertiary rounded-[20px] py-5 px-12 flex items-center justify-evenly flex-col">
        <motion.div className="flex justify-center items-center flex-col" variants={fadeIn("right", "spring", 0.1*index, 1)}>
        <img className="p-2 w-28 h-28 " src={icon} alt={name} />
        <h2 className=" w-auto h-auto  ">{name}</h2>
        </motion.div>
        </div>
    
);


const Tech = () =>{
    return (
        <>
             <div className="flex mt-20 flex-row flex-wrap justify-evenly items-center gap-10">
                {technologies.map((technology, index)=>(
                <Icon key={technology.name} index={index} {...technology}/>
        ))}
        </div>  
        </>
    );
}

export default SectionWrapper(Tech, "Technology");