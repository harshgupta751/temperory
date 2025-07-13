export function createApp() {
  const appElement = document.querySelector('#app')
  
  return {
    render() {
      appElement.innerHTML = `
        <div class="app-container">
          <header class="app-header">
            <h1 class="app-title">
              <span class="title-icon">🚀</span>
              Demo Application
            </h1>
            <p class="app-subtitle">A modern JavaScript application showcase</p>
          </header>
          
          <nav class="app-nav">
            <button class="nav-btn active" data-tab="dashboard">
              <span class="nav-icon">📊</span>
              Dashboard
            </button>
            <button class="nav-btn" data-tab="tasks">
              <span class="nav-icon">✅</span>
              Tasks
            </button>
            <button class="nav-btn" data-tab="calculator">
              <span class="nav-icon">🧮</span>
              Calculator
            </button>
            <button class="nav-btn" data-tab="weather">
              <span class="nav-icon">🌤️</span>
              Weather
            </button>
          </nav>
          
          <main class="app-main">
            <div id="dashboard" class="tab-content active">
              ${this.renderDashboard()}
            </div>
            <div id="tasks" class="tab-content">
              ${this.renderTaskManager()}
            </div>
            <div id="calculator" class="tab-content">
              ${this.renderCalculator()}
            </div>
            <div id="weather" class="tab-content">
              ${this.renderWeather()}
            </div>
          </main>
          
          <footer class="app-footer">
            <p>&copy; 2025 Demo Application. Built with vanilla JavaScript.</p>
          </footer>
        </div>
      `
      
      this.attachEventListeners()
      this.initializeComponents()
    },
    
    renderDashboard() {
      return `
        <div class="dashboard">
          <h2 class="section-title">Welcome to the Dashboard</h2>
          <div class="dashboard-grid">
            <div class="dashboard-card">
              <h3>Quick Stats</h3>
              <div class="stats">
                <div class="stat-item">
                  <span class="stat-number">42</span>
                  <span class="stat-label">Total Tasks</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">15</span>
                  <span class="stat-label">Completed</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">27</span>
                  <span class="stat-label">Pending</span>
                </div>
              </div>
            </div>
            
            <div class="dashboard-card">
              <h3>Recent Activity</h3>
              <ul class="activity-list">
                <li class="activity-item">
                  <span class="activity-icon">✅</span>
                  <span>Task "Learn JavaScript" completed</span>
                  <span class="activity-time">2 hours ago</span>
                </li>
                <li class="activity-item">
                  <span class="activity-icon">➕</span>
                  <span>New task "Build demo app" added</span>
                  <span class="activity-time">4 hours ago</span>
                </li>
                <li class="activity-item">
                  <span class="activity-icon">🧮</span>
                  <span>Calculator used for budget planning</span>
                  <span class="activity-time">1 day ago</span>
                </li>
              </ul>
            </div>
            
            <div class="dashboard-card">
              <h3>Quick Actions</h3>
              <div class="quick-actions">
                <button class="action-btn" onclick="window.app.switchTab('tasks')">
                  <span class="action-icon">➕</span>
                  Add New Task
                </button>
                <button class="action-btn" onclick="window.app.switchTab('calculator')">
                  <span class="action-icon">🧮</span>
                  Open Calculator
                </button>
                <button class="action-btn" onclick="window.app.switchTab('weather')">
                  <span class="action-icon">🌤️</span>
                  Check Weather
                </button>
              </div>
            </div>
          </div>
        </div>
      `
    },
    
    renderTaskManager() {
      return `
        <div class="task-manager">
          <h2 class="section-title">Task Manager</h2>
          <div class="task-input-section">
            <div class="input-group">
              <input type="text" id="taskInput" placeholder="Enter a new task..." class="task-input">
              <button id="addTaskBtn" class="add-btn">
                <span class="btn-icon">➕</span>
                Add Task
              </button>
            </div>
          </div>
          <div class="task-filters">
            <button class="filter-btn active" data-filter="all">All Tasks</button>
            <button class="filter-btn" data-filter="pending">Pending</button>
            <button class="filter-btn" data-filter="completed">Completed</button>
          </div>
          <div id="taskList" class="task-list">
            <!-- Tasks will be rendered here -->
          </div>
        </div>
      `
    },
    
    renderCalculator() {
      return `
        <div class="calculator">
          <h2 class="section-title">Calculator</h2>
          <div class="calculator-container">
            <div class="calculator-display">
              <input type="text" id="calcDisplay" class="calc-display" readonly value="0">
            </div>
            <div class="calculator-buttons">
              <button class="calc-btn clear" data-action="clear">C</button>
              <button class="calc-btn clear" data-action="clearEntry">CE</button>
              <button class="calc-btn operator" data-action="backspace">⌫</button>
              <button class="calc-btn operator" data-operation="/">/</button>
              
              <button class="calc-btn number" data-number="7">7</button>
              <button class="calc-btn number" data-number="8">8</button>
              <button class="calc-btn number" data-number="9">9</button>
              <button class="calc-btn operator" data-operation="*">×</button>
              
              <button class="calc-btn number" data-number="4">4</button>
              <button class="calc-btn number" data-number="5">5</button>
              <button class="calc-btn number" data-number="6">6</button>
              <button class="calc-btn operator" data-operation="-">-</button>
              
              <button class="calc-btn number" data-number="1">1</button>
              <button class="calc-btn number" data-number="2">2</button>
              <button class="calc-btn number" data-number="3">3</button>
              <button class="calc-btn operator" data-operation="+">+</button>
              
              <button class="calc-btn number zero" data-number="0">0</button>
              <button class="calc-btn number" data-action="decimal">.</button>
              <button class="calc-btn equals" data-action="equals">=</button>
            </div>
          </div>
        </div>
      `
    },
    
    renderWeather() {
      return `
        <div class="weather-widget">
          <h2 class="section-title">Weather Information</h2>
          <div class="weather-container">
            <div class="weather-search">
              <div class="input-group">
                <input type="text" id="cityInput" placeholder="Enter city name..." class="city-input">
                <button id="searchWeatherBtn" class="search-btn">
                  <span class="btn-icon">🔍</span>
                  Search
                </button>
              </div>
            </div>
            
            <div id="weatherDisplay" class="weather-display">
              <div class="weather-card">
                <div class="weather-location">
                  <h3>San Francisco, CA</h3>
                  <p class="weather-date">${new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
                
                <div class="weather-main">
                  <div class="weather-icon">☀️</div>
                  <div class="weather-temp">
                    <span class="temp-value">22</span>
                    <span class="temp-unit">°C</span>
                  </div>
                </div>
                
                <div class="weather-details">
                  <div class="weather-detail">
                    <span class="detail-label">Condition</span>
                    <span class="detail-value">Sunny</span>
                  </div>
                  <div class="weather-detail">
                    <span class="detail-label">Humidity</span>
                    <span class="detail-value">65%</span>
                  </div>
                  <div class="weather-detail">
                    <span class="detail-label">Wind Speed</span>
                    <span class="detail-value">12 km/h</span>
                  </div>
                  <div class="weather-detail">
                    <span class="detail-label">Feels Like</span>
                    <span class="detail-value">25°C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    
    attachEventListeners() {
      // Tab navigation
      const navButtons = document.querySelectorAll('.nav-btn')
      navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const tabName = e.currentTarget.dataset.tab
          this.switchTab(tabName)
        })
      })
      
      // Make switchTab available globally for quick actions
      window.app = { switchTab: this.switchTab.bind(this) }
    },
    
    switchTab(tabName) {
      // Update nav buttons
      document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active')
      })
      document.querySelector(`[data-tab="${tabName}"]`).classList.add('active')
      
      // Update tab content
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active')
      })
      document.getElementById(tabName).classList.add('active')
      
      // Reinitialize components if needed
      this.initializeComponents()
    },
    
    initializeComponents() {
      // Initialize task manager if on tasks tab
      if (document.getElementById('tasks').classList.contains('active')) {
        this.initTaskManager()
      }
      
      // Initialize calculator if on calculator tab
      if (document.getElementById('calculator').classList.contains('active')) {
        this.initCalculator()
      }
      
      // Initialize weather widget if on weather tab
      if (document.getElementById('weather').classList.contains('active')) {
        this.initWeatherWidget()
      }
    },
    
    initTaskManager() {
      const taskInput = document.getElementById('taskInput')
      const addTaskBtn = document.getElementById('addTaskBtn')
      const taskList = document.getElementById('taskList')
      const filterBtns = document.querySelectorAll('.filter-btn')
      
      let tasks = JSON.parse(localStorage.getItem('tasks')) || []
      let currentFilter = 'all'
      
      function renderTasks() {
        const filteredTasks = tasks.filter(task => {
          if (currentFilter === 'all') return true
          if (currentFilter === 'completed') return task.completed
          if (currentFilter === 'pending') return !task.completed
        })
        
        taskList.innerHTML = filteredTasks.length === 0 
          ? '<p class="no-tasks">No tasks found. Add some tasks to get started!</p>'
          : filteredTasks.map(task => `
              <div class="task-item ${task.completed ? 'completed' : ''}">
                <div class="task-content">
                  <input type="checkbox" ${task.completed ? 'checked' : ''} 
                         onchange="toggleTask(${task.id})" class="task-checkbox">
                  <span class="task-text">${task.text}</span>
                </div>
                <div class="task-actions">
                  <button onclick="editTask(${task.id})" class="edit-btn" title="Edit">✏️</button>
                  <button onclick="deleteTask(${task.id})" class="delete-btn" title="Delete">🗑️</button>
                </div>
              </div>
            `).join('')
      }
      
      function addTask() {
        const text = taskInput.value.trim()
        if (text) {
          const newTask = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
          }
          tasks.push(newTask)
          localStorage.setItem('tasks', JSON.stringify(tasks))
          taskInput.value = ''
          renderTasks()
        }
      }
      
      // Global functions for task operations
      window.toggleTask = (id) => {
        tasks = tasks.map(task => 
          task.id === id ? { ...task, completed: !task.completed } : task
        )
        localStorage.setItem('tasks', JSON.stringify(tasks))
        renderTasks()
      }
      
      window.deleteTask = (id) => {
        tasks = tasks.filter(task => task.id !== id)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        renderTasks()
      }
      
      window.editTask = (id) => {
        const task = tasks.find(t => t.id === id)
        const newText = prompt('Edit task:', task.text)
        if (newText && newText.trim()) {
          tasks = tasks.map(t => 
            t.id === id ? { ...t, text: newText.trim() } : t
          )
          localStorage.setItem('tasks', JSON.stringify(tasks))
          renderTasks()
        }
      }
      
      // Event listeners
      addTaskBtn.addEventListener('click', addTask)
      taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask()
      })
      
      filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          filterBtns.forEach(b => b.classList.remove('active'))
          e.target.classList.add('active')
          currentFilter = e.target.dataset.filter
          renderTasks()
        })
      })
      
      // Initial render
      renderTasks()
    },
    
    initCalculator() {
      const display = document.getElementById('calcDisplay')
      const buttons = document.querySelectorAll('.calc-btn')
      
      let currentInput = '0'
      let previousInput = null
      let operation = null
      let waitingForOperand = false
      
      function updateDisplay() {
        display.value = currentInput
      }
      
      function inputNumber(num) {
        if (waitingForOperand) {
          currentInput = num
          waitingForOperand = false
        } else {
          currentInput = currentInput === '0' ? num : currentInput + num
        }
      }
      
      function inputOperation(nextOperation) {
        const inputValue = parseFloat(currentInput)
        
        if (previousInput === null) {
          previousInput = inputValue
        } else if (operation) {
          const currentValue = previousInput || 0
          const newValue = calculate(currentValue, inputValue, operation)
          
          currentInput = String(newValue)
          previousInput = newValue
        }
        
        waitingForOperand = true
        operation = nextOperation
      }
      
      function calculate(firstOperand, secondOperand, operation) {
        switch (operation) {
          case '+':
            return firstOperand + secondOperand
          case '-':
            return firstOperand - secondOperand
          case '*':
            return firstOperand * secondOperand
          case '/':
            return firstOperand / secondOperand
          default:
            return secondOperand
        }
      }
      
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          const target = e.target
          
          if (target.dataset.number) {
            inputNumber(target.dataset.number)
            updateDisplay()
          }
          
          if (target.dataset.operation) {
            inputOperation(target.dataset.operation)
          }
          
          if (target.dataset.action) {
            switch (target.dataset.action) {
              case 'clear':
                currentInput = '0'
                previousInput = null
                operation = null
                waitingForOperand = false
                break
              case 'clearEntry':
                currentInput = '0'
                break
              case 'backspace':
                currentInput = currentInput.slice(0, -1) || '0'
                break
              case 'decimal':
                if (currentInput.indexOf('.') === -1) {
                  inputNumber('.')
                }
                break
              case 'equals':
                const inputValue = parseFloat(currentInput)
                if (previousInput !== null && operation) {
                  const newValue = calculate(previousInput, inputValue, operation)
                  currentInput = String(newValue)
                  previousInput = null
                  operation = null
                  waitingForOperand = true
                }
                break
            }
            updateDisplay()
          }
        })
      })
      
      updateDisplay()
    },
    
    initWeatherWidget() {
      const cityInput = document.getElementById('cityInput')
      const searchBtn = document.getElementById('searchWeatherBtn')
      const weatherDisplay = document.getElementById('weatherDisplay')
      
      function searchWeather() {
        const city = cityInput.value.trim()
        if (city) {
          // Simulate weather API call with mock data
          const mockWeatherData = {
            location: city,
            temperature: Math.floor(Math.random() * 30) + 5,
            condition: ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)],
            humidity: Math.floor(Math.random() * 40) + 40,
            windSpeed: Math.floor(Math.random() * 20) + 5,
            feelsLike: Math.floor(Math.random() * 30) + 5
          }
          
          const weatherIcon = {
            'Sunny': '☀️',
            'Cloudy': '☁️',
            'Rainy': '🌧️',
            'Partly Cloudy': '⛅'
          }
          
          weatherDisplay.innerHTML = `
            <div class="weather-card">
              <div class="weather-location">
                <h3>${mockWeatherData.location}</h3>
                <p class="weather-date">${new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>
              
              <div class="weather-main">
                <div class="weather-icon">${weatherIcon[mockWeatherData.condition]}</div>
                <div class="weather-temp">
                  <span class="temp-value">${mockWeatherData.temperature}</span>
                  <span class="temp-unit">°C</span>
                </div>
              </div>
              
              <div class="weather-details">
                <div class="weather-detail">
                  <span class="detail-label">Condition</span>
                  <span class="detail-value">${mockWeatherData.condition}</span>
                </div>
                <div class="weather-detail">
                  <span class="detail-label">Humidity</span>
                  <span class="detail-value">${mockWeatherData.humidity}%</span>
                </div>
                <div class="weather-detail">
                  <span class="detail-label">Wind Speed</span>
                  <span class="detail-value">${mockWeatherData.windSpeed} km/h</span>
                </div>
                <div class="weather-detail">
                  <span class="detail-label">Feels Like</span>
                  <span class="detail-value">${mockWeatherData.feelsLike}°C</span>
                </div>
              </div>
            </div>
          `
          
          cityInput.value = ''
        }
      }
      
      searchBtn.addEventListener('click', searchWeather)
      cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchWeather()
      })
    }
  }
}