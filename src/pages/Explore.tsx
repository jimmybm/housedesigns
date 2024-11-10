import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ListingCard from '../components/ListingCard';

type FilterOptions = {
  bedrooms: string;
  style: string;
};

export default function Explore() {
  const [filters, setFilters] = useState<FilterOptions>({
    bedrooms: '',
    style: '',
  });

  const listings = [
    {
      id: 1,
      title: "Modern Villa Design",
      builder: "Apex Architects",
      beds: 4,
      baths: 3,
      livingRooms: 2,
      garages: 2,
      size: 232,
      logoUrl: "https://placehold.co/200x80?text=Apex+Architects",
    },
    {
      id: 2,
      title: "Coastal Retreat",
      builder: "Ocean View Designs",
      beds: 3,
      baths: 2,
      livingRooms: 1,
      garages: 1,
      size: 186,
      logoUrl: "https://placehold.co/200x80?text=Ocean+View",
    },
    {
      id: 3,
      title: "Urban Townhouse",
      builder: "Metropolitan Homes",
      beds: 4,
      baths: 3,
      livingRooms: 2,
      garages: 1,
      size: 205,
      logoUrl: "https://placehold.co/200x80?text=Metropolitan",
    },
    {
      id: 4,
      title: "Mountain Lodge",
      builder: "Alpine Builders",
      beds: 5,
      baths: 4,
      livingRooms: 3,
      garages: 3,
      size: 279,
      logoUrl: "https://placehold.co/200x80?text=Alpine",
    },
    {
      id: 5,
      title: "Garden Cottage",
      builder: "Green Space Designs",
      beds: 2,
      baths: 2,
      livingRooms: 1,
      garages: 1,
      size: 139,
      logoUrl: "https://placehold.co/200x80?text=Green+Space",
    },
    {
      id: 6,
      title: "Luxury Estate",
      builder: "Elite Homes",
      beds: 6,
      baths: 5,
      livingRooms: 4,
      garages: 4,
      size: 372,
      logoUrl: "https://placehold.co/200x80?text=Elite+Homes",
    },
  ];

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
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
}