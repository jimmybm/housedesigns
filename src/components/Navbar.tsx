import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">ArchPlans</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/explore" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                Explore
              </Link>
              <Link to="/sell" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                Sell Designs
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search designs..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <button className="p-2 rounded-full text-gray-600 hover:text-gray-900">
              <User className="h-6 w-6" />
            </button>
            <button className="sm:hidden p-2 rounded-full text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}