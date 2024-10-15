import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    price: string;
    rating: number
  }
  

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price,  rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? "gold" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="w-6 h-6 text-yellow-400"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l-5.18 2.73L8 14.14l-4.45-3.64L7.09 8.36l5.45-.43L12 3.5l1.46 4.44 5.45.43-4.45 3.64.81 5.86L12 17.27z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-white mb-5">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-lg font-bold text-red-500 mb-2">${price}</p>
        
        <div className="flex mb-4">
          {renderStars()}
        </div>
    
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
