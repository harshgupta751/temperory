import './style.css'
import { createApp } from './app.js'
import { TaskManager } from './components/TaskManager.js'
import { Calculator } from './components/Calculator.js'
import { WeatherWidget } from './components/WeatherWidget.js'

// Initialize the application
const app = createApp()

// Create component instances
const taskManager = new TaskManager()
const calculator = new Calculator()
const weatherWidget = new WeatherWidget()

// Render the application
app.render()