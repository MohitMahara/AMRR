import React from "react";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <nav className="bg-gray-900">
        <div className="px-8 py-2 mx-auto flex justify-between">
          <NavLink to={"/"}><h2 className="text-gray-100 text-2xl">AMRR</h2> </NavLink> 
          <ul className="flex gap-4 justify-center items center text-gray-100">
            <li><NavLink to={"/add-items"}>Add items</NavLink></li>
            <li><NavLink to={"/view-items"}>View items</NavLink></li>
          </ul>
        </div>
      </nav>
      <main className="w-full min-h-screen bg-gray-50">
        {children}
      </main>

      <footer className="bg-gray-800 ">
        <div className="flex justify-center px-10 py-4 mx-auto">
            <p className="text-gray-100 text-sm">© {new Date().getFullYear()} AMRR. All rights are reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
