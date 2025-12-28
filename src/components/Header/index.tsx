export const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-blue-600">Magic Store</h1>

          <button className="relative px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            Cart (0)
          </button>
        </div>
      </div>
    </header>
  );
};
