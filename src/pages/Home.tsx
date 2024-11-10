import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home as HomeIcon, Shield, Sparkles } from 'lucide-react';

export default function Home() {
  const featuredHomes = [
    {
      id: 1,
      title: "The Hillside Retreat",
      style: "Modern Design",
      beds: 4,
      baths: 3,
      size: 232, // 2,500 sqft converted to m²
    },
    {
      id: 2,
      title: "Coastal Haven",
      style: "Contemporary Design",
      beds: 3,
      baths: 2,
      size: 186,
    },
    {
      id: 3,
      title: "Urban Oasis",
      style: "Modern Design",
      beds: 4,
      baths: 3,
      size: 205,
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Find Your Dream</span>
                <span className="block text-indigo-600">House Design</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Discover beautiful house plans from top architects and designers worldwide. 
                Find the perfect design for your future home.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                <Link to="/explore" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  Start Exploring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern house exterior"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Designs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Designs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our most popular house plans
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredHomes.map((home) => (
            <Link key={home.id} to={`/listing/${home.id}`} className="group">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-200 ease-in-out group-hover:transform group-hover:scale-[1.02]">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt="House design"
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      {home.style}
                    </p>
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {home.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {home.beds} Beds • {home.baths} Baths • {home.size} m²
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="text-sm text-indigo-600 group-hover:text-indigo-500">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose ArchPlans?
            </h2>
          </div>
          <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-8">
            {[
              {
                icon: HomeIcon,
                title: 'Curated Designs',
                description: 'Hand-picked collection of premium house plans from certified architects.',
              },
              {
                icon: Shield,
                title: 'Secure Purchases',
                description: 'Safe and secure transactions with money-back guarantee.',
              },
              {
                icon: Sparkles,
                title: 'Quality Assured',
                description: 'All designs are reviewed and verified by our expert team.',
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}