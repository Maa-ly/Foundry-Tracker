// src/app/page.js
export default function HomePage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Welcome to Shipment Tracker</h2>
      <p className="text-gray-700 mb-4">
        Easily create and track your shipments with our smart contract-based platform.
      </p>
      <a href="/create" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Get Started
      </a>
    </div>
  )
}
