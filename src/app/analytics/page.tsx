export default function AnalyticsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Analytics & Insights</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mission Success Rate</h2>
          <div className="text-center py-8">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">94.8%</div>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Last 30 days</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Data Collection Efficiency</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Temperature Readings</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">98.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Pressure Data</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">96.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Wind Measurements</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">93.8%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Trends</h2>
        <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Performance chart visualization would go here</p>
        </div>
      </div>
    </div>
  )
}