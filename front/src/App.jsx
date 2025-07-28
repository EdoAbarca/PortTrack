import { useState } from 'react'

const services = [
  { name: 'Boat', url: 'http://localhost:8081/boat' },
  { name: 'Load', url: 'http://localhost:8082/load' },
  { name: 'Route', url: 'http://localhost:8083/route' },
  { name: 'Staff', url: 'http://localhost:8084/staff' },
  { name: 'Tracking', url: 'http://localhost:8085/tracking' },
]

function App() {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleCall = async (service) => {
    setLoading(true)
    setError(null)
    setResponse(null)
    try {
      const res = await fetch(service.url)
      if (!res.ok) throw new Error(`Error: ${res.status}`)
      const text = await res.text()
      setResponse({ service: service.name, text })
    } catch (err) {
      setError(`Failed to call ${service.name}: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-8 text-blue-700">PortTrack</h1>
      <div className="flex flex-wrap gap-4 mb-8">
        {services.map((service) => (
          <button
            key={service.name}
            onClick={() => handleCall(service)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold"
            disabled={loading}
          >
            Call {service.name}
          </button>
        ))}
      </div>
      <div className="w-full max-w-xl">
        {loading && (
          <div className="p-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded mb-4">
            Loading...
          </div>
        )}
        {error && (
          <div className="p-6 bg-red-100 border-l-4 border-red-500 text-red-700 rounded mb-4">
            {error}
          </div>
        )}
        {response && (
          <div className="p-6 bg-green-100 border-l-4 border-green-500 text-green-700 rounded mb-4">
            <div className="font-bold mb-2">{response.service} Service Response:</div>
            <pre className="whitespace-pre-wrap">{response.text}</pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
