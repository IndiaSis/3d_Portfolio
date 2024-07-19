import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const Tech = () =>{
    return (
        <>
             <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technologies)=>(
                <div className="w-28 gap-3 mb-3 h-28 bg-tertiary bg-opacity-25 flex flex-col items-center border-none rounded-[20px]">
                    <img className="p-2" src={technologies.icon} alt={technologies.name} />
                    <h2 className=" items-center ">{technologies.name}</h2>
                </div>
        ))}
        </div>  
        </>
    );
}

export default SectionWrapper(Tech, "Technology");