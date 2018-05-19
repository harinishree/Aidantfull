var cors = require('cors');
var mongoose = require('mongoose');
var Promises = require('promise');
var PromiseA = require('bluebird').Promise;
var ursa = require('ursa');
var cloudinary = require('cloudinary').v2;
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var path = require('path');
var jsdom = require("jsdom");
var http = require('http')

$ = require('jquery')(new jsdom.JSDOM().window);
const Nexmo = require('nexmo');
//var ipfs = require('ipfs-api')

const nodemailer = require('nodemailer');
// const User = require('./functions/getUser');
const registerUser = require('./functions/registerUser');
const login = require('./functions/login');

const outbox = require('./functions/outbox');
const fetchkey = require('./functions/fetchkey');
// const fetchkey = require('./functions/fetchkey');
const filereader = require('./functions/filereader');
const getStatus = require('./functions/getStatus');
const newLogin = require('./functions/newLogin');
const User = require('./functions/getUser');
var fs = require('fs');
var bitcore = require('bitcore-lib');
var ECIES = require('bitcore-ecies');
var sha256 = require('js-sha256');
var ipfsAPI = require('ipfs-api')

var cors = require('cors');
var mongoose = require('mongoose');
var Promises = require('promise');
var cloudinary = require('cloudinary').v2;
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
// var mailer = require('express-mailer');
const getotp = require('./functions/getotp');
// const User = require('./functions/getUser');
const mail = require('./functions/mail');
const getkey = require('./functions/getkey');

const SendOtp = require('sendotp');
const sendOtp = new SendOtp('209235Abkzi8ZW2sr5acc5d6f');
const nodecipher = require('node-cipher');
var ipfsAPI = require('ipfs-api');
var output;
var ipfs = ipfsAPI('localhost', 5001)
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';
    // const createKeccakHash = require('keccak')
    // const secp256k1 = require('secp256k1')
    // const privateKey = new Buffer('61ae49c7452a086c6c6b9560a28f2ba6aa1b9c3c01322f008615b54141068e44', 'hex');
    // let pubKey = secp256k1.publicKeyCreate(privateKey, false).slice(1);
    // //console.log(pubKey);
    // let address = createKeccakHash('keccak256').update(pubKey).digest().slice(-20).toString('hex');
    // console.log('0x'+address);
    const EthereumEncryption = require('ethereum-encryption');

// or using options
var Web3 = require('web3')
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    web3.eth.defaultAccount = web3.eth.accounts[0];
    console.log(web3.eth.defaultAccount)
    var CoursetroContract = web3.eth.contract([[
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "last_msg_index",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_key",
                    "type": "string"
                },
                {
                    "name": "_type",
                    "type": "string"
                }
            ],
            "name": "setPublicKey",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_who",
                    "type": "address"
                },
                {
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "name": "newMessage",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_who",
                    "type": "address"
                },
                {
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "name": "getMessageByIndex",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "keys",
            "outputs": [
                {
                    "name": "key",
                    "type": "string"
                },
                {
                    "name": "key_type",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_who",
                    "type": "address"
                }
            ],
            "name": "getPublicKey",
            "outputs": [
                {
                    "name": "_key",
                    "type": "string"
                },
                {
                    "name": "_key_type",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "messages",
            "outputs": [
                {
                    "name": "from",
                    "type": "address"
                },
                {
                    "name": "text",
                    "type": "string"
                },
                {
                    "name": "time",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_text",
                    "type": "string"
                }
            ],
            "name": "sendMessage",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_who",
                    "type": "address"
                }
            ],
            "name": "getLastMessage",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "lastIndex",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "message_staling_period",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_sender",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_receiver",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_time",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "message",
                    "type": "string"
                }
            ],
            "name": "Message",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_key",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "_keytype",
                    "type": "string"
                }
            ],
            "name": "PublicKeyUpdated",
            "type": "event"
        }
    ]
    ]
       );
    var Coursetro = CoursetroContract.at('0x951cd0cdc403b89cdfe533703b6b2e5e1fa43232');
    console.log(Coursetro);
}




const nexmo = new Nexmo({
    apiKey: 'be214ba0',
    apiSecret: 'F0WCG2adz2udXrCB'
});
var output;



module.exports = router => {

    router.post('/filereader', cors(), (req, res) => {

        const URL = req.body.url;
        console.log(URL);
        var usertype = req.body.usertype;
        console.log(usertype);
    
        const sndKey = req.body.sndKey;
        console.log(sndKey);
        var password = req.body.sndKey;
        const Key = req.body.manadd;
        console.log(Key);
        const publicKey = req.body.publicKey;
        console.log(Key);
        const status = req.body.status;
        console.log(status);
        var demo = {
            URL: URL,
            usertype: usertype,
            sndKey: sndKey,
            Key: Key,
            publicKey:publicKey,
            status:status
        }
        outbox
        .outboxUser(URL,usertype,sndKey,Key,publicKey,status)
        .then(result => {  
            console.log("resultharini",result); 
        })


        //  obj.jsonFileData.push({id: 1, square:2});

        //  var json = JSON.stringify(obj);

        var fs = require('fs');
        //  fs.writeFile('myjsonfile.json', json, (err) => {  
        //     if (err) throw err;
        //     console.log('Data written to file');
        // });

        fs.readFile('file.json', 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log("data123", data);
                var obj;
                var json;
                obj = JSON.parse(data); //now it an object
                obj.jsonFileData.push(demo); //add some data
                json = JSON.stringify(obj); //convert it back to json
                fs.writeFile('file.json', json, 'utf8', (err) => {
                    if (err) throw err;
                    console.log('Data written to file');

                }); // write it back 
            }
        });

        var testObj = JSON.parse(fs.readFileSync('file.json', 'utf8'));
        console.log("testObj=====================>", testObj);
        var arr = testObj;
        console.log(arr.jsonFileData[0]);
        var json = arr.jsonFileData[0];
        console.log("json", json.URL);




        var cron = require('node-cron');

        cron.schedule('*/1 * * * *', function() {

            //do some work
 var sndKey = json.sndKey;
 console.log(sndKey)
 var publicKey = json.publicKey;
 console.log(publicKey)

            fs.readdir(json.URL, (err, data) => {

                data.forEach(data => {
                    if (data)
                        console.log("data", data);
                    var file = data;

                    fs.readFile(URL+"/"+file,function(err,data){

                        var data = data;
                    console.log("received data:" + data);
                    console.log(json.URL + "/" + file)
                    console.log("manoj")
               
                    // const privateKey = '8d7e743ea5c37a7df4b527178f4e1a674b5882cb2cacad3c02ae9b13c097acfe';
                    // console.log("privatekey",privateKey)
                    const publicKey = json.publicKey;
                    console.log("publickey",publicKey);
                    // const address = EthereumEncryption.publicKeyToAddress(publicKey);
                    // console.log("address",address)
                    // const hash = EthereumEncryption.hash(json.URL + "/" + file);
                    // console.log("hash",hash)
                    // const signature = EthereumEncryption.signHash(privateKey,hash);
                    // console.log("signature",signature);
                    // const valid = EthereumEncryption.verifyHashSignature(publicKey,hash,signature);
                    //    console.log("valid",valid);
                    const encrypted = EthereumEncryption.encryptWithPublicKey(publicKey,data);
                    console.log("encrypted",encrypted)
                        // '03a34d6aef3eb42335fb3cacb59478c0b44c0bbeb8bb4ca427dbc7044157a5d24b', // publicKey
                        // 'foobar' // data
                 var crypted = Buffer(encrypted);
                 console.log("crypted",crypted)

         
                    // fs.readFile("/home/rpqb-desk-003/vendor_files/" + crypted, function(err, data) {
                    //     var file1 = data;
                    //     console.log(file1)
                        ipfs.files.add(crypted, (err, result) => { // Upload buffer to IPFS
                            if (err) {
                                console.error(err)
                                return
                            }
                            let url = `${result[0].hash}`
                            //https://ipfs.io/ipfs/
                            console.log("url", url)
                            var name = url;
                            console.log(file)
                            fs.unlink(json.URL + "/" + file, (err) => {
                                if (err) throw err;
                                console.log('successfully deleted /tmp/hello');
                            });


                         

                                var _to = sndKey;
                                console.log("sndkey123",_to);
                                var _text = url;
                                console.log(_text);

                                Coursetro.sendMessage(_to, _text, {
                                    from: web3.eth.accounts[1],
                                    gas: 4600000
                                })
                                // Coursetro.createAuction($("#name").val(), $("#age").val());
                                console.log("transaction successful")
                            
                        // })
                        })
                    })
                })
            })
        })

        

        res.send({
            "message": "Transaction Complete",
            "status": true,

        })




    })


    ///****************************WEB3JS***************************************************************************



    //do some work




    // })




    //  console.log('running a task every two minutes');
    // });
    router.post('/keygenerator', cors(), (req, res) => {
        var  pvtkey = req.body.manpvt;
        console.log(pvtkey);
        const publicKey = EthereumEncryption.publicKeyFromPrivateKey(
            pvtkey
        );
        console.log(publicKey);
        res.send({
            "message": publicKey,
            "status": true,

        })

    })
        
    router.post('/getAck', cors(), (req, res) => {
        var key = req.body.Key;
        console.log(key);
        var ack = req.body.ack
        console.log(ack);
        if (!ack) {
            res
                .status(400)
                .json({
                    message: 'Invalid Request !'
                });
        } else {

            getAck
                .getAck(key, ack)
                .then(function(result) {

                    res.send({
                        "message": "Transaction complete",
                        "status": true,



                    });


                })
                .catch(err => res.status(err.status).json({
                    message: err.message
                }).json({
                    status: err.status

                }));
        }
    });



    router.post('/getStatus', cors(), (req, res) => {
        var self = this;
        var sndKey = req.body.sndKey;
        console.log(sndKey)
        var privateKey = req.body.privateKey;
        console.log(privateKey)
      
        var num = req.body.IndexNumber;
        console.log(num);
        var status = req.body.status;
        console.log("status", status);



       
            
           
        fetchkey
        .fetchkey(sndKey, privateKey,status,num)
            .then(function(result) {
                console.log(result)

                res.send({
                    status: result.status,
                    message: result.usr
                });
            })

            var _who = sndKey;
            console.log(_who);
            var _index = num;
            console.log(_index);
            Coursetro.getMessageByIndex(_who, _index, function(error, result) {


                {
                    // $("#get").html(result[0]+' ('+result[1]+' years old)');
                    console.log(result);
                }

                res.send({
                    "message": result,
                    "status": true,



                })
            
                                            const validCID = result[1];
                                            var url = req.body.path;
                                            var file = fs.writeFile(url+"/"+validCID);
                // var request = http.get("http://ipfs.io/ipfs/${result[1].hash}", function(response) {
                //   response.pipe(file);
                //   console.log(request)
                // });
                ipfs.files.cat(result[1], function (err, data) {
                    if(err) throw err;
                    console.log("manoj",data);
                    console.log(data.toString())
                 
              
                // const validCID = result[1]
                // console.log("manoj",validCID)
                // ipfs.files.get(validCID, function (err, files) {
                //   files.forEach((file) => {
                //     console.log("file",file)
                //     console.log(file.content.toString('utf8'))
                //   })
                // })
              var encryptedfile = data.toString();
                const message = EthereumEncryption.decryptWithPrivateKey(
                    privateKey,encryptedfile// privateKey
                     // encrypted-data
                );
                console.log("message",message)
                
           
                       
            
                        var URL = req.body.path;
                        const file = result[1];
                        
                        fs.writeFile(URL+"/"+file, message, 'utf8', (err) => {
                            if (err) throw err;
                            console.log('Data written to file');
        
                        }); // write it back 
                  

                })
 
            })
    


        

  


    })


    // function(error, result){
    // Coursetro.getMessageByIndex(_who,_index,)
    //         // Coursetro.createAuction($("#name").val(), $("#age").val());
    //         console.log(result)
    //         console.log("transaction successful")
    // })




    //                      var privkeyAlice = ursa.createPrivateKey(fs.readFileSync('/home/rpqb-desk-003/alice/privkey.pem'));
    //                      var pubkeyBob = ursa.createPublicKey(fs.readFileSync('/home/rpqb-desk-003/bob/pubkey.pem'));
    //  var sig = privkeyBob.hashAndSign('sha256', url, 'utf8', 'base64');
    //   console.log('signed', sig, '\n');

    // var url = "/home/rpqb-desk-003/decrypted_files"
    //    fs.readFile("image.jpg",function(err,img){
    //        console.log(img.toString())
    //        var image = img
    //        console.log(image)

    //                  .catch(err => res.status(err.status).json({
    //                      message: err.message
    //                  }).json({
    //                      status: err.status

    //            }));



    router.post('/registerUser', cors(), (req, res) => {
        console.log("UI", req.body);

        const companyname = req.body.companyname;
        console.log(companyname);
        const firstname = req.body.fname;
        console.log(firstname);
        const lastname = req.body.lname;
        console.log(lastname);
        const email = req.body.email;
        console.log(email);
        const password = req.body.pass;
        console.log(password);
        const retypepassword = req.body.repass;
        console.log(retypepassword);
        const usertype = req.body.usertype;
        console.log("harini123..<<<", usertype);
        const phonenumber = req.body.phonenumber;
        console.log("phone", phonenumber);
        const publickey = req.body.publickey;
        console.log("publickey", publickey);
        // const privatekey = req.body.privatekey;
        // console.log( "phone",privatekey);
        const url = req.body.url;
        console.log("url",url );
        const  gender = req.body.gender;
        console.log("gender", gender);
        var otp = "";
        var possible = "0123456789";
        for (var i = 0; i < 4; i++)
            otp += possible.charAt(Math.floor(Math.random() * possible.length));
        console.log("otp" + otp);
        var encodedMail = new Buffer(req.body.email).toString('base64');

        if (!firstname || !lastname || !phonenumber || !email || !password || !retypepassword || !usertype) {
            res.status(400)
                .json({
                    message: 'Invalid Request !'
                });

        } else {

            registerUser.registerUser(companyname, firstname, lastname, phonenumber, email, password, retypepassword, usertype, encodedMail, publickey, otp,url,gender)
                .then(result => {
                    console.log("results harini", result);
                    // var link = "https://" + remoteHost + "/email/verify?mail=" + encodedMail + "&email=" + email;
                    console.log("encoded mail", encodedMail)
                    var transporter = nodemailer.createTransport("SMTP", {
                        host: 'smtp.ipage.com',
                        port: 587,
                        secure: true,
                        auth: {
                            user: "rahul.desai@rapidqube.com",
                            pass: "Rpqb@12345"
                        }
                    });
                    var mailOptions = {
                        transport: transporter,
                        from: '"AIDANT"<rahul.desai@rapidqube.com>',
                        to: email,
                        subject: 'OTP Confirmation',

                        html: "Hello,<br> Your Otp is.<br> " + otp
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {}
                    });
                    // sendOtp.send(phonenumber, "AIDANT", otp, function(error, data, response) {
                    //     console.log(data);
                    //     // console.log("response",response)
                    //     console.log(otp, "otp")

                    // });
                    var otptosend = 'your otp is ' + otp;
                    console.log(otptosend, "otp")
                    if (!phonenumber) {
                        res
                            .status(400)
                            .json({
                                message: 'Invalid Request !'
                            });

                    } else {
                        console.log("entering in to the else part");
                        User
                            .getUser(email, phonenumber, otp)
                            .then(result => {
                                res
                                    .status(result.status)
                                    .json({
                                        message: result.message,
                                        phonenumber: phonenumber
                                    });

                            })
                            .catch(err => res.status(err.status).json({
                                message: err.message
                            }).json({
                                status: err.status
                            }));

                    }
                })


        }
    });  


    router.post('/mail', cors(), (req, res) => {
            
                      
                            
        var email = req.body.email;
        console.log("email",email);
        var otp = req.body.otp;
        console.log("otp",otp);
    

        if (!email || !otp) {

            res
                .status(400)
                .json({
                    message: 'Invalid Request !'
                });

        } else {  

            var transporter = nodemailer.createTransport("SMTP", {
                host: 'smtp.ipage.com',
                port: 587,
                secure: true,
                auth: {
                    user: "rahul.desai@rapidqube.com",
                    pass: "Rpqb@12345"
                }
            });
                               

           
            var mailOptions = {
                transport: transporter,
                from: '"Aidant"<rahul.desai@rapidqube.com>',
                to: email,
                subject: 'OTP Confirmation',

                html: "Hello,<br> Your Otp is.<br> " + otp
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error)
                }
            });
              
            
           mail
                .mail(email, otp)
                .then(result => {
                    res
                        .status(result.status)
                        .json({
                            message: result.message
                        });
                })
                .catch(err => res.status(err.status).json({
                    message: err.message
                }));
        }
    });



    router.post('/otp', cors(), (req, res) => {

        console.log("UI123......", req.body)

        const otp = req.body.otp;



        if (!otp) {

            res
                .status(400)
                .json({
                    message: 'Invalid Request !'
                });

        } else {



            //var status = result.usr[0]._doc.status

            newLogin
                .newLogin(otp)

                .then(result => {
                    console.log("harini123...>>>", result);

                    res
                        .status(result.status)
                        .json({
                            message: result.message,

                        });

                })
                .catch(err => res.status(err.status).json({
                    message: err.message
                }));
        }
    });


    router.post('/mail', cors(), (req, res) => {



        var email = req.body.email;
        console.log("email", email);
        var otp = req.body.otp;
        console.log("otp", otp);


        if (!email || !otp) {

            res
                .status(400)
                .json({
                    message: 'Invalid Request !'
                });

        } else {
            var transporter = nodemailer.createTransport("SMTP", {
                host: 'smtp.office365.com',
                port: 25,
                secure: true,
                auth: {
                    user: "harinishree.muniraj@rapidqube.com",
                    pass: "Harini!96"
                }
            });

            var mailOptions = {
                transport: transporter,
                from: '"AIDANT"<harinishree.muniraj@rapidqube.com',
                to: email,
                subject: 'OTP Confirmation',

                html: "Hello,<br> Your Otp is.<br> " + otp
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {}
            });

            mail
                .mail(email, otp)
                .then(result => {
                    res
                        .status(result.status)
                        .json({
                            message: result.message
                        });
                })
                .catch(err => res.status(err.status).json({
                    message: err.message
                }));
        }
    });



    router.post('/login', cors(), (req, res) => {
        console.log("entering login function in functions ");
        const emailid = req.body.email;
        console.log(emailid);
        const passwordid = req.body.password;
        console.log(passwordid);


        login
            .loginUser(emailid, passwordid)
            .then(result => {
                console.log("resultharini", result);
                console.log("result ===>>>", result.users.usertype)

                res.send({
                    "message": "Login Successful",
                    "status": true,
                    "usertype": result.users.url,
                    
                });
            })
            .catch(err => res.status(err.status).json({
                message: err.message
            }).json({
                status: err.status
            }));

    });
    router.post('/outbox', cors(), (req, res) => {
        console.log("entering outbox  functions ");
        const url = req.body.url;
        console.log(url);
        const usertype = req.body.usertype;
        console.log(usertype);
        const publicKey = req.body.publicKey;
        console.log(publickey);
        const Key = req.body.manadd;
        console.log(Key);
        const status = req.body.status;
        console.log(status);
        const venpublickey = req.body.vendorkey;
        console.log(venpublickey);

        outbox
            .outboxUser(url, usertype,publicKey ,Key, venpublickey, status)
            .then(result => {
                console.log("resultharini", result);

                res.send({
                    "message": " Stored Successful",
                    status: result.status,

                });
            })
            .catch(err => res.status(err.status).json({
                message: err.message
            }).json({
                status: err.status
            }));

    });
    router.post('/fetchkey', cors(), (req, res) => {

        console.log(req.body);
        var sndKey = req.body.sndKey;
        console.log("publickey",sndKey);
        var privateKey = req.body.privateKey;
        console.log("publickey", privateKey);
        var IndexNumber = req.body.IndexNumber;
        console.log("publickey",IndexNumber);
        var status = req.body.status;
        console.log("status", status);



        fetchkey
            .fetchkey(sndKey, privateKey,status,IndexNumber)
            .then(function(result) {
                console.log(result)

                res.send({
                    status: result.status,
                    message: result.usr
                });
            })
            .catch(err => res.status(err.status).json({
                message: err.message
            }));


    });

    router.post('/file', cors(), (req, res) => {

        const URL = req.body.url;
        console.log(URL);
        var usertype = req.body.usertype;
        console.log(usertype);
        const Key = req.body.Key;
        console.log(Key);
        var demo = {
            URL: URL,
            usertype: usertype,
            Key: Key
        }



        //  obj.jsonFileData.push({id: 1, square:2});

        //  var json = JSON.stringify(obj);

        var fs = require('fs');
        //  fs.writeFile('myjsonfile.json', json, (err) => {  
        //     if (err) throw err;
        //     console.log('Data written to file');
        // });

        fs.readFile('config.json', 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log("data123", data);
                var obj;
                var json;
                obj = JSON.parse(data); //now it an object
                obj.jsonFileData.push(demo); //add some data
                json = JSON.stringify(obj); //convert it back to json
                fs.writeFile('config.json', json, 'utf8', (err) => {
                    if (err) throw err;
                    console.log('Data written to file');
                    res.status(200).json({
                        message: "upload done"
                    });
                }); // write it back 

            }
        });

    })

    router.post('/getkey', cors(), (req, res) => {

        console.log(req.body);
        var sndKey = req.body.sndKey;
        console.log("publickey",sndKey);
        

        getkey
            .getkey(sndKey)
            .then(function(result) {
                console.log(result)

                res.send({
                    status: result.status,
                    message: result.usr
                });
            })
            .catch(err => res.status(err.status).json({
                message: err.message
            }));


    });

}