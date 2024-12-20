const ProductCard = ({ image, schoolName, address, city }: any) => {
  return (
    <div className="w-[300px] h-[360px] m-4 rounded-lg shadow-lg border border-gray-700 bg-gray-800 text-white">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={image}
        alt={schoolName}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1 text-blue-400">{schoolName}</h2>
        <p className="text-gray-300 mb-1">{address}</p>
        <p className="text-gray-400">{city}</p>
        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
          View More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
