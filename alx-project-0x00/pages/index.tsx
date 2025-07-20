import Image from "next/image";
import Pill from "@/components/Pill";
import HOUSE_IMAGE from "@/public/assets/images/house.png";
import STAR_IMAGE from "@/public/assets/images/star.png";
import React from "react";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Free Reschedule",
  "Pet Friendly",
  "Luxury",
  "Budget",
];

const PROPERTYLISTINGSAMPLE = [
  {
    id: "1",
    title: "Villa Arrecife Beach House",
    description: "Sideman, Bali, Indonesia",
    price: 2450,
    location: "Sideman, Bali, Indonesia",
    image: HOUSE_IMAGE,
    type: "Villa",
    rating: 4.76,
  },
  {
    id: "2",
    title: "Countryside Escape",
    description: "Napa Valley, California, USA",
    price: 1800,
    location: "Napa Valley, California, USA",
    image: HOUSE_IMAGE,
    type: "Countryside",
    rating: 4.92,
  },
  {
    id: "3",
    title: "Modern City Apartment",
    description: "Berlin, Germany",
    price: 1200,
    location: "Berlin, Germany",
    image: HOUSE_IMAGE,
    type: "Apartment",
    rating: 4.65,
  },
];

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/house.png')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="flex flex-wrap gap-3 justify-center py-8">
        {filters.map((filter) => (
          <Pill key={filter} title={filter} />
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 py-8">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={property.image}
              alt={property.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{property.title}</h3>
              <p className="text-gray-500 mb-2">{property.description}</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-blue-600">
                  ${property.price}
                </span>
                <span className="flex items-center">
                  <Image src={STAR_IMAGE} alt="star" width={20} height={20} />
                  <span className="ml-1 text-gray-700 font-medium">
                    {property.rating}
                  </span>
                </span>
              </div>
              <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {property.type}
              </span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
