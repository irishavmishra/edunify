interface NavbarProps {
  onToggle: () => void;
  showAddSchool: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggle, showAddSchool }) => {
  return (
    <div className="bg-gray-800 shadow-md">
      <div className="max-w-[120rem] mx-auto px-8 flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-blue-400">EDUNIFY</h1>
        <button
          onClick={onToggle}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          {showAddSchool ? "Show Schools" : "Add School"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
