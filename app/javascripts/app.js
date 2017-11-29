import "../stylesheets/app.css";

// Import libraries we need.
import {
    default as Web3
} from 'web3';
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import smartcurrency_artifacts from '../../build/contracts/SmartCurrency.json'
// import pending from '../../app/javascripts/pending.js'

// MetaCoin is our usable abstraction, which we'll use through the code below.
var SmartCurrency = contract(smartcurrency_artifacts);
// var Account = contract(account_artifacts);

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
var accounts;
// var account;
var bankA;
var test = [];
// var columnDefs = [
//     {headerName: "AccountNumber", field: "accountnumber"},
//     {headerName: "AccountHolderName", field: "accountholdername"},
//     {headerName: "Bank", field: "bank"},
//     {headerName: "Amount", field: "amount"},
//     {headerName: "IssuedDate", field: "issueddate"},
//     {headerName: "Status", field:"status"}
// ];
var rowData1=[];
// var rowData = [
//     {accountnumber: "24567654", accountholdername: "Risabh", bank:"SBI",amount:"10000",issueddate:"11/11/2017",status:"validation in progress"},
//     {accountnumber: "24534355", accountholdername: "Arun", bank:"ICICI",amount:"1500",issueddate:"12/11/2017",status:"validation in progress"},
//     {accountnumber: "24546467", accountholdername: "Uma", bank:"YES",amount:"2000",issueddate:"13/11/2017",status:"validation in progress"},
// ];
// specify the data
window.App = {
    

    start: function() {
        var self = this;

        // Bootstrap the MetaCoin abstraction for Use.
        //MetaCoin.setProvider(web3.currentProvider);
        SmartCurrency.setProvider(web3.currentProvider);

        // Get the initial account balance so it can be displayed.
        web3.eth.getAccounts(function(err, accs) {
            if (err != null) {
                alert("There was an error fetching your accounts.");
                return;
            }

            if (accs.length == 0) {
                alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
                return;
            }

            accounts = accs;
            bankA=accounts[0];

            self.refreshBalance();
           
        
            // self.accountStatus();
        });
    },

    setStatus: function(message) {
        var status = document.getElementById("status");
        status.innerHTML = message;
    },

    refreshBalance: function() {
        var self = this;

        var meta;

        SmartCurrency.deployed().then(function(instance) {
            meta = instance;
            return meta.getBalance.call(bankA, {
                from: bankA
            });
        }).then(function(value) {
            var balance_element = document.getElementById("balance");
            balance_element.innerHTML = value.valueOf();
        }).catch(function(e) {
            console.log(e);
            // self.setStatus("Error getting balance; see log.");
        });
    },

    SendCoins: function() {
        var self = this;
        var receiver = document.getElementById("Sender").value;
        console.log("Coinreciever:------>" + receiver);

        var accname=document.getElementById("accName").value;
        console.log("lol----",accname)
        
        var bank_name=(document.getElementById("b_name").value);
        console.log("lol----",bank_name)
        
        var amount = parseInt(document.getElementById("CAmount").value);
        console.log("lolol------>",amount);
        
        var date=(document.getElementById("idate").value);
        console.log("lolol------>",date);
        
        var status="Approved";
        
        var updateString=[receiver,accname,bank_name,amount,date,status];
        console.log("LOL:------>" + updateString);
        
        this.setStatus("Initiating transaction... (please wait)");

        var rapid;
        SmartCurrency.deployed().then(function(instance) {
            rapid = instance;
            console.log(receiver);
            return rapid.SendCoins( receiver,updateString.toString(),amount,{
                from: bankA
            });
            
        }).then(function(value) {

            self.setStatus("Transaction complete!");
            self.refreshBalance();

        }).catch(function(e) {
            console.log(e);
            self.setStatus("Error Approving transaction due to insufficient Balance");
        });
    },
   
    checkBalance: function() {
        var self = this;
        var rapid;
        SmartCurrency.deployed().then(function(instance) {
            rapid = instance;
            var coinAddress = document.getElementById("coinReceiver").value;

            console.log("Coin Address: " + coinAddress);
            return rapid.getBalance.call(coinAddress, {
                from: bankA
            });
        }).then(function(value) {
            var balance_element = document.getElementById("checkBalance");
            balance_element.innerHTML = value.valueOf();
        }).catch(function(e) {
            console.log(e);
            self.setStatus("Error getting balance; see log.");
        });
    },
    RejectTransaction: function() {
        var self = this;
        
        var self = this;
        var receiver = document.getElementById("Sender").value;
        console.log("Coinreciever:------>" + receiver);
        
        var accname=document.getElementById("accName").value;
        console.log("lol----",accname)
        
        var bank_name=(document.getElementById("b_name").value);
        console.log("lol----",bank_name)
        
        var amount = parseInt(document.getElementById("CAmount").value);
        console.log("lolol------>",amount);
        
        var date=(document.getElementById("idate").value);
        console.log("lolol------>",date);
        
        var status="rejected";
        var updateString=[receiver,bank_name,accname,date,amount,status];
        console.log("LOL:------>" + updateString);
        
        this.setStatus("Initiating transaction... (please wait)");

        var rapid;
        SmartCurrency.deployed().then(function(instance) {
            rapid = instance;
            return rapid.updateTransaction( updateString.toString(), {
                from: bankA
            });
        }).then(function(value) {

            self.setStatus("Transaction complete!");
            self.refreshBalance();

        }).catch(function(e) {
            console.log(e);
            self.setStatus("Error Approving transaction due to insufficient Balance");
        });
    },
    addDetails:function(){
    var self = this;
    var receiver = document.getElementById("sendCoinReceiver").value;
    console.log("Coinreciever:------>" + receiver);

    var accname = document.getElementById("accountName").value;
    console.log("lol----",accname)
    
    var bank_name=(document.getElementById("bank_name").value);
    console.log("lol----",bank_name)
    
    var amount = (document.getElementById("CoinAmount").value);
    console.log("Coinreciever:------>" + receiver);
    
    var date=(document.getElementById("issueddate").value);
    console.log("lolol------>",date);

    var status="validation in progress";
    
    var updateString=[receiver,accname,bank_name,amount,date,status]
    // updateString.toString();
    console.log("lol-------->",updateString);
    var rapid;
    SmartCurrency.deployed().then(function(instance) {
        rapid = instance;date
        return rapid.updateTransaction(updateString.toString(),{
            from: bankA
        });
    }).then(function(value) {

        self.setStatus("Transaction complete!");

    }).catch(function(e) {
        console.log(e);
        self.setStatus("Error Approving transaction due to insufficient Balance");
    });
},

    getStatus: function(){
        var self = this;
        var rapid;
        
        SmartCurrency.deployed().then(function(instance){
            rapid = instance;
            
               var dataofarray = parseInt(document.getElementById("get").value);
                
            return rapid.getTransaction.call(dataofarray,{
                from:bankA
            
            });
        
        }).then(function(value) {
            
           
    
        
      
           
          
        //    document.addEventListener("DOMContentLoaded", function() {
            
        //         // lookup the container we want the Grid to use
        //         var eGridDiv = document.querySelector('#myTable');
            
        //         // create the grid passing in the div to use together with the columns & data we want to use
        //        new agGrid.Grid(eGridDiv, gridOptions);
        //     });
        //     location.reload();
            
         
           test = value;
           
           
         var fields = test.split(",");
           var accountnumber = fields[0];
           var accountholdername = fields[1];
           var bank = fields[2];
           var amount = fields[3];
           var issueddate = fields[4];
           var status =  fields[5];
          
            var row = "<tr><td>"+accountnumber+"</td><td>"+accountholdername+"</td><td>"+bank+"</td><td>"+amount+"</td><td>"+issueddate+"</td><td>"+status+"</td></tr>";
            $('#myTable tr:last').after(row);
          
           
           console.log(accountnumber);
           console.log(accountholdername);
           console.log(bank);
           console.log(amount);
           console.log(issueddate);
           console.log(status);
           console.log(fields,"fields");
           
           

           
    //        var gridOptions = {
    //         columnDefs: columnDefs,
    //         rowData: rowData1,
    //         enableSorting: true,
    //         // enable filtering 
    //         enableFilter: true,
    //         getRowNodeId: function(data) { return data.accountnumber; }
    //     }
        
       
    
    // // wait for the document to be loaded, otherwise
    // // ag-Grid will not find the div in the document.
    //  document.addEventListener("DOMContentLoaded", function() {
    
    //     // lookup the container we want the Grid to use
    //     var eGridDiv = document.querySelector('#myTable');
    
    //     // create the grid passing in the div to use together with the columns & data we want to use
    //    new agGrid.Grid(eGridDiv, gridOptions);
    // });
           

           
           
        //    var accountnumber = fields[0];
        //    var bankname = fields[1];
           // etc.
         

        }).catch(function(e) {
            console.log(e);
            self.setStatus("Error getting balance; see log.");
        });

    },
    
   


}








window.addEventListener('load', function() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
            // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    App.start();
});