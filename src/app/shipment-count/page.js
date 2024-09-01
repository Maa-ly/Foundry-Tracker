// src/app/shipment-count/page.js
'use client'

import { useEffect, useState } from 'react'

export default function ShipmentCount() {
    const [totalShipments, setTotalShipments] = useState(null)
    const [inTransit, setInTransit] = useState(null)
    const [delivered, setDelivered] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchShipmentStats = async () => {
            setLoading(true)
            setError('')

            try {
                // Mock fetching shipment stats
                // Replace this with actual API call or smart contract interaction
                await new Promise((resolve) => setTimeout(resolve, 1000))

                setTotalShipments(150)
                setInTransit(40)
                setDelivered(110)
            } catch (err) {
                setError('Failed to fetch shipment statistics.')
            } finally {
                setLoading(false)
            }
        }

        fetchShipmentStats()
    }, [])

    return (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Shipment Statistics</h2>

            {loading && <p>Loading statistics...</p>}

            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && (
                <div className="grid grid-cols-1 gap-6">
                    <div className="p-4 bg-blue-100 rounded">
                        <h3 className="text-xl font-semibold">Total Shipments</h3>
                        <p className="text-3xl font-bold mt-2">{totalShipments}</p>
                    </div>

                    <div className="p-4 bg-green-100 rounded">
                        <h3 className="text-xl font-semibold">Delivered Shipments</h3>
                        <p className="text-3xl font-bold mt-2">{delivered}</p>
                    </div>

                    <div className="p-4 bg-yellow-100 rounded">
                        <h3 className="text-xl font-semibold">Shipments In Transit</h3>
                        <p className="text-3xl font-bold mt-2">{inTransit}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
