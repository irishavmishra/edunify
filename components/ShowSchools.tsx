import ProductCard from "./ProductCard";

const ShowSchools = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="flex flex-wrap justify-center max-w-[120rem] mx-auto px-8">
        {[...Array(9)].map((_, idx) => (
          <ProductCard
            key={idx}
            image="https://via.placeholder.com/400x300"
            schoolName={`Lincoln High School ${idx + 1}`}
            address="456 Oak Avenue"
            city="Lincoln"
          />
        ))}
      </div>
    </div>
  );
};

export default ShowSchools;
