export class WeatherWidget {
  constructor() {
    this.apiKey = null // In a real app, you'd use a weather API
    this.currentWeather = null
  }
  
  async searchWeather(city) {
    // Simulate API call with mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockData = this.generateMockWeatherData(city)
        this.currentWeather = mockData
        resolve(mockData)
      }, 500)
    })
  }
  
  generateMockWeatherData(city) {
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy', 'Snowy', 'Windy']
    const icons = {
      'Sunny': '☀️',
      'Cloudy': '☁️',
      'Rainy': '🌧️',
      'Partly Cloudy': '⛅',
      'Snowy': '❄️',
      'Windy': '💨'
    }
    
    const condition = conditions[Math.floor(Math.random() * conditions.length)]
    
    return {
      location: city,
      temperature: Math.floor(Math.random() * 35) + (-5), // -5 to 30°C
      condition: condition,
      icon: icons[condition],
      humidity: Math.floor(Math.random() * 60) + 30, // 30-90%
      windSpeed: Math.floor(Math.random() * 25) + 5, // 5-30 km/h
      feelsLike: Math.floor(Math.random() * 35) + (-5),
      pressure: Math.floor(Math.random() * 50) + 1000, // 1000-1050 hPa
      visibility: Math.floor(Math.random() * 15) + 5, // 5-20 km
      uvIndex: Math.floor(Math.random() * 11), // 0-10
      timestamp: new Date().toISOString()
    }
  }
  
  formatTemperature(temp, unit = 'C') {
    return `${Math.round(temp)}°${unit}`
  }
  
  formatDate(date = new Date()) {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  
  formatTime(date = new Date()) {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }
  
  getWeatherAdvice(condition, temperature) {
    const advice = {
      'Sunny': temperature > 25 ? 'Perfect weather! Don\'t forget sunscreen.' : 'Beautiful sunny day ahead!',
      'Cloudy': 'Overcast skies, but still a good day to be outside.',
      'Rainy': 'Don\'t forget your umbrella!',
      'Partly Cloudy': 'Mix of sun and clouds - perfect weather!',
      'Snowy': 'Bundle up! Snow is expected.',
      'Windy': 'Hold onto your hat - it\'s windy out there!'
    }
    
    return advice[condition] || 'Have a great day!'
  }
  
  getCurrentWeather() {
    return this.currentWeather
  }
}