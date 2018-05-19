const user = require('../models/properties'); 

exports.getkey = (sndKey) => {

    return new Promise((resolve, reject) => {
        console.log("Entering in to the function")
        
        user.find({
            sndKey:sndKey,
              
        })
            .then(users => {
                console.log("users", users)
               
                resolve({
                    status: 201,
                    usr: users
                })

            })
            .catch(err => {

                if (err.code == 11000) {

                    return reject({
                        status: 409,
                        message: 'cant fetch !'
                    });

                } else {
                    console.log("error occurred" + err);

                    return reject({
                        status: 500,
                        message: 'Internal Server Error !'
                    });
                }
            })
    })
};
