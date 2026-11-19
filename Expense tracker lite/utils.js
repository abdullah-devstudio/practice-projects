import{expenseForm, expenseList, totalExpense, expenseChart, expenseTitle, expenseCategory, expenseAmount, expenseDate} from "./ui.js"

export const createExpense = ()=>{
  const itemTitle = expenseTitle.value
  const itemCategory = expenseCategory.value
  const itemAmount = expenseAmount.value
  const itemDate = expenseDate.value

  const item = {
    title : itemTitle,
    category : itemCategory,
    amount : itemAmount,
    date : itemDate
  }

  return item
}

export const addExpense = (item)=>{


  // Creating Elements
  const expenseElement = document.createElement("li")
  expenseElement.classList.add("expense-item")
  
  const expenseListElement = document.createElement("ul")

  const titleElement = document.createElement("li")
  titleElement.classList.add("expense-data")

  const categoryElement = document.createElement("li")
  categoryElement.classList.add("expense-data")

  const amountElement = document.createElement("li")
  amountElement.classList.add("expense-data")

  const dateElement = document.createElement("li")
  dateElement.classList.add("expense-data")

  
  //  Adding Text Content
  titleElement.textContent = item.title
  
  categoryElement.textContent = item.category
  
  amountElement.textContent = item.amount

  dateElement.textContent = item.date


  // Appending
  expenseListElement.append(titleElement, categoryElement, amountElement, dateElement)

  expenseElement.append(expenseListElement)

  expenseList.append(expenseElement)
}


