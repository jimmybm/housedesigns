import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  Download, 
  Share2, 
  Heart, 
  Check, 
  Bed, 
  Bath, 
  Sofa, 
  Car, 
  LayoutTemplate, 
  Maximize2
} from 'lucide-react';

const SpecItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string | number }) => (
  <div className="flex flex-col items-center text-center">
    <div className="p-3 bg-indigo-50 rounded-full mb-2">
      <Icon className="h-6 w-6 text-indigo-600" />
    </div>
    <p className="text-gray-500 text-sm">{label}</p>
    <p className="font-semibold">{value}</p>
  </div>
);

export default function ListingDetails() {
  const { id } = useParams();

  const specifications = [
    { icon: Bed, label: 'Bedrooms', value: '4' },
    { icon: Bath, label: 'Bathrooms', value: '3' },
    { icon: Sofa, label: 'Living Areas', value: '2' },
    { icon: Car, label: 'Garage Spaces', value: '2' },
    { icon: LayoutTemplate, label: 'Floor Plans', value: '2' },
    { icon: Maximize2, label: 'Total Area', value: '232 m²' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Modern Villa Design</h1>
        <div className="flex flex-wrap items-center gap-4">
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
            <h2 className="text-xl font-semibold mb-6">Specifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {specifications.map((spec, index) => (
                <SpecItem key={index} {...spec} />
              ))}
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
            <div className="flex items-center justify-end mb-6">
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-600">
                <Heart className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" />
                Request Information
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