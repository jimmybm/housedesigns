import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Sofa, Car, Maximize2 } from 'lucide-react';

type ListingCardProps = {
  id: number;
  title: string;
  builder: string;
  beds: number;
  baths: number;
  livingRooms: number;
  garages: number;
  size: number;
  logoUrl: string;
};

export default function ListingCard({
  id,
  title,
  beds,
  baths,
  livingRooms,
  garages,
  size,
  logoUrl,
}: ListingCardProps) {
  return (
    <Link to={`/listing/${id}`} className="group">
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-200 ease-in-out group-hover:transform group-hover:scale-[1.02]">
        <div className="relative flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="House design"
          />
          <div className="absolute bottom-0 right-0 bg-white px-3 py-2 m-4 rounded-md text-sm font-medium text-gray-900 flex items-center shadow-sm">
            <Maximize2 className="h-4 w-4 mr-1" />
            {size} m²
          </div>
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="block">
              <p className="text-xl font-semibold text-gray-900">
                {title}
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center text-gray-500">
                  <Bed className="h-5 w-5 mr-1" />
                  <span>{beds}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Bath className="h-5 w-5 mr-1" />
                  <span>{baths}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Sofa className="h-5 w-5 mr-1" />
                  <span>{livingRooms}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Car className="h-5 w-5 mr-1" />
                  <span>{garages}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between border-t pt-4">
            <div className="flex-1">
              <img
                src={logoUrl}
                alt="Builder logo"
                className="h-12 w-48 object-contain object-left"
              />
            </div>
            <span className="text-sm text-indigo-600 group-hover:text-indigo-500 whitespace-nowrap ml-4">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}