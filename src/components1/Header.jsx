import { BiSearch, BiMenu, BiX } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const profileRef = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ sync login state whenever route changes
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, [location.pathname]);

  // ✅ login hone ke baad /games se auto /play redirect
  useEffect(() => {
    if (isLoggedIn && location.pathname === "/games") {
      navigate("/play");
    }
  }, [isLoggedIn, location.pathname, navigate]);

  // ✅ close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const getNavLinkClass = (path) =>
    `cursor-pointer transition-colors duration-200 capitalize font-semibold text-[18px] ${
      isActive(path)
        ? "text-yellow-400"
        : "text-white hover:text-yellow-400"
    }`;

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setShowProfileMenu(false);
    navigate("/signin");
  };

  return (
    <header className="relative w-full z-[999] bg-gray-900 shadow-lg sticky top-0">
      <nav className="container mx-auto px-10 py-5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img src="/assets/logo.webp" className="h-10" alt="logo" />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-9">
            <li onClick={() => navigate("/")} className={getNavLinkClass("/")}>
              Home
            </li>

            {!isLoggedIn ? (
              <li
                onClick={() => navigate("/games")}
                className={getNavLinkClass("/games")}
              >
                Games
              </li>
            ) : (
              <li
                onClick={() => navigate("/play")}
                className={getNavLinkClass("/play")}
              >
                Play
              </li>
            )}

            <li
              onClick={() => navigate("/trailer")}
              className={getNavLinkClass("/trailer")}
            >
              Trailer
            </li>

            <li
              onClick={() => navigate("/video")}
              className={getNavLinkClass("/video")}
            >
              Videos
            </li>
          </ul>

          {/* Right Section */}
          <div className="flex items-center space-x-4">

            {/* Search */}
            <div className="hidden md:flex items-center gap-2">
              <div
                className={`flex items-center gap-2 transition-all duration-300 ${
                  showSearch ? "w-80 opacity-100" : "w-0 opacity-0 overflow-hidden"
                }`}
              >
                <input
                  className="w-full p-2 rounded-xl bg-[#3c3c54] text-white"
                  type="search"
                  placeholder="Enter Keyword"
                />
                <button className="px-6 py-2 rounded-xl bg-yellow-400 font-semibold text-[16px] capitalize">
                  Search
                </button>
              </div>

              <button
                onClick={() => setShowSearch(!showSearch)}
                className="text-white hover:text-yellow-400"
              >
                {showSearch ? <BiX size={24} /> : <BiSearch size={24} />}
              </button>
            </div>

            {/* LOGIN / PROFILE */}
            {!isLoggedIn ? (
              <button
                onClick={() => navigate("/signin")}
                className="hidden sm:block capitalize font-semibold text-[18px] text-white hover:text-yellow-400 px-6 py-2"
              >
                Sign In
              </button>
            ) : (
              <div className="relative" ref={profileRef}>
                {/* Avatar */}
                <div
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-400 cursor-pointer"
                >
                  <img
                    src="/assets/game-banner-illus-4.webp"
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* PROFILE DROPDOWN */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-3 w-80 bg-[#3b3b54] rounded-2xl shadow-2xl overflow-hidden p-4">

                    <div className="text-center py-4">
                      <h2 className="text-xl font-bold text-white capitalize">
                        Hello
                      </h2>
                      <p className="text-gray-300 text-sm">+268XXXXXX</p>
                    </div>

                    <div className="mx-0 mt-4 bg-[#50506d] rounded-xl p-4 flex gap-4 px-5 m-4 p-4">
                      <span className="text-green-400 text-2xl">💰</span>
                      <div>
                        <p className="text-green-400 font-bold">SZL 150.00</p>
                        <p className="text-gray-300 text-sm capitalize">
                          Balance
                        </p>
                      </div>
                    </div>

                    <div className="mx-0 mt-0 m-5 bg-[#50506d] rounded-xl p-4 flex justify-between">
                      <div className="flex gap-4">
                        <span className="text-green-400 text-2xl">💵</span>
                        <div>
                          <p className="text-green-400 font-bold">50</p>
                          <p className="text-gray-300 text-sm capitalize">
                            Points
                          </p>
                        </div>
                      </div>
                      <button className="bg-[#6b6b8f] text-white px-3 py-1 rounded-lg text-sm capitalize">
                        Exchange
                      </button>
                    </div>

                    <div
                      className="mx-0 mt-4 rounded-xl p-4 flex justify-between cursor-pointer"
                      onClick={() => {
                        setShowProfileMenu(false);
                        navigate("/myaccount");
                      }}
                    >
                      <span className="text-white flex items-center gap-2 capitalize font-semibold text-[18px]">
                        <FaUser />
                        My Account
                      </span>
                      <span className="text-yellow-400">➜</span>
                    </div>

                    <div className="flex gap-3 mx-4 mt-4">
                      <button
                        onClick={() => navigate("/wallet")}
                        className="flex-1 bg-yellow-400 text-black font-semibold capitalize py-2 rounded-xl"
                      >
                        Deposit
                      </button>
                      <button
                        onClick={() => navigate("/wallet")}
                        className="flex-1 bg-[#6b6b8f] text-white font-semibold capitalize py-2 rounded-xl"
                      >
                        Withdraw
                      </button>
                    </div>

                    <button
                      onClick={handleLogout}
                      className="w-full mt-4 py-4 border-t border-gray-600 text-white flex justify-center gap-2 capitalize font-semibold"
                    >
                      ⎋ Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-yellow-400"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
