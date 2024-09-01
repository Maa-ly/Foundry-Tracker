// src/app/layout.js
import './globals.css'

export const metadata = {
  title: 'Shipment Tracker',
  description: 'Track and manage shipments seamlessly',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">Shipment Tracker</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:text-blue-200">Home</a></li>
                <li><a href="/create" className="hover:text-blue-200">Create Shipment</a></li>
                <li><a href="/get-shipment" className="hover:text-blue-200">Get Shipment</a></li>
                <li><a href="/start-shipment" className="hover:text-blue-200">Start Shipment</a></li>
                <li><a href="/shipment-count" className="hover:text-blue-200">Shipment Count</a></li>
                <li><a href="/profile" className="hover:text-blue-200">User Profile</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto flex-grow px-4 py-8">
          {children}
        </main>
        <footer className="bg-blue-600 text-white py-4">
          <div className="container mx-auto text-center">
            &copy; {new Date().getFullYear()} Shipment Tracker. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
