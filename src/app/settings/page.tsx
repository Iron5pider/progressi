export default function SettingsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Settings</h1>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">System Configuration</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">API Configuration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Configure external API connections</p>
            </div>
            <button className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
              Configure
            </button>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Data Export</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Export system data and logs</p>
            </div>
            <button className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
              Export
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}