import React from "react";
import { Navbar, About } from "./components";
import "./index.css";



const Aboutpage = () => {
    return (
        <>
        <Navbar />
        <div className="mt-12 relative z-0 bg-primary">
        <About />
        </div>
        </>
    )
}

export default Aboutpage
