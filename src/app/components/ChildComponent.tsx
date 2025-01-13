import Image from "next/image";

// Define an interface for props
interface CarProps {
  image: string;
  name: string;
  price: string;
  reviews: string;
}

const ChildComponent: React.FC<CarProps> = ({ image, name, price, reviews }) => {
  return (
    <div
      className="flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden 
      transform transition duration-300 hover:scale-105 hover:shadow-2xl p-4"
    >
      {/* Car Images */}
      <div className="relative w-full h-40 mb-4">
        <Image
          src={image}
          alt={`${name} image`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Car Details */}
      <div className="text-center">
        
        {/* Car Name */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>

        {/* Car Price */}
        <p className="text-green-600 text-sm font-bold mb-1">Price: {price}</p>

        {/* Star Rating */}
        <p className="text-orange-500 text-sm">
          <span className="text-lg">&#9733;&#9733;&#9733;&#9734;&#9734;</span>
          <span className="text-gray-600 ml-2">{reviews}</span>
        </p>
      </div>
    </div>
  );
};

export default ChildComponent;
