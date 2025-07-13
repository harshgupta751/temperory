export class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
    this.currentFilter = 'all'
  }
  
  addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }
    
    this.tasks.push(newTask)
    this.saveTasks()
    return newTask
  }
  
  toggleTask(id) {
    this.tasks = this.tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    this.saveTasks()
  }
  
  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id)
    this.saveTasks()
  }
  
  editTask(id, newText) {
    this.tasks = this.tasks.map(task => 
      task.id === id ? { ...task, text: newText.trim() } : task
    )
    this.saveTasks()
  }
  
  getFilteredTasks() {
    return this.tasks.filter(task => {
      if (this.currentFilter === 'all') return true
      if (this.currentFilter === 'completed') return task.completed
      if (this.currentFilter === 'pending') return !task.completed
      return true
    })
  }
  
  setFilter(filter) {
    this.currentFilter = filter
  }
  
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
  
  getStats() {
    const total = this.tasks.length
    const completed = this.tasks.filter(task => task.completed).length
    const pending = total - completed
    
    return { total, completed, pending }
  }
}