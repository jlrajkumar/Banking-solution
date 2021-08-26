const deposit = require('./BankAccount');
const BankAccount = require('./BankAccount');

accs = [];

while (true){
		output = main()
		=console.log("Output:" + str(output));
}
function main (){
   var validCommands = ['CREATE','DEPOSIT','WITHDRAW','BALANCE','TRANSFER', 'EXIT'];
    var userInput   = prompt("Input: ");

    if(userInput != null){

        var inputs = userInput.split('"');

        if (inputs[0].toUpperCase in validCommands){
            if (inputs[0].toUpperCase == 'CREATE'){
            var name = inputs[1].trim(`"`);
                var acc= BankAccount(name);
                accs.append(acc);
                return acc.acc_no;
            }

            if(inputs[0].toUpperCase == 'DEPOSIT'){
            var acc_no = parseInt(inputs[1]);
            var depositAmount = parseFloat(inputs[2]);
                return deposit(acc_no, depositAmount);

            }

            if(inputs[0].toUpperCase == 'WITHDRAW'){
                var acc_no = parseInt(inputs[1]);
                var withdrawAmount = parseFloat(inputs[2]);
                    return withdraw(acc_no, withdrawAmount);
            }

            if(inputs[0].toUpperCase == 'TRANSFER'){
                var sourceAccountNumber = parseInt(inputs[1]);
                var targetAccountNumber = parseInt(inputs[2]);
                var transferAmount = parseFloat(inputs[3]);

                return transfer(sourceAccountNumber,targetAccountNumber,transferAmount);

                if (inputs[0].upper() == 'EXIT'){
                    process.exit(0);
                }
        

            }
        }
    
    }

}