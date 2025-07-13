export class Calculator {
  constructor() {
    this.currentInput = '0'
    this.previousInput = null
    this.operation = null
    this.waitingForOperand = false
  }
  
  inputNumber(num) {
    if (this.waitingForOperand) {
      this.currentInput = num
      this.waitingForOperand = false
    } else {
      this.currentInput = this.currentInput === '0' ? num : this.currentInput + num
    }
  }
  
  inputOperation(nextOperation) {
    const inputValue = parseFloat(this.currentInput)
    
    if (this.previousInput === null) {
      this.previousInput = inputValue
    } else if (this.operation) {
      const currentValue = this.previousInput || 0
      const newValue = this.calculate(currentValue, inputValue, this.operation)
      
      this.currentInput = String(newValue)
      this.previousInput = newValue
    }
    
    this.waitingForOperand = true
    this.operation = nextOperation
  }
  
  calculate(firstOperand, secondOperand, operation) {
    switch (operation) {
      case '+':
        return firstOperand + secondOperand
      case '-':
        return firstOperand - secondOperand
      case '*':
        return firstOperand * secondOperand
      case '/':
        return secondOperand !== 0 ? firstOperand / secondOperand : 0
      default:
        return secondOperand
    }
  }
  
  clear() {
    this.currentInput = '0'
    this.previousInput = null
    this.operation = null
    this.waitingForOperand = false
  }
  
  clearEntry() {
    this.currentInput = '0'
  }
  
  backspace() {
    this.currentInput = this.currentInput.slice(0, -1) || '0'
  }
  
  inputDecimal() {
    if (this.currentInput.indexOf('.') === -1) {
      this.inputNumber('.')
    }
  }
  
  equals() {
    const inputValue = parseFloat(this.currentInput)
    if (this.previousInput !== null && this.operation) {
      const newValue = this.calculate(this.previousInput, inputValue, this.operation)
      this.currentInput = String(newValue)
      this.previousInput = null
      this.operation = null
      this.waitingForOperand = true
    }
  }
  
  getCurrentDisplay() {
    return this.currentInput
  }
}