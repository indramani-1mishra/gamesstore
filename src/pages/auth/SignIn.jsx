import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (!phoneNumber.trim()) {
      alert("Please enter a phone number");
      return;
    }
    setShowOtp(true);
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6) {
      alert("Please enter a valid 6 digit OTP");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Aman",
        avatar: "/assets/images/avatar.png",
      })
    );

    navigate("/games");
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Gameio?",
      answer:
        "Gameio is a competitive gaming platform where you can join duels and tournaments to win real prize money.",
    },
    {
      question: "Is it free to sign up?",
      answer: "Yes, signing up is completely free!",
    },
    {
      question: "Can I create more than one account?",
      answer: "No, only one account per user is allowed to ensure fair play.",
    },
    {
      question: "How old must I be?",
      answer:
        "You must be at least 18 years old to participate in cash tournaments.",
    },
  ];

  const features = [
    {
      icon: "info-icon-1.png",
      title: "Compete Opponent",
      desc: "Find similarly skilled players to compete with on the games you love.",
    },
    {
      icon: "info-icon-2.png",
      title: "Register Yourself",
      desc: "Participate in duels and tournaments to show what you are made of.",
    },
    {
      icon: "info-icon-3.png",
      title: "Win Rewards",
      desc: "Win real money.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ================= HERO / SIGN IN ================= */}
      <div
        className="relative min-h-[600px] md:min-h-[650px] bg-cover bg-center flex items-start"
        style={{ backgroundImage: "url('/assets/images/post-img-6.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* LEFT CONTENT */}
            <div className="space-y-6 order-2 lg:order-1">
              <div>
                <h5 className="text-2xl md:text-4xl font-bold leading-tight whitespace-nowrap mt-2">
                  Competitive Gaming Platform
                </h5>

                <p className="mt-5 text-lg text-gray-200 max-w-xl">
                  Participate in online duels and tournaments for the games you
                  love and start winning big prize money.
                </p>
              </div>

              <div className="space-y-7 mt-8">
                {features.map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                      <img
                        src={`/assets/images/icon/${item.icon}`}
                        alt={item.title}
                        className="w-9 h-9"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-200 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SIGN IN CARD */}
            <div className="order-1 lg:order-2 flex justify-center mt-4 lg:mt-0 px-4">
              <div className="bg-gray-800/95 border border-gray-700 rounded-2xl p-10 w-full max-w-md shadow-2xl">
                <h2 className="text-3xl font-bold text-center mb-8">
                  {showOtp ? "Enter OTP" : "Welcome Back"}
                </h2>

                {!showOtp ? (
                  <>
                    <input
                      type="tel"
                      placeholder="+268 XXXXXXXX"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-700 rounded-lg mb-6 outline-none"
                    />

                    <button
                      onClick={handleSendOtp}
                      className="w-full bg-yellow-400 text-black font-bold py-4 rounded-lg
                                 transition-all duration-300
                                 hover:bg-[#249f22] hover:text-white"
                    >
                      Send OTP
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-center text-gray-300 mb-4">
                      OTP sent to <b>{phoneNumber}</b>
                    </p>
                    <input
                      type="text"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter OTP"
                      className="w-full px-6 py-4 bg-gray-700 rounded-lg mb-6 text-center tracking-widest outline-none"
                    />
                    <button
                      onClick={handleVerifyOtp}
                      className="w-full bg-yellow-400 text-black font-bold py-4 rounded-lg
                                 transition-all duration-300 hover:bg-[#249f22] hover:text-white"
                    >
                      Verify OTP
                    </button>
                    <button
                      onClick={() => setShowOtp(false)}
                      className="block mx-auto text-yellow-400 mt-4 hover:underline"
                    >
                      Change Number
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="bg-gradient-to-b from-[#0b0b1a] to-black pt-24 pb-32">
        <h2 className="text-center text-4xl font-bold mb-16">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 px-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#2f3045] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                    💬
                  </div>
                  <h4 className="text-lg font-semibold">{faq.question}</h4>
                </div>

                <ChevronDown
                  className={`w-6 h-6 transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  openFaq === index ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
