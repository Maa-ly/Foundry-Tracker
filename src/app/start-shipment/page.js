// src/app/start-shipment/page.js
'use client'

import { useState } from 'react'

export default function StartShipment() {
    const [formData, setFormData] = useState({
        shipmentId: '',
        sender: '',
        recipient: '',
        origin: '',
        destination: '',
        weight: '',
    })

    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSuccessMessage('')
        setErrorMessage('')

        try {
            // Mock sending data to backend or smart contract
            await new Promise((resolve) => setTimeout(resolve, 1000))

            setSuccessMessage(`Shipment ${formData.shipmentId} has been started successfully.`)
            setFormData({
                shipmentId: '',
                sender: '',
                recipient: '',
                origin: '',
                destination: '',
                weight: '',
            })
        } catch (err) {
            setErrorMessage('Failed to start shipment. Please try again.')
        }
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6">Start Shipment</h2>

            {successMessage && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                    {successMessage}
                </div>
            )}

            {errorMessage && (
                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
                    {errorMessage}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Shipment ID</label>
                    <input
                        type="text"
                        name="shipmentId"
                        value={formData.shipmentId}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Sender</label>
                    <input
                        type="text"
                        name="sender"
                        value={formData.sender}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Recipient</label>
                    <input
                        type="text"
                        name="recipient"
                        value={formData.recipient}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Origin</label>
                    <input
                        type="text"
                        name="origin"
                        value={formData.origin}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Destination</label>
                    <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Weight (kg)</label>
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                        min="0"
                        step="0.1"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Start Shipment
                </button>
            </form>
        </div>
    )
}
