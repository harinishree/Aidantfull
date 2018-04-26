var cors = require('cors');
var mongoose = require('mongoose');
var Promises = require('promise');
var cloudinary = require('cloudinary').v2;
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var path = require('path');
const Nexmo = require('nexmo');
//var ipfs = require('ipfs-api')

const nodemailer = require('nodemailer');
// const User = require('./functions/getUser');
const registerUser = require('./functions/registerUser');
const login = require('./functions/login');
// const fetchkey = require('./functions/fetchkey');
const filereader = require('./functions/filereader');
const getStatus = require('./functions/getStatus');
var fs =require('fs');

var sha256 = require('js-sha256');
var ipfsAPI = require('ipfs-api')
const nodecipher = require('node-cipher');
 
// or using options

var ipfs = ipfsAPI('localhost', 5001)
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';
    



const nexmo = new Nexmo({
    apiKey: 'be214ba0',
    apiSecret: 'F0WCG2adz2udXrCB'
});
var output;


 
    module.exports = router => {
        router.post('/filereader', cors(), (req,res) => {
            console.log("UI",req.body);
            const URL = req.body.url;
            console.log(URL);
            var usertype = req.body.usertype;
            console.log(usertype);
            const Key = req.body.recKey;
             console.log(Key);
            const sndKey = req.body.sndKey;
            console.log(sndKey);
           const password = req.body.sndKey;
console.log(password);
            // const pubKey =req.body.pubKey;
            // console.log(pubKey)
        
                // perform operation e.g. GET request http.get() etc.
                var cron = require('node-cron');
                
                //  cron.schedule('*/2 * * * *', function(){
               
  //do some work


                  
                fs.readdir(req.body.url, (err, files) => {
               
                  files.forEach(file => {
                      if(file)
                    console.log("data",file);
                    var file = file;
                    // fs.readFile(URL+"/"+file,function(err,data){
                
                    //     var data = data;
                                // console.log("received data:" + data);
                             console.log(URL+"/"+file )
                               console.log("manoj")
                                nodecipher.encryptSync({
                                 input:URL+"/"+file ,
                                 output: file,
                                 password: password
                                
                                },function (err, opts) {
                                 if (err) throw err;
                                
                                 console.log('It worked!');
                               
                                })
                                console.log(output)
                                fs.readFile(file,function(err,data){
                                    var file1= data;
                                    console.log(file1)
                        ipfs.files.add(data, (err, result) => { // Upload buffer to IPFS
                            if(err) {
                              console.error(err)
                              return
                            }
                            let url = `${result[0].hash}`
                            //https://ipfs.io/ipfs/
                            console.log("url",url)
                       
                        
                              
                   
       
                    
                console.log(file)
                if (!URL ||!sndKey || !url ||!usertype ||!Key ) {
                res
                    .status(400)
                    .json({
                        message: 'Invalid Request !'
                    });
                }
                    else {
        
                        filereader
                            .filereader(URL,sndKey,url,usertype,Key)
                            .then(result => {
                
                                res.send({
                                    "message": "Transaction Complete",
                                    "status": true,
                
                                 
                
                                });
                
                
                            })
                            .catch(err => res.status(err.status).json({
                                message: err.message
                            }).json({
                                status: err.status
                               
                            }));
                    }
                })
            });
        
                 });
                
                })
            })
        
        
    
    // })
    
             
       
     
             
           
         //  console.log('running a task every two minutes');
         // });
         router.post('/getAck', cors(), (req,res) => {
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
                 }
                     else {
         
                         getAck
                             .getAck(key,ack)
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
     
         
         
         router.post('/getStatus', cors(), (req,res) => {
             var self = this;
             var reckey =req.body.Key;
             console.log(reckey)
             var password = reckey
             console.log(password)
          
            var file =  "/home/rpqb-desk-003/Aident_files"
            fs.readdir(file, (err, files) => {
               
                files.forEach(file => {
                    if(file)
                  console.log("data",file);
                  var file1 = file;
            console.log(file1)
               nodecipher.decryptSync({
                input: file,
                output: file1 ,
                password: password
               }, function (err, opts) {
                if (err) throw err;
               
                console.log('It worked!');
               });
           
               var url = "/home/rpqb-desk-003/vendor_files"
            //    fs.readFile("image.jpg",function(err,img){
            //        console.log(img.toString())
            //        var image = img
            //        console.log(image)
            console.log(url+"/"+file1)
               fs.writeFile(url+"/"+file1, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            
            
         
             if (!reckey) {
                 res
                     .status(400)
                     .json({
                         message: 'Invalid Request !'
                     });
                 }
                     else {
         
                         getStatus
                             .getStatus(reckey)
                             .then(function(result) {
                 
                                 res.send({
                                     "message": result.message,
                                     "status": true,
                 
                                  
                 
                                 });
                 
                 
                             })
                             .catch(err => res.status(err.status).json({
                                 message: err.message
                             }).json({
                                 status: err.status
                                
                             }));
                          
                     }
                    })
                })
                
                    });
                })

router.post('/registerUser', cors(), (req, res) => { 
    console.log("UI",req.body);

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
    console.log(usertype);
    const userObject = req.body.userObject;
    console.log( "phone",userObject);
    // const publickey = req.body.publickey;
    // console.log( "phone",publickey);
    // const privatekey = req.body.privatekey;
    // console.log( "phone",privatekey);
    var phonetosend = userObject.phone;
    var otp = "";
    var possible = "0123456789";
    for (var i = 0; i < 4; i++)
        otp += possible.charAt(Math.floor(Math.random() * possible.length));
    console.log("otp" + otp);
     var encodedMail = new Buffer(req.body.email).toString('base64');
    
    if (!firstname || !lastname || !userObject || !email || !password || !retypepassword || !usertype) {
        res.status(400)
            .json({
                message: 'Invalid Request !'
            });

    } else {

        registerUser.registerUser(companyname,firstname, lastname, userObject,email,password, retypepassword,usertype,encodedMail)
            .then(result => {
                console.log("results harini", result);
                // var link = "https://" + remoteHost + "/email/verify?mail=" + encodedMail + "&email=" + email;
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
                                        from: 'rahul.desai@rapidqube.com',
                                        to: email,
                                        subject: 'Register Invitation',
                                         html:  "Registered Successfully "

                                    };
                                    transporter.sendMail(mailOptions, (error, info) => {
                                        if (error) {}
                                    });
                                    // nexmo
                                    // .message
                                    // .sendSms('919842653746', phonetosend, otptosend, {
                                    //     type: 'unicode'
                                    // }, (err, responseData) => {
                                    //     if (responseData) {
                                    //         console.log(responseData)
                                    //     }
                                    // });
              
   
                    // res.status(result.status).json({
                    //     message: result.message,
                    //     ind: true
                    // })
                    res.send({
                        "message": "user has been registered successfully",
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

router.post('/login', cors(), (req, res) => {
    console.log("entering login function in functions ");
    const emailid = req.body.email;
    console.log(emailid);
    const passwordid = req.body.password;
    console.log(passwordid);
   
   
    login
        .loginUser(emailid, passwordid)
        .then(result => {  
            console.log("resultharini",result); 
            console.log("result ===>>>",result.users.usertype)
            


            res.send({
                "message": "Login Successful",
                "status": true,
                "usertype":result.users.usertype,
               "publicKey": result.users.publickey,
                "PrivateKey":result.users.privatekey
            });
        })
        .catch(err => res.status(err.status).json({
            message: err.message
        }).json({
            status: err.status
        }));

}); 

// router.post('/fetchkey', cors(), (req, res) => {

//     console.log(req.body);
//     var url = req.body.url;
//     console.log("url",url);
   
//     var usertype = req.body.usertype;
//     console.log(req.body.usertype);
//     fetchkey
//         .fetchkey(url,usertype)
//         .then(function(result) {
//             console.log(result)

//             res.send({
//                 status: result.status,
//                 message: result.usr
//             });
//         })
//         .catch(err => res.status(err.status).json({
//             message: err.message
//         }));


// }); 


router.get("/email/verify", cors(), (req, res, next) => {
    var status;
    var querymail = req.query.mail;
    var email = req.query.email;
    console.log("URL: " + querymail);
    console.log("email: " + email);
    User
        .getUser(email)
        .then(result => {
            var minutes1 = new Date(result.usr[0]._doc.created_at).getMinutes();
            console.log("minutes1" + minutes1);
            var minutes2 = new Date().getMinutes();
            console.log("minutes2" + minutes2);
            var diffinminutes = minutes2 - minutes1;
            if (diffinminutes > 10) {
                deleteuser
                    .deleteuser(email)
                    .then(result => {
                        res.send({
                            status: 201,
                            message: 'your email link has been expired please register again'
                        });
                    })
                    .catch(err => res.status(err.status).json({
                        message: err.message
                    }));

            } else {
                verifyemail
                    .emailverification(querymail)
                    .then(result => {
                        var status = result.usr.status
                        if (status.length == 2) {
                            res.send({
                                "status": true,
                                "message": "registration successful"
                            });
                        } else {

                            res.send({
                                "status": false,
                                "message": "please verify mobile no too"
                            });
                        }

                    })
                    .catch(err => res.status(err.status).json({
                        message: err.message
                    }));
            }
        });
});
router.post("/user/phoneverification", cors(), (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const phone = req.body.phone;
    var otp = req.body.otp;
    console.log(otp);
    console.log(phone);
    User
        .getUser(email)
        .then(result => {
            var minutes1 = new Date(result.usr[0]._doc.created_at).getMinutes();
            console.log("minutes1" + minutes1);
            var minutes2 = new Date().getMinutes();
            console.log("minutes2" + minutes2);
            var diffinminutes = minutes2 - minutes1;
            if (diffinminutes > 10) {
                res.send({
                    status: 201,
                    message: 'your otp has been expired please request new one'
                });
            } else {
                verifyphone
                    .phoneverification(otp, phone, userinfo)
                    .then(result => {
                        var status = result.usr.status
                        if (result.status === 202) {
                            res
                                .status(result.status)
                                .json({
                                    message: result.message
                                });
                        } else if (status.length == 2) {
                            res
                                .status(result.status)
                                .json({
                                    message: "registration successful",
                                    status: true
                                })
                        } else {

                            if (result.status === 404) {
                                res
                                    .status(result.status)
                                    .json({
                                        message: result.message
                                    });
                            } else {
                                res
                                    .status(200)
                                    .json({
                                        message: "please verify emailid too",
                                        status: false
                                    });

                            }
                        }

                    })
                    .catch(err => res.status(err.status).json({
                        message: err.message
                    }));
            }
        })
        .catch(err => res.status(err.status).json({
            message: err.message
        }));
});
     
    }