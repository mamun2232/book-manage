import React from 'react';
import {  NavLink } from 'react-router-dom';
const Nevber = () => {
      return (
            <div>
                   <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            


            <NavLink to="/" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Show Book</NavLink>

            <NavLink to="/add-Books" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Add Book</NavLink>
            <NavLink to='/login' className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Login</NavLink>


           
        </div>
    </nav>
            </div>
      );
};

export default Nevber;