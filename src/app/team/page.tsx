export default function TeamPage() {
  const teamMembers = [
    { name: 'Dr. Sarah Chen', role: 'Project Lead', expertise: 'Aerospace Engineering' },
    { name: 'Marcus Rodriguez', role: 'Lead Engineer', expertise: 'Autonomous Systems' },
    { name: 'Emily Watson', role: 'Software Developer', expertise: 'AI & Machine Learning' },
    { name: 'James Park', role: 'Hardware Engineer', expertise: 'Propulsion Systems' },
  ]

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Team Helix</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-4"></div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{member.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{member.expertise}</p>
          </div>
        ))}
      </div>
    </div>
  )
}