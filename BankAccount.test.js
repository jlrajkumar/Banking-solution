const BankAccount = require('./BankAccount');

describe("create", ()=>{
    it("Should return an account number", ()=>{
        expect(  create("Raj")).toBe(Number);
    });
    it("Should return an error if no name passed to create", ()=>{
        expect(  create("")).toThrow(`You haven't passed your name`);
    });
    it("Should return an error if no. is passed to create", ()=>{
        expect(  create(134)).toThrow(`Name should not contain numbers`);
    });
});

describe("deposit",()=>{
    it("It should update the balance of the account with deposited amount", ()=>{

        expect( deposit(1001, 6000)).toBe(balance += 6000);
    });
    it("It should not update the balance of the account if deposited amount is 0", ()=>{

        expect( deposit(1001, 0)).toBe(balance = balance);
    });


    it("Allow only 3 transactions in a day", ()=>{

        expect(deposit_Count).toBeLessThan(4);
    });

    it("Balance cannot exceed more than 1,00,000", ()=>{

        expect(balance).toBeLessThan(100001);
    });

    it("Balance cannot be less than Zero", ()=>{

        expect(balance).toBeGreaterThan(0);
    });


    
});


describe("withdraw",()=>{
    it("It should update the balance of the account and deduct the amount", ()=>{

        expect( withdraw(1001, 2000)).toBe(balance -= 2000);
    });
    it("It should show alert/error if the withdraw is more than balance", ()=>{

        expect( withdraw(1001, 9000)).toThrow('Not Enough Funds');
    });
    
    it("Allow only 3 transactions in a day", ()=>{

        expect( withdraw(1001, 850)).toThrow("You've reached transaction limit for today");
    });

    
    it("Allow only 3 transactions in a day", ()=>{

        expect(withdraw_Count).toBeLessThan(4);
    });


});


describe("transfer",()=>{
    it("It should update the balance of the account after transfer and update the amount as deposited in target account", ()=>{

        expect( transfer(1001,1002, 2000)).toBe("Success");
    });
    it("The transaction should nt happen if the src acc do not have enough credits", ()=>{

        expect( transfer(1001,1002, 9000)).toThrow("Not Enough Funds to transfer");
    });
});