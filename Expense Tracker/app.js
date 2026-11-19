import {totalExpense, expenseChart, expenseList, expenseForm, expenseTitle, expenseAmount, expenseCategory, expenseDate} from "./ui.js"

import{checkStatus, createExpense, addExpense } from "./utils.js"

const list = []

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkStatus();
  expenseForm.reset();
});




