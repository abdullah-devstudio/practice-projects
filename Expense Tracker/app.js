import{expenseForm, expenseList, totalExpense, expenseChart, expenseTitle, expenseCategory, expenseAmount, expenseDate} from "./ui.js"

import{addExpense, createExpense, checkStatus} from "./utils.js"

const list = []
const totalMessage = document.querySelector("#total-message")

const calculateTotal = ()=>{
  const calculateTotalExpense = list.reduce((total, itemAmount)=>{
  total += itemAmount.amount
  return total
},0)

  const totalExpenseCalculated = calculateTotalExpense

totalMessage.textContent = `Total Expense ${totalExpenseCalculated}`
}

checkStatus()
expenseForm.addEventListener("submit",(e)=>{
  e.preventDefault()
  const currentItem = createExpense()
  
  list.push(currentItem)
  addExpense(currentItem)
  calculateTotal()
  checkStatus()
  expenseForm.reset()
})