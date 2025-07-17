'use client'

import { Cloud, Droplets, Wind, Thermometer } from 'lucide-react'

export default function WeatherPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Weather Analysis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Temperature', value: '72°F', icon: Thermometer, trend: '+2°' },
          { label: 'Humidity', value: '45%', icon: Droplets, trend: '-5%' },
          { label: 'Wind Speed', value: '12 mph', icon: Wind, trend: 'Stable' },
          { label: 'Cloud Cover', value: '25%', icon: Cloud, trend: 'Clearing' },
        ].map((metric, index) => {
          const Icon = metric.icon
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-3">
                <Icon className="h-8 w-8 text-gray-400" />
                <span className="text-sm text-gray-500">{metric.trend}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</p>
            </div>
          )
        })}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weather Patterns</h2>
        <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Weather visualization would go here</p>
        </div>
      </div>
    </div>
  )
}