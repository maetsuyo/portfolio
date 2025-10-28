export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-3xl flex justify-center space-x-10">
      <button className="px-6 py-2 rounded transition-colors duration-200 hover:bg-gray-700">
        Home
      </button>
      <button className="px-6 py-2 rounded transition-colors duration-200 hover:bg-gray-700">
        Profile
      </button>
    </footer>
  );
}