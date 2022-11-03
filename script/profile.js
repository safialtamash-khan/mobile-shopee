profileName = document.getElementById('profileName');
profileEmail = document.getElementById('profileEmail');
profilePhone = document.getElementById('profilePhone');

userNavbar = document.getElementById('userNavBar');
adminNavbar = document.getElementById('adminNavBar');

const user = sessionStorage.getItem('Data');
if (user !== null) {
    const userData = JSON.parse(user);
    if (userData.Role == 'user') {      
        userNavBar();
        userPofile();
    } else {
        document.getElementById('toggleButton').style.display = "none"; 
        adminNavBar();
        adminProfile(userData);
    }
}

function userPofile() {
    let connection = openDatabase('registeredUser', '1.0', 'Test DB', 2 * 1024 * 1024);
    let selectStatement = 'select * from userDetails';
    connection.transaction(function (query) {
        query.executeSql(selectStatement, [], function (tx, result) {
                        if (result.rows.length > 0) {
                            profileName.innerHTML = result.rows.item(0).Name;
                            profileEmail.innerHTML = result.rows.item(0).Mail;
                            profilePhone.innerHTML = result.rows.item(0).Mobile;
                            // userRole = result.rows.item(0).role
                        }
                    }, function (tx, error) {
                        console.log(error);
                    });
                });
            }

function adminProfile(userData) {
    profileName.innerHTML = userData.userName;
    profileEmail.innerHTML = userData.userMail;
    profilePhone.innerHTML = userData.userMobile;
    // userRole = userData.Role;
}

function edit(){
    location.href = "../pages/editprofile.html";
}