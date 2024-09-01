// src/app/create/page.js
export default function CreateShipment() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Create a Shipment</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Shipment ID</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter shipment ID"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Recipient Address</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter recipient address"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Shipment Details</label>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter shipment details"
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Create Shipment
                </button>
            </form>
        </div>
    )
}
