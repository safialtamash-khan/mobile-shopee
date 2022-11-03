// console.log('editprofile');

// alert('editprofile');

const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const profilePhone = document.getElementById('profilePhone');
const profilePassword = document.getElementById('profilePassword'); 
 
let userId ="0";

const editData = sessionStorage.getItem('Data');

if (editData !== null) {
    let userData = JSON.parse(editData);
    if (userData.Role =="user") {
            userId = userData.userId;
            editUserProfile(userId);
    //     profileName.innerHTML = userData.userName ;
    //     profileEmail.innerHTML = userData.userMail; 
    //    profilePhone.innerHTML = userData.userMobile;
    }
}


function editUserProfile (userID){
    let connection = openDatabase('registeredUser', '1.0', 'Test DB', 2 * 1024 * 1024);
    let selectStatement = 'select * from userDetails where id=?';
    connection.transaction(function(query){
        query.executeSql( selectStatement , [userID ] , function(ts , result){
            if(result.rows.length >0){   
                profileName.value = result.rows.item(0).Name;
                profileEmail.value = result.rows.item(0).Mail;
                profilePhone.value = result.rows.item(0).Mobile;
                profilePassword.value = result.rows.item(0).PassWord;
            }
        }, function( tx , error){
            console.log(error);
        });
    });
}


function update(){
    let connection = openDatabase('registeredUser', '1.0', 'Test DB', 2 * 1024 * 1024);
    let updateStatement = 'update userDetails  set Name=? , Mail=? , Mobile=? , PassWord=? , confirmPassWord=?  where id=?';
    const params = [profileName.value , profileEmail.value , profilePhone.value , profilePassword.value , profilePassword.value, userId];
    connection.transaction(function(query){
        query.executeSql( updateStatement , params , function(ts , result){
            console.log('updated');
            location.href = "../pages/profile.html";
            
        }, function( tx , error){
            console.log(error);
        });
    });


}

