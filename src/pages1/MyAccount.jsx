import { useNavigate, useLocation } from "react-router-dom";
import { FaWallet, FaSignOutAlt, FaTrophy, FaUser } from "react-icons/fa";
import { useState } from "react";
import RecentGames from "./RecentGames";

function MyAccount() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user")) || {
    firstName: "Santy",
    lastName: "Santy",
    dob: "2000-02-04",
    gender: "M",
    country: "United States",
    city: "San Francisco",
    phone: "+1 415-796-1693",
    email: "danaGrant11@gmail.com",
  };

  /* ===== Avatar state (NEW – required for profile section only) ===== */
  const [avatar, setAvatar] = useState(
    localStorage.getItem("avatar") || "/assets/images/avatar.png"
  );

  const handleAvatarUpload = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setAvatar(imageUrl);
    localStorage.setItem("avatar", imageUrl);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleAvatarUpload(e.dataTransfer.files[0]);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-white">

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
      <div className="max-w-[1200px] mx-auto px-5 py-10 -mt-20 relative z-10">
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

            {/* BALANCE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BalanceCard title="Available Balance" amount="150.00 SZL" />
              <BalanceCard title="Affiliate Balance" amount="10.00 SZL" />
            </div>

            {/* ================= PROFILE INFO (UPDATED) ================= */}
            <div className="bg-[#2f3147] rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Leaderboard Info</h2>
                <span className="cursor-pointer text-gray-300 hover:text-yellow-400">✎</span>
              </div>

              {/* Avatar Upload */}
              <div className="mb-8">
                <label className="block mb-3 font-medium">Profile Avatar</label>

                <div
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  className="flex items-center gap-6 bg-[#40425c] p-4 rounded-xl border-2 border-dashed border-gray-500 hover:border-yellow-400 transition"
                >
                  <img
                    src="/assets/game-banner-illus-4.webp"
                    alt="profile"
                    className="w-20 h-20 rounded-full object-cover border-2 border-yellow-400"
                  />

                  <div>
                    <p className="text-sm text-gray-300 mb-2">
                      Drag & drop image here or
                    </p>

                    <label className="cursor-pointer inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
                      Upload Image
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) =>
                          handleAvatarUpload(e.target.files[0])
                        }
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Profile Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="First Name" value={user.firstName} />
                <Field label="Last Name" value={user.lastName} />
                <Field label="Date Of Birth" value={user.dob} />
                <Field label="Gender" value={user.gender} />
                <Field label="Country" value={user.country} />
                <Field label="City" value={user.city} />
                <Field label="Phone Number" value={user.phone} />
                <Field label="Email" value={user.email} />
              </div>

              <div className="mt-8 flex justify-between items-center">
                <h3 className="text-xl font-bold">Change Password</h3>
                <span className="cursor-pointer text-gray-300 hover:text-yellow-400">✎</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <RecentGames />
        </div>
      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

const MenuBtn = ({ icon, text, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl transition
      ${
        active
          ? "border border-yellow-400 bg-[#40425c]"
          : "bg-[#40425c] hover:bg-[#4a4c68]"
      }`}
  >
    {icon}
    <span>{text}</span>
  </button>
);

const BalanceCard = ({ title, amount }) => (
  <div className="bg-[#2f3147] rounded-2xl p-6 flex justify-between items-center">
    <div className="flex items-center">
      <div className="w-16 h-16 rounded-full bg-[#4a4c68] flex items-center justify-center">
        <FaWallet className="text-white text-3xl" />
      </div>
      <div className="ml-4">
        <p className="text-green-400 text-2xl font-bold">{amount}</p>
        <p className="text-gray-300">{title}</p>
      </div>
    </div>
    <span className="text-yellow-400 text-2xl">➜</span>
  </div>
);

const Field = ({ label, value }) => (
  <div>
    <label className="block mb-2 font-medium">{label}</label>
    <input
      value={value}
      readOnly
      className="w-full bg-[#40425c] px-4 py-3 rounded-xl text-white"
    />
  </div>
);

export default MyAccount;
