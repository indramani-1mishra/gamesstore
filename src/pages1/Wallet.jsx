import { useNavigate, useLocation } from "react-router-dom";
import { FaWallet, FaSignOutAlt, FaTrophy, FaUser } from "react-icons/fa";
import RecentGames from "./RecentGames";
import Walletdata from "./Walletdata";

function Wallet() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-white overflow-y-auto">

      {/* ================= BANNER ================= */}
       <div
        className="relative w-full h-[240px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/account-banner-bg.png')" }}
      >
       

        {/* Banner Content */}
        <div className="relative h-full max-w-[1200px] mx-auto mb-25" style={{ padding: '30px 40px' }}>
          <div className="flex justify-between items-end h-full pb-6">
            <h1 className="text-2xl font-bold">
              Hello, Welcome!
            </h1>
            <p className="text-gray-300 text-sm">
              Last session start: 1 Dec 2025, 09:26
            </p>
          </div>
        </div>
      </div>

      {/* ================= PAGE CONTENT ================= */}
      <div className="max-w-[1200px] mx-auto px-5 py-10 -mt-20 relative z-10 overflow-visible">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* ================= LEFT SIDEBAR ================= */}
          <div className="space-y-6">

            <div className="bg-[#2f3147] rounded-2xl p-6 space-y-4">

              <MenuBtn
                icon={<FaUser />}
                text="Dashboard"
                active={isActive("/myaccount")}
                onClick={() => navigate("/myaccount")}
              />

              <MenuBtn
                icon={<FaWallet />}
                text="Wallet"
                active={isActive("/wallet")}
                onClick={() => navigate("/wallet")}
              />

              <MenuBtn
                icon={<FaTrophy />}
                text="Leaderboard"
                onClick={() => navigate("/leaderboard")}
              />

              <div className="border-t border-gray-600 my-4" />

              <button
                onClick={logout}
                className="w-full flex items-center justify-center gap-2 bg-[#50506d] py-3 rounded-xl hover:bg-[#5d5f7a] transition"
              >
                <FaSignOutAlt /> Signout
              </button>
            </div>

            {/* NEED HELP */}
            <div className="bg-[#3b3d57] rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#4a4c68] flex items-center justify-center mb-4">
                <span className="text-yellow-400 text-4xl">💬</span>
              </div>

              <h3 className="text-xl font-bold mb-2">Need Help?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Have questions or concerns regarding your account?
              </p>

              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-xl transition">
                Chat with Us
              </button>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="lg:col-span-3 space-y-6">
            <Walletdata />
          </div>

        </div>

        {/* ================= RECENT GAMES ================= */}
        <div className="mt-12">
          <RecentGames />
        </div>
      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENT ================= */

const MenuBtn = ({ icon, text, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl transition
      ${active
        ? "border border-yellow-400 bg-[#40425c]"
        : "bg-[#40425c] hover:bg-[#4a4c68]"
      }`}
  >
    {icon}
    <span>{text}</span>
  </button>
);

export default Wallet;
