

userName = document.getElementById('txtName');
userMail = document.getElementById('txtMail');
userMobile = document.getElementById('txtMobile');
passWord = document.getElementById('txtPassword');
confirmPassWord = document.getElementById('txtConfirm');


// span ID
nameSpan = document.getElementById('nameSpan');
mailSpan = document.getElementById('mailSpan');
mobileSpan = document.getElementById('mobileSpan');
passwordSpan = document.getElementById('passwordSpan');
confirmSpan = document.getElementById('confirmSpan');

function checkValidName(e) {
    // console.log('function start')
    if (checkNumber(e) == true) {
        document.getElementById('nameSpan').innerHTML = "*";
    }
    else {
        document.getElementById('nameSpan').innerHTML = "";
    }
    //  console.log('function end')
}

function checkValidMail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
        mailSpan.innerHTML = "";
        return true;
    } else {
        mailSpan.innerHTML = "invalid input";
        return false;
    }
}

function validMobileNo(e) {
    if (checkmobileNumber(e) == true) {
        mobileSpan.innerHTML = '';
    } else {
        mobileSpan.innerHTML = '*';
    }
}

function passLength(inputs) {
    if (inputs.value.length < 5) {
        passwordSpan.innerHTML = 'length shouble be > 5';
    }
    else {
        passwordSpan.innerHTML = '';
    }
}

function matchPassword(confirmPass) {
    if (confirmPass.value == (passWord.value)) {
        confirmSpan.innerHTML = '';
    }
    else {
        confirmSpan.innerHTML = 'Not Matched';
    }
}

function checkNumber(e) {
    if (e.which >= 48 && e.which <= 57) {
        e.preventDefault();
        return true;
    }
    else {
        return false;
    }
}
function checkmobileNumber(e) {
    if (e.which >= 48 && e.which <= 57) {
        return true;
    }
    else {
        e.preventDefault();
        return false;
    }
}

function checkForm() {
    if ((checkinputs()) == false) {
        const userData = {
            userName : document.getElementById('txtName').value,
            userMail : document.getElementById('txtMail').value,
            userMobile : document.getElementById('txtMobile').value,
            passWord : document.getElementById('txtPassword').value,
            confirmPassWord : document.getElementById('txtConfirm').value,
            Role : 'user'
        };
        let params = [userData.userName, userData.userMail , userData.userMobile , userData.passWord , userData.confirmPassWord , userData.Role];
        let createTable = ' CREATE TABLE IF NOT EXISTS userDetails (id integer primary key, Name , Mail , Mobile , passWord , confirmPassWord , role)';
        let insertStatement = ' INSERT INTO userDetails  (Name , Mail , Mobile , passWord , confirmPassWord , role) VALUES(?,?,?,?,?,?)';
         
        let connection = openDatabase('registeredUser', '1.0', 'Test DB', 2 * 1024 * 1024);
        connection.transaction(function(query){
            query.executeSql(createTable);
            query.executeSql(insertStatement , params , function( tx , record){
                // location.href = '../pages/login.html';
                alert('success...')
            } , function( tx , error){
                console.log(error);
            });
        });


        // const xhttp = new XMLHttpRequest();
        //     xhttp.onreadystatechange = function() {
        //       if (XMLHttpRequest.readyState == 4 && XMLHttpRequest.status == 201) {
        //         alert(XMLHttpRequest.responseText);
        //       }
        //     xhttp.open("Post", "");
        //     xhttp.send('userData');
        //   }
    }
}

function checkinputs() {
    if (userName.value == '') {
        nameSpan.innerHTML = '*';
        userName.focus();
        return true;
    }
    else if (userMail.value == '') {
        mailSpan.innerHTML = '*';
        userMail.focus();
        return true;
    } else if (userMobile.value == '') {
        mobileSpan.innerHTML = '*';
        userMobile.focus();
        return true;
    } else if (passWord.value == '') {
        passwordSpan.innerHTML = '*';
        passWord.focus();
        return true;
    } else if (confirmPassWord.value == '') {
        confirmSpan.innerHTML = '*';
        confirmPassWord.focus();
        return true;
    }
    return false;
}