import { 
  BarChart3, 
  Cloud, 
  Plane, 
  TrendingUp,
  Battery,
  Wind,
  Navigation,
  Activity
} from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Mission Control Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Real-time monitoring and control for Helix Aterna weather data collection
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            label: 'Active Flights',
            value: '3',
            change: '+2 from yesterday',
            icon: Plane,
            color: 'from-blue-500 to-blue-600',
          },
          {
            label: 'Data Points Collected',
            value: '12.4K',
            change: '+18% this week',
            icon: BarChart3,
            color: 'from-purple-500 to-purple-600',
          },
          {
            label: 'Current Altitude',
            value: '24,500 ft',
            change: 'Ascending',
            icon: TrendingUp,
            color: 'from-green-500 to-green-600',
          },
          {
            label: 'Weather Conditions',
            value: 'Optimal',
            change: 'Clear skies',
            icon: Cloud,
            color: 'from-orange-500 to-orange-600',
          },
        ].map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {stat.label}
              </p>
            </div>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Flight Status */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Active Flight Status
          </h2>
          <div className="space-y-4">
            {[
              { id: 'HX-001', status: 'In Flight', altitude: '32,000 ft', battery: 87, location: '40.7128°N, 74.0060°W' },
              { id: 'HX-002', status: 'Regenerating', altitude: '18,500 ft', battery: 45, location: '41.8781°N, 87.6298°W' },
              { id: 'HX-003', status: 'In Flight', altitude: '28,000 ft', battery: 92, location: '34.0522°N, 118.2437°W' },
            ].map((flight) => (
              <div
                key={flight.id}
                className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Plane className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full ${
                      flight.status === 'In Flight' ? 'bg-green-500' : 'bg-yellow-500'
                    } animate-pulse`}></div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{flight.id}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{flight.status}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Altitude</p>
                    <p className="font-medium text-gray-900 dark:text-white">{flight.altitude}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Battery</p>
                    <div className="flex items-center space-x-2">
                      <Battery className="h-4 w-4 text-gray-400" />
                      <p className="font-medium text-gray-900 dark:text-white">{flight.battery}%</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium text-gray-900 dark:text-white">{flight.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Data */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Real-time Weather Data
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Wind className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Wind Speed</span>
              </div>
              <span className="font-medium text-gray-900 dark:text-white">24 mph NW</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Cloud className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Cloud Cover</span>
              </div>
              <span className="font-medium text-gray-900 dark:text-white">15%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Navigation className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Pressure</span>
              </div>
              <span className="font-medium text-gray-900 dark:text-white">1013 hPa</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Activity className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Turbulence</span>
              </div>
              <span className="font-medium text-gray-900 dark:text-white">Low</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
            <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
              Next Data Collection Window
            </h3>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              2h 34m
            </p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          {[
            { time: '2 minutes ago', event: 'HX-001 reached target altitude', type: 'success' },
            { time: '15 minutes ago', event: 'Weather data packet transmitted', type: 'info' },
            { time: '1 hour ago', event: 'HX-002 entered regeneration mode', type: 'warning' },
            { time: '2 hours ago', event: 'New flight plan uploaded for HX-003', type: 'info' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'success' ? 'bg-green-500' :
                activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
              }`}></div>
              <span className="text-sm text-gray-500 dark:text-gray-400 min-w-[100px]">
                {activity.time}
              </span>
              <span className="text-sm text-gray-900 dark:text-white">
                {activity.event}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}