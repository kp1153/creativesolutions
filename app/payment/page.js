"use client";

import { useState, useEffect, Suspense } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";

function PaymentForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [software, setSoftware] = useState("hardware");
  const [softwareName, setSoftwareName] = useState("");
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [plansLoading, setPlansLoading] = useState(true);

  useEffect(() => {
    const sw = searchParams.get("software") || "hardware";
    const email = searchParams.get("email") || "";
    setSoftware(sw);
    if (email) setForm((f) => ({ ...f, email }));
  }, [searchParams]);

  useEffect(() => {
    if (!software) return;
    setPlansLoading(true);
    fetch(`/api/plans?software=${software}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          setPlans(data.plans);
          setSelectedPlan(data.plans[0]);
          setSoftwareName(data.softwareName);
        }
      })
      .finally(() => setPlansLoading(false));
  }, [software]);

  async function handlePayment() {
    if (!form.name || !form.phone) {
      alert("नाम और फोन नंबर जरूरी है");
      return;
    }
    if (!selectedPlan) return;

    setLoading(true);

    try {
      const orderRes = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: selectedPlan.amount,
          plan: selectedPlan.label,
          software,
        }),
      });

      const order = await orderRes.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: softwareName,
        description: selectedPlan.label,
        order_id: order.id,
        handler: async function (response) {
          const verifyRes = await fetch("/api/razorpay/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...response,
              name: form.name,
              email: form.email,
              phone: form.phone,
              plan: selectedPlan.label,
              software,
            }),
          });

          const data = await verifyRes.json();
          if (data.success) {
            alert("Payment successful!");
            window.location.href = data.redirectUrl;
          } else {
            alert("Something went wrong. Please WhatsApp us.");
          }
        },
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
        theme: { color: "#1d4ed8" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (e) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            Payment
          </h1>
          {softwareName && (
            <p className="text-center text-sm text-gray-500 mb-6">{softwareName}</p>
          )}

          {plansLoading ? (
            <p className="text-center text-gray-400 text-sm mb-6">Loading plans...</p>
          ) : (
            <div className="flex gap-3 mb-6">
              {plans.map((p) => (
                <button
                  key={p.plan_key}
                  onClick={() => setSelectedPlan(p)}
                  className={`flex-1 py-3 rounded-xl font-semibold text-sm border-2 transition ${selectedPlan?.plan_key === p.plan_key ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600"}`}
                >
                  {p.label}
                  <br />
                  <span className="text-lg font-bold">₹{p.amount}</span>
                </button>
              ))}
            </div>
          )}

          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
            />
            <input
              type="tel"
              placeholder="Phone *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
            />
          </div>

          <button
            onClick={handlePayment}
            disabled={loading || plansLoading || !selectedPlan}
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Processing..." : `₹${selectedPlan?.amount || ""} — Pay Now`}
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            Need help?{" "}
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">
              WhatsApp us
            </a>
          </p>
        </div>
      </main>
    </>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-400">Loading...</div>}>
      <PaymentForm />
    </Suspense>
  );
}