const totalExpense = document.querySelector("#current-total")

const expenseChart = document.querySelector("#expense-chart")

const expenseList = document.querySelector("#expense-list")

const expenseForm = document.querySelector("#expense-form")

const expenseTitle = document.querySelector("#title")

const expenseAmount = document.querySelector("#amount")

const expenseCategory = document.querySelector("#category")

const expenseDate = document.querySelector("#date")

if(totalExpense.textContent.trim()===""){
  totalExpense.textContent = "Not Total Yet Add Expense First"
  totalExpense.classList.add("message")
}

if(expenseList.children.leng){
  expenseChart.textContent = "Not Expense Yet"
  expenseChart.classList.add("message")
}

const list = []

function createExpense(){
  const itemTitle = expenseTitle.value

  const itemCategory = expenseCategory.value

  const itemAmount = expenseCategory.value

  const itemDate = expenseDate.value

  const item = {
    title : itemTitle,
    amount : itemAmount,
    category : itemCategory,
    date : itemDate
  }
  

  function addExpense(){
  const categoryItem = document.createElement("li")
  
  const categoryList = document.createElement("ul")
  
  const titleElement = document.createElement("li")
  const categoryElement = document.createElement("li")
  const amountElement = document.createElement("li")
  const dateElement = document.createElement("li")

  titleElement.textContent = itemTitle
    
    console.log(titleElement.textContent)
    
  categoryElement.textContent = itemCategory
    
    console.log(categoryElement.textContent)
    
  amountElement.textContent = itemAmount
    console.log(amountElement.textContent)

  dateElement.textContent = itemDate
    console.log(dateElement.textContent)

  categoryList.append(titleElement, amountElement, categoryElement, dateElement)

    console.log(categoryList.innerHTML)
    
 categoryItem.append(categoryList)

    console.log(categoryItem.innerHTML)

    expenseList.append(categoryItem)
  console.log(expenseList.innerHTML, expenseList.childElementCount)
    console.log(expenseChart.innerHTML)
}
  addExpense()

  list.push(item)
}

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createExpense();
  expenseForm.reset();
});