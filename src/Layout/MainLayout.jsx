import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AuthContext } from "../Provider/AuthProvider";

const MainLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col min-h-screen">
      {user && user?.email && (
        <p className="text-xl font-bold text-center pt-5 text-green-400">
          !! Welcome {user?.displayName} !!
        </p>
      )}

      <nav className="w-11/12 mx-auto pt-5">
        <Navbar></Navbar>
      </nav>

      <div className="flex-grow w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
