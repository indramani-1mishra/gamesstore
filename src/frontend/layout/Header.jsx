import Logo from "@/images/logo.png";
const Header = () => {
  return (
    <header className="w-full bg-[#141529] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
            <img className="" src={Logo} alt="Logo" />
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">Games</a>
          <a href="#" className="hover:text-yellow-400">Trailer</a>
          <a href="#" className="hover:text-yellow-400">Videos</a>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Enter Keyword"
            className="hidden md:block px-3 py-2 rounded bg-[#1f2140] text-sm outline-none"
          />
          <button className="bg-yellow-400 text-black px-4 py-2 rounded text-sm font-semibold">
            Search
          </button>
          <button className="text-sm hover:text-yellow-400">Sign in</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
