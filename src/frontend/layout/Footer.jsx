import Logo from "@/images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#141529] border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold mb-3">
             <img className="" src={Logo} alt="logo" />
          </h3>
          <p className="text-sm text-white/70">
            Level up your game with exclusive play-to-earn experiences.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Home</li>
            <li>Games</li>
            <li>Blogs</li>
            <li>Videos</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-white/50 py-4 border-t border-white/10">
        © 2025 Gameio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
