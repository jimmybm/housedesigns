import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';

type FilterOptions = {
  bedrooms: string;
  style: string;
};

export default function Explore() {
  const [filters, setFilters] = useState<FilterOptions>({
    bedrooms: '',
    style: '',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
          Explore House Plans
        </h1>
        <div className="flex space-x-4">
          <div className="relative flex-grow md:max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search designs..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Filter Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <select
          value={filters.bedrooms}
          onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
        >
          <option value="">Bedrooms</option>
          <option value="2">2+ Bedrooms</option>
          <option value="3">3+ Bedrooms</option>
          <option value="4">4+ Bedrooms</option>
        </select>

        <select
          value={filters.style}
          onChange={(e) => setFilters({ ...filters, style: e.target.value })}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
        >
          <option value="">Style</option>
          <option value="modern">Modern</option>
          <option value="traditional">Traditional</option>
          <option value="contemporary">Contemporary</option>
        </select>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Link key={item} to={`/listing/${item}`} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 ease-in-out group-hover:transform group-hover:scale-[1.02]">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="House design"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Villa Design</h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>4 Beds</span>
                  <span className="mx-2">•</span>
                  <span>3 Baths</span>
                  <span className="mx-2">•</span>
                  <span>2,500 sqft</span>
                </div>
                <div className="flex items-center justify-end">
                  <span className="text-sm text-indigo-600 group-hover:text-indigo-500">View Details →</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}