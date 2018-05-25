'use strict';

const user = require('../models/registerether');
var web3 = require('web3')
var web3SocketProvider = new web3.providers.HttpProvider('http://localhost:8545');
const web3Obj = new web3(web3SocketProvider);
var contract = require("../node_modules/truffle-contract");
const smartcurrency_artifacts = require('../build/contracts/SmartCurrency.json')
var SmartCurrency = contract(smartcurrency_artifacts);
var Accounts = require('web3-eth-accounts');
var bitcore1 = require('../node_modules/bitcore-ecies/node_modules/bitcore-lib');
var ECIES = require('bitcore-ecies');
var ethaccounts = new Accounts('http://localhost:8545');
// const user = require('../models/fetchdata');
var accounts;
// var account;
var account;

var sndKey;
SmartCurrency.setProvider(web3SocketProvider);
//     // SmartCurrencyE.setProvider(web3.currentProvider);
   
//     // Get the initial account balance so it can be displayed.
//     // async function getAccounts() {
//     //     let accounts = await web3Obj.eth.getAccounts();
//     //  }
exports.loginUser = (email, password,usertype) =>

    new Promise((resolve, reject) => {
    web3Obj.eth.getAccounts(function(err, accs) {
        if (err != null) {
            alert("There was an error fetching your accounts.");
            return;
        }

        if (accs.length == 0) {
            alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
            return;
        }

      
        accounts = accs;

        account=accounts[0];
        console.log(account);
    
        var account1=accounts[1];
        console.log(account1);

    });



        console.log("Entering into login fun");
        console.log(email);
        user.find({
                "email": email ,
            
            })
            .then(users => {
                const dbpin = users[0].password;
                console.log(users[0].password)
                console.log(users[0]._id)
                console.log(dbpin + "   " + users[0].password)

                if (String(password) === String(dbpin)) {

                    resolve({
                        status: 200,
                        users: users[0],
                        
                    });

                } else {

                    reject({
                        status: 401,
                        message: 'Invalid Credentials !'
                    });
                }
            })


    });