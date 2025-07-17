export default function KnowledgeBasePage() {
  const categories = [
    { title: 'Technical Documentation', count: 24, icon: '📚' },
    { title: 'Flight Procedures', count: 18, icon: '✈️' },
    { title: 'Weather Analysis', count: 32, icon: '🌤️' },
    { title: 'Safety Protocols', count: 15, icon: '🛡️' },
  ]

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Knowledge Base</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-3xl mb-3">{category.icon}</div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{category.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{category.count} articles</p>
          </div>
        ))}
      </div>
    </div>
  )
}