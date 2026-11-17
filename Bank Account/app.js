function createAccount(initialBalance){
  let totalBalance = initialBalance
  
  const deposit = (depositCash)=>{
    if(depositCash <= 0){
      console.log("Cash not deposit you enter invalid value. Please enter value greater than 0.")
    }
    else{
      totalBalance += depositCash
    }
  }

const withdraw = (withdrawCash)=>{
    
    if(withdrawCash <= 0){
      console.log("Cash not withdraw you enter invalid value. Please enter value greater than 0.")
    }
    else if(withdrawCash > totalBalance){
      console.log("Insufficient balance")
    }
    else{
      totalBalance -= withdrawCash
    }
  }

  const getBalance = ()=>{
    return `Your current balance is ${totalBalance}`
  }
  
  const account = {
    deposit,
    withdraw,
    getBalance
  }
  return account
}

const account1 = createAccount(1000);
const account2 = createAccount(500);

account1.deposit(200);

console.log(account1.getBalance());
console.log(account2.getBalance());

const account = createAccount(1000);

account.withdraw(1500);
console.log(account.getBalance())