import { useState } from "react";

export default function Walletdata() {
  const [tab, setTab] = useState("deposit");
  const [amount, setAmount] = useState("20.00");
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState(20);

  const presets = [10, 20, 30, 40, 50];

  const methods = [
    { id: 1, img: "/assets/momo.webp" },
    { id: 2, img: "/assets/mpesa.png" },
    { id: 3, img: "/assets/Flutterwave.webp" },
    { id: 4, img: "/assets/Paystack.webp" },
    { id: 5, img: "/assets/mtn.webp" },
  ];

  const transactions = [
    {
      id: 1,
      date: "2024-01-07 16-33-53",
      type: "Deposit",
      currency: "BTC",
      amount: "0.005210",
    },
    {
      id: 2,
      date: "2024-01-07 16-33-53",
      type: "Withdrawal",
      currency: "BTC",
      amount: "0.005210",
    },
    {
      id: 3,
      date: "2024-01-07 16-33-53",
      type: "Deposit",
      currency: "BTC",
      amount: "0.005210",
    },
    {
      id: 4,
      date: "2024-01-07 16-33-53",
      type: "Withdrawal",
      currency: "BTC",
      amount: "0.005210",
    },
    {
      id: 5,
      date: "2024-01-07 16-33-53",
      type: "Referral",
      currency: "-",
      amount: "0.005210",
    },
  ];

  return (
    <div className="bg-[#2f3147] rounded-2xl p-6 text-white">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6">Wallet</h1>

      {/* TABS */}
      <div className="flex gap-8 mb-6 font-semibold">
        {["deposit", "withdraw", "history"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`pb-2 ${
              tab === t
                ? "border-b-2 border-yellow-400"
                : "text-gray-300"
            }`}
          >
            {t === "deposit"
              ? "Deposit"
              : t === "withdraw"
              ? "Withdraw"
              : "Transaction History"}
          </button>
        ))}
      </div>

      {/* BALANCE */}
      <div className="bg-[#47465b] rounded-xl p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-yellow-400 font-bold">Balance</span>
          <div className="flex items-center gap-3">
            <span className="text-green-400 font-bold">150.00</span>
            <span>SZL</span>
          </div>
        </div>

        {/* PAYMENT METHODS */}
        <div className="flex gap-4">
          {methods.map((m, i) => (
            <div
              key={m.id}
              className={`bg-white rounded-lg w-24 h-14 flex items-center justify-center
              ${i === 0 ? "ring-2 ring-yellow-400" : ""}`}
            >
              <img src={m.img} className="h-8 object-contain" alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* ================== DEPOSIT / WITHDRAW ================== */}
      {(tab === "deposit" || tab === "withdraw") && (
        <>
          <h3 className="font-bold mb-2">Neteller</h3>
          <p className="text-sm text-gray-300 mb-4">
            Deposit Sum{" "}
            <span className="text-gray-400">
              Instant | Min: 5 • Max: 6,000
            </span>
          </p>

          {/* PRESETS */}
          <div className="flex gap-4 mb-4">
            {presets.map((p) => (
              <button
                key={p}
                onClick={() => {
                  setSelected(p);
                  setAmount(p.toFixed(2));
                }}
                className={`px-6 py-3 rounded-xl font-bold ${
                  selected === p
                    ? "bg-yellow-400 text-black"
                    : "bg-[#47465b]"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* AMOUNT */}
          <label className="block mb-2 font-medium">
            {tab === "withdraw" ? "Withdraw Amount" : "Deposit Amount"}
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-[#40425c] px-4 py-3 rounded-xl mb-4"
          />

          {/* EMAIL */}
          <label className="block mb-2 font-medium">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter neteller email address"
            className="w-full bg-[#40425c] px-4 py-3 rounded-xl mb-6 placeholder:text-gray-400"
          />

          <button className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl">
            {tab === "withdraw" ? "Withdraw" : "Deposit"}
          </button>
        </>
      )}

      {/* ================== TRANSACTION HISTORY ================== */}
      {tab === "history" && (
        <>
          {/* FILTERS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 items-end">
            <div>
              <label className="block mb-2">Month</label>
              <input
                type="month"
                className="w-full bg-[#40425c] px-4 py-3 rounded-xl"
              />
            </div>

            <div>
              <label className="block mb-2">Type</label>
              <select className="w-full bg-[#40425c] px-4 py-3 rounded-xl">
                <option>All</option>
                <option>Deposit</option>
                <option>Withdrawal</option>
                <option>Referral</option>
              </select>
            </div>

            <div>
              <label className="block mb-2">Currency</label>
              <select className="w-full bg-[#40425c] px-4 py-3 rounded-xl">
                <option>All</option>
                <option>BTC</option>
                <option>SZL</option>
              </select>
            </div>

            <button className="bg-yellow-400 text-black font-bold py-3 rounded-xl">
              Filter
            </button>
          </div>

          {/* TABLE */}
          <div className="bg-[#47465b] rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#5b586f]">
                <tr>
                  <th className="px-6 py-4 text-left">Date/Time</th>
                  <th className="px-6 py-4 text-left">Type</th>
                  <th className="px-6 py-4 text-left">Currency</th>
                  <th className="px-6 py-4 text-right">Amount</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((tx) => (
                  <tr
                    key={tx.id}
                    className="border-b border-[#5b586f]"
                  >
                    <td className="px-6 py-4">{tx.date}</td>
                    <td className="px-6 py-4">{tx.type}</td>
                    <td className="px-6 py-4">{tx.currency}</td>
                    <td className="px-6 py-4 text-right">
                      {tx.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
