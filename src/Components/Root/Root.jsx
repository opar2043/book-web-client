import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Toaster } from "react-hot-toast"


const Root = () => {
  return (
    <div>
       <Toaster position="top-center" ></Toaster>
        <Navbar></Navbar>
        <div className="w-11/12 mx-auto">
           <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Root