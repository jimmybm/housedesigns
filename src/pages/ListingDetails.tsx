import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Download, Share2, Heart, Check } from 'lucide-react';

export default function ListingDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Modern Villa Design</h1>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">4.9 (128 reviews)</span>
          </div>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">Plan #MOD-{id}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Images and Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Main Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="House design"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative rounded-lg overflow-hidden cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt={`Thumbnail ${item}`}
                  className="w-full h-24 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-gray-500">Bedrooms</p>
                <p className="font-semibold">4</p>
              </div>
              <div>
                <p className="text-gray-500">Bathrooms</p>
                <p className="font-semibold">3</p>
              </div>
              <div>
                <p className="text-gray-500">Square Feet</p>
                <p className="font-semibold">2,500</p>
              </div>
              <div>
                <p className="text-gray-500">Stories</p>
                <p className="font-semibold">2</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600">
              This modern villa design combines contemporary aesthetics with practical living spaces.
              The open-concept layout creates a seamless flow between rooms, while large windows
              flood the interior with natural light. The first floor features a spacious living area,
              gourmet kitchen, and dining room, while the second floor houses four comfortable bedrooms
              including a luxurious master suite.
            </p>
          </div>
        </div>

        {/* Right Column - Purchase Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">$1,299</h2>
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-600">
                <Heart className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" />
                Purchase Plan
              </button>
              
              <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 flex items-center justify-center">
                <Share2 className="h-5 w-5 mr-2" />
                Share Design
              </button>
            </div>

            <div className="mt-6 border-t pt-6">
              <h3 className="font-semibold mb-4">What's Included:</h3>
              <ul className="space-y-3">
                {[
                  'Complete construction drawings',
                  'Foundation plan',
                  'Electrical layouts',
                  'PDF & CAD files',
                  'Unlimited printing rights',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}