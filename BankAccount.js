
var bank_acc_no_init = 1000;
class BankAccount {
    constructor(name){
            this.name = name;
            this.acc_no = bank_acc_no_init + 1;
            this.amount = amount;
            this.deposit_Count = 0;
            this.withdraw_Count = 0;
            this.transfer_Count = 0;

    }
}

//Error Handling
var ErrorMsg1 = "Minimum withdrawal amount is 1000";
var ErrorMsg2 = "Maximum withdrawal amount is 25,000";
var ErrorMsg3 = "Invalid account Number";
var ErrorMsg4 = "Only 3 withdrawals are allowed in a day";
var ErrorMsg5 = "Minimum deposit amount is 500";
var ErrorMsg6 = "Maximum deposit amount is 50000";
var ErrorMsg7 = "Only 3 deposits are allowed in a day";
var ErrorMsg8 = " Not Enough Funds in your Account";

var ErrorMsgsList = [ErrorMsg1,ErrorMsg2,ErrorMsg3,ErrorMsg4,ErrorMsg5,ErrorMsg6,ErrorMsg7];

/*
function createAccount(name){
    return bank_acc_no_init+1;
}
*/

function findAccount(acc_no){
    for(account in accs){
        if(account.acc_no == acc_no)
        return account;
    }

}


function deposit(acc_no, dep_amount){
    if(account.amount > 100000) 
        return `Account balance exceeded than limit:100000`;
    
    else if(dep_amount < 500)
        return ErrorMsg5;
        else if (dep_amount > 50000){
            return ErrorMsg6;
        }

        account = findAccount(accountNumber)
	    if (!account)
		return ErrorMsg3;

        if (account.deposit_Count > 3 ){
            return ErrorMsg7;
        }

        account.amount += dep_amount;
        account.deposit_Count +=   1;

        return account.amount;
        }




function withdraw(acc_no, withDrawAmt){

    if(withDrawAmt > amount){
        return ErrorMsg8;
    }
     
    else if(withDrawAmt < 1000)
        return ErrorMsg1;
    else if( withDrawAmt > 25000){
        return ErrorMsg2;
    }

    account = findAccount(accountNumber)
	    if (!account)
		return ErrorMsg3;

        if (account.withdraw_Count > 3 ){
            return ErrorMsg4;
        }

        account.amount -= withDrawAmt; //deduct amount 
        account.withdraw_Count +=1; //count transaction to limit to 3 in a day
        return account.amount; //return final balance

}


function transfer(src_acc,target_acc, transfer_amt){
    if(transfer_amt > amount){
        return ErrorMsg8;
    }   
    withdrawStatus = withdraw(src_acc, transfer_amt)
    depositStatus = deposit(target_acc, transfer_amt)
    console.log(withdrawStatus);

    if (account.transfer_Count > 3 ){
        return ErrorMsg7;
    }

    account.amount += transfer_amt;
    account.transfer_Count +=   1;

    if(withdrawStatus in ErrorMsgsList){
        return "Transaction Failed";
    }
    else{
        return "Transaction Success";
    }
}

module.exports = deposit, withdraw, transfer, findAccount;