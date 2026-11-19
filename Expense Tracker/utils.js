// Importing Variables Ftom Utils.js
import {totalExpense, expenseChart, expenseList, expenseForm, expenseTitle, expenseAmount, expenseCategory, expenseDate} from "ui.js"

// Checking Empty list and Total
export function checkStatus(){
  if(expenseList.children.length === 0){
    const totalMessage = document.createElement("p")
    totalMessage.textContent = "Not Total Yet Add Expense First"
    totalMessage.classList.add("message")

    const expenseMessage = document.createElement("p")
    expenseMessage.textContent = "Not Expense Yet"
    expenseMessage.classList.add("message")

    expenseChart.append(expenseMessage)
    totalExpense.append(totalMessage)
  }

  else{
    createExpense()
  }
}

const list = []

// Create expense function
function createExpense(){
  const itemTitle = expenseTitle.value

  const itemCategory = expenseCategory.value

  const itemAmount = expenseAmount.value

  const itemDate = expenseDate.value

  const item = {
    title : itemTitle,
    amount : itemAmount,
    category : itemCategory,
    date : itemDate
  }
  
  addExpense()

  list.push(item)

// Add Expense Function
  export function addExpense(){
  const categoryItem = document.createElement("li")
  
  const itemList = document.createElement("ul")
  
  const titleElement = document.createElement("li")
  const categoryElement = document.createElement("li")
  const amountElement = document.createElement("li")
  const dateElement = document.createElement("li")

  titleElement.textContent = itemTitle
    
  categoryElement.textContent = itemCategory
    
  amountElement.textContent = itemAmount
    
  dateElement.textContent = itemDate

  itemList.append(titleElement, amountElement, categoryElement, dateElement)
    
  categoryItem.append(itemList)

  expenseList.append(categoryItem)
  }
  
}

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createExpense();
  expenseForm.reset();
});