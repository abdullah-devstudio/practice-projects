import{expenseForm, expenseList, totalExpense, expenseChart, expenseTitle, expenseCategory, expenseAmount, expenseDate} from "./ui.js"

import{addExpense, createExpense} from "./utils.js"

const list = []

const calculateTotalExpense = list.

expenseForm.addEventListener("submit",(e)=>{
  e.preventDefault()
  const currentItem = createExpense()
  
  list.push(currentItem)
  console.log(list)
  addExpense(currentItem)
  expenseForm.reset()
})