import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
         {/* icon */}
          <span className="ml-3 text-[24px] font-bold">Exclusive</span>
       
        
       {/* navbar link */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <div className='gap-4 flex'>
          <Link href="#">
            Home
          </Link>
          <Link href="#">
            Contact
          </Link>
          <Link href="#">
            About
          </Link>
          <Link href="#">
            Sign Up
          </Link>
          </div>
        </nav>
        {/* search */}
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="rounded border border-gray-300 py-2 px-4 pl-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          
          </div>
          {/* heart and cart icon */}
          <div>
          <div className="flex items-center space-x-4">
          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6 text-gray-600 hover:text-gray-900"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </Link>
          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6 text-gray-600 hover:text-gray-900"
              viewBox="0 0 24 24"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 001.94 1.61h9.72a2 2 0 001.94-1.61L23 6H6"></path>
            </svg>
          </Link>
        </div>
          </div>
        
      </div>
    </header>
  );
};

export default Header;
