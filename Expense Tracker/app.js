import {totalExpense, expenseChart, expenseList, expenseForm, expenseTitle, expenseAmount, expenseCategory, expenseDate} from "./ui.js"

import{checkStatus, list, createExpense, addExpense } from "./utils.js"


expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkStatus();
  expenseForm.reset();
});




