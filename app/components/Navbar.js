import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      
      {/* Top Heading in Hindi */}
      <div className="text-center bg-sky-700 text-white py-3">
        <h1 className="text-2xl font-bold tracking-wide">क्रिएटिव सॉल्यूशंस</h1>
        <p className="text-sm mt-1 text-sky-100">होस्टिंग ज़िंदगी भर के लिए फ्री</p>
      </div>

      {/* Navigation Menu directly below */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-center">
        <ul className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Our Services</Link></li>
          <li><Link href="/why-us">Why Us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
