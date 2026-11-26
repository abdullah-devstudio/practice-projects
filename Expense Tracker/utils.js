import{expenseForm, expenseList, totalExpense, expenseChart, expenseTitle, expenseCategory, expenseAmount, expenseDate, totalStatus,expenseStatus} from "./ui.js"

export const createExpense = ()=>{
  const itemTitle = expenseTitle.value
  const itemCategory = expenseCategory.value
  const itemAmount = Number(expenseAmount.value)
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
  
  const expenseListElement = document.createElement("ul")
  expenseListElement.classList.add("expense-list")

  const titleElement = document.createElement("li")
  titleElement.classList.add("expense-data")

  const categoryElement = document.createElement("li")
  categoryElement.classList.add("expense-data")

  const amountElement = document.createElement("li")
  amountElement.classList.add("expense-data")

  const dateElement = document.createElement("li")
  dateElement.classList.add("expense-data")

  
  //  Adding Text Content
  titleElement.textContent = `Title: ${item.title}`
  
  categoryElement.textContent = `Category: ${item.category} `
  
  amountElement.textContent = `Amount: ${item.amount}`

  dateElement.textContent = `Date: ${item.date}`


  // Appending
  expenseListElement.append(titleElement, categoryElement, amountElement, dateElement)

  expenseElement.append(expenseListElement)

  expenseList.append(expenseElement)
}

export const checkStatus = ()=>{
  if(expenseList.children.length>0){
    totalStatus.textContent = ""
    expenseStatus.textContent = ""
  }
}
