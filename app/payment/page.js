// app/payment/page.js
export const metadata = {
  title: "Payment | Web Developer KP - Secure Online Payment",
  description:
    "Secure payment gateway for web development services. Pay via Razorpay with all major cards, UPI, and net banking.",
  keywords: "payment, Razorpay, web development payment, online payment India",
  openGraph: {
    title: "Payment - Creative Solutions",
    description: "Secure payment for web development services",
    url: "https://www.web-developer-kp.com/payment",
  },
};

import RazorpayPayment from "../../components/RazorpayPayment";

export default function PaymentPage() {
  return <RazorpayPayment />;
}
