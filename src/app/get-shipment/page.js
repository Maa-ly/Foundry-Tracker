// src/app/get-shipment/page.js
'use client'

import { useState } from 'react'

export default function GetShipment() {
    const [shipmentId, setShipmentId] = useState('')
    const [shipmentData, setShipmentData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSearch = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setShipmentData(null)

        try {
            // Mock fetching shipment data
            // Replace this with actual API call or smart contract interaction
            await new Promise((resolve) => setTimeout(resolve, 1000))

            if (shipmentId === '12345') {
                setShipmentData({
                    id: '12345',
                    sender: 'John Doe',
                    recipient: 'Jane Smith',
                    origin: 'New York, USA',
                    destination: 'London, UK',
                    status: 'In Transit',
                    weight: '10kg',
                    estimatedDelivery: '2024-09-15',
                })
            } else {
                setError('Shipment not found.')
            }
        } catch (err) {
            setError('Error fetching shipment data.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6">Get Shipment Details</h2>
            <form onSubmit={handleSearch} className="mb-6">
                <div className="flex items-center">
                    <input
                        type="text"
                        value={shipmentId}
                        onChange={(e) => setShipmentId(e.target.value)}
                        placeholder="Enter Shipment ID"
                        className="flex-grow p-2 border border-gray-300 rounded-l"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
                    >
                        Search
                    </button>
                </div>
            </form>

            {loading && <p>Loading...</p>}

            {error && <p className="text-red-500">{error}</p>}

            {shipmentData && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Shipment Information</h3>
                    <ul className="space-y-2">
                        <li><strong>ID:</strong> {shipmentData.id}</li>
                        <li><strong>Sender:</strong> {shipmentData.sender}</li>
                        <li><strong>Recipient:</strong> {shipmentData.recipient}</li>
                        <li><strong>Origin:</strong> {shipmentData.origin}</li>
                        <li><strong>Destination:</strong> {shipmentData.destination}</li>
                        <li><strong>Status:</strong> {shipmentData.status}</li>
                        <li><strong>Weight:</strong> {shipmentData.weight}</li>
                        <li><strong>Estimated Delivery:</strong> {shipmentData.estimatedDelivery}</li>
                    </ul>
                </div>
            )}
        </div>
    )
}
