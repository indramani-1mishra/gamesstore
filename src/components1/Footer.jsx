import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  // ✅ login check
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <footer className="bg-[#1a1d29] text-white pt-32 pb-8  ">

      {/* 🔥 SHOW ONLY WHEN USER IS NOT LOGGED IN */}
      {!isLoggedIn && (
        <div className="">
          <div
            className="text-white relative bottom-[106px] rounded-2xl bg-cover bg-center w-full max-w-6xl mx-auto bg-no-repeat overflow-hidden shadow-2xl mt-5"
            style={{ backgroundImage: "url('./assets/home4.webp')" }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 px-8 lg:px-12 py-12 lg:py-16">
              <div className="text-center lg:text-left max-w-xl">
                <h2 className="text-3xl font-bold mb-4">
                  Ready To Start Your Journey?
                </h2>
                <p className="text-lg text-gray-200">
                  Stop Scrolling, Start Playing. Create your account now and earn 500 coins
                </p>
              </div>

              <button
                onClick={() => navigate('/signin')}
                className="bg-yellow-400 hover:bg-yellow-500 px-10 py-4 font-bold text-lg text-black rounded-xl transition-all duration-300 shadow-lg hover:scale-105"
              >
                Login Now!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= FOOTER MAIN ================= */}
      <div className="max-w-6xl mx-auto px-2">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img src="./assets/logo.webp" className="h-12 lg:h-14" alt="Logo" />

            <ul className="flex items-center space-x-8 font-semibold cursor-pointer">
              <li onClick={() => navigate('/')} className="hover:text-yellow-400">Home</li>
              <li onClick={() => navigate('/games')} className="hover:text-yellow-400">Games</li>
              <li onClick={() => navigate('/trailer')} className="hover:text-yellow-400">Trailer</li>
              <li onClick={() => navigate('/blog')} className="hover:text-yellow-400">Blogs</li>
              <li onClick={() => navigate('/video')} className="hover:text-yellow-400">Videos</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaYoutube />} red />
            <SocialIcon icon={<FaInstagram />} pink />
            <SocialIcon icon={<FaLinkedinIn />} blue />
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            Copyright © thegame io | Designed by{" "}
            <span className="text-yellow-400">thegameio</span>
          </p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

/* 🔁 SOCIAL ICON */
const SocialIcon = ({ icon }) => (
  <div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-yellow-500 transition cursor-pointer">
    {icon}
  </div>
);

export default Footer;
