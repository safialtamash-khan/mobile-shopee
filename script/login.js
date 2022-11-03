console.log('login....page');

userName = document.getElementById('userName');
userPassword = document.getElementById('userPassword');

// span
userSpan = document.getElementById('userSpan');
passSpan = document.getElementById('passSpan');

function login() {
    
    // console.log('start');
    // if (userName.value == "") {
    //     userSpan.innerHTML = "*";
    //     userName.focus();
    // }
    // else if (checkValidMail(userName.value) == true) {
    //        console.log('done');
    // }
    // else if((userPassword.value) == ""){
    //     passSpan.innerHTML = "*";
    //     userPassword.focus(); 
    // }


    if(userName.value == "admin@gmail.com" && userPassword.value == "a"){
        const adminData = {
            userId :"0",
            userName : 'Administrator',
            userMail : 'admin@gmail.com',
            userMobile :'9665550532',
            // passWord : 'a',
            // confirmPassWord :'a',
            Role : 'admin'
        };
        sessionStorage.setItem('Data', JSON.stringify(adminData));
        location.href = "../pages/profile.html";
    }
    checkLoginData(userName.value , userPassword.value);
    console.log('end');
}

function checkLoginData (emailValue , passwordValue){
    let connection = openDatabase('registeredUser', '1.0', 'Test DB', 2 * 1024 * 1024);
    let selectStatement = 'select * from userDetails where Mail=? AND passWord=?';
    connection.transaction(function(query){
        query.executeSql( selectStatement , [emailValue , passwordValue ] , function(ts , result){
            if(result.rows.length >0){   
                const userData = {
                    userId :result.rows.item(0).id,
                    userName : result.rows.item(0).Name,
                    userMail : result.rows.item(0).Mail,
                    userMobile : result.rows.item(0).Mobile,
                    // passWord : result.rows.item(0).passWord,
                    // confirmPassWord : result.rows.item(0).confirmPassWord,
                    Role : 'user'
                };
                sessionStorage.setItem('Data', JSON.stringify(userData));
                location.href = "../pages/profile.html";
                console.log('success..');
            }
        }, function( tx , error){
            console.log(error);
        });
    });
}


// function checkValidMail(input) {
//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (input.value.match(validRegex)) {
//         userSpan.innerHTML = "";
//         return true;
//     } else {
//         userSpan.innerHTML = "invalid input";
//         return false;
//     }
// }
