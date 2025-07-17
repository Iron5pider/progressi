export default function FlightDataPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Flight Data</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Flight History</h2>
          <div className="space-y-3">
            {[
              { id: 'FL-2024-001', date: '2024-01-15', duration: '4h 32m', maxAlt: '35,000 ft' },
              { id: 'FL-2024-002', date: '2024-01-18', duration: '6h 15m', maxAlt: '38,500 ft' },
              { id: 'FL-2024-003', date: '2024-01-22', duration: '5h 48m', maxAlt: '36,200 ft' },
            ].map((flight, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{flight.id}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{flight.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Duration: {flight.duration}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Max Alt: {flight.maxAlt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600 dark:text-gray-400">Energy Efficiency</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">87%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{width: '87%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}