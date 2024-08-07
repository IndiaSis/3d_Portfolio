import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Aboutpage from "./Aboutpage";



const Apps = () =>{
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/about" element={<Aboutpage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Apps