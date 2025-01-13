import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const cars = [
    {
      carImage: "/car11.png",
      carName: "Toyota Corolla",
      carPrice: "$20,000",
      carReviews: "4.5/5",
    },
    {
      carImage: "/Honda_Civic.png",
      carName: "Honda Civic",
      carPrice: "$22,000",
      carReviews: "4.8/5",
    },
    {
      carImage: "/Suzuki_Alto.png",
      carName: "Suzuki Alto",
      carPrice: "$35,000",
      carReviews: "4.9/5",
    },
    {
      carImage: "/Honda_City.png",
      carName: "Honda City",
      carPrice: "$27,000",
      carReviews: "4.7/5",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">
        Car Showcase
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {cars.map((car, index) => (
          <ChildComponent
            key={index}
            image={car.carImage}
            name={car.carName}
            price={car.carPrice}
            reviews={car.carReviews}
          />
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;
