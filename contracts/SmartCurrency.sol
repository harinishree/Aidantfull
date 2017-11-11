pragma solidity ^0.4.4;

   
   contract SmartCurrency {
    mapping (address => uint256) balances;
    mapping (address => Usr ) Users;
   
    //users will be stored in address array.
   struct Usr {
    
    string [] details;
    
    }

   event Transfer(address indexed _from, address indexed _to, uint256 _value , string _updateString); //transfer amount from to receiver
    
    function SmartCurrency() {
    balances[msg.sender]= 100000;
      
   }

   function SendCoins(address receiver,string updateString, uint amount)returns(bool sufficient) {
        if (balances[msg.sender] < amount) return false; // checks balance is not 0.
        balances[msg.sender] -= amount; // deducts  balance from Sender.
        balances[receiver] += amount; // increments  balance of  receiver.
        Users[msg.sender].details.push(updateString);
        Transfer(msg.sender, receiver, amount , updateString); // event transfer gets called.
        return true;
    }
    
   function getBalance(address addr) returns(uint ) {
        return balances[addr]; // returns balance of reciever.
        
   }
    function updateTransaction (string updateString) returns (bool updated) {
         Users[msg.sender].details.push(updateString);
         return true;
    }
    
    function getTransaction(uint index) returns(string value ) {
     return Users[msg.sender].details[index];
     }
     
}