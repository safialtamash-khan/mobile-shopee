pname = document.getElementById('pname');
pPrice = document.getElementById('pPrice');
select = document.getElementById('select');
pImage = document.getElementById('pImage');

// span
pNameSpan = document.getElementById('pNameSpan');
pPriceSpan = document.getElementById('pPriceSpan');
pSelectSpan = document.getElementById('pSelectSpan');
pImageSpan = document.getElementById('pImageSpan');



function validPrice(e) {
    if ((checkNumber(e) == true)) {
        pPriceSpan.innerHTML = "";
    }
    else {
        pPriceSpan.innerHTML = "*";
    }
}

function checkValidName(e) {
    if (e.which >= 48 && e.which <= 57) {
        e.preventDefault();
        return true;
    }
    else {
        return false;
    }
}

function checkNumber(e) {
    if (e.which >= 48 && e.which <= 57) {
        return true;
    }
    else {
        e.preventDefault();
        return false;
    }
}

let submitData = () => {
    if ((checkInputs()) == false) {
       const productsData = {
            pName  : pname.value,
            pPrice : pPrice.value,
            select : select.value,
            pImage : pImage.files.item(0).name
        };
    let params=[productsData.pName , productsData.pPrice , productsData.select , productsData.pImage];
    let connection = openDatabase('registeredUser', '1.0', 'Test DB', 2 * 1024 * 1024);
    let createTable = ' CREATE TABLE IF NOT EXISTS productsDetails (id integer primary key, productName,productPrice,productBrand,productImage)';
    let insertStatement = ' INSERT INTO productsDetails  (productName , productPrice , productBrand , productImage) VALUES(?,?,?,?)';
         connection.transaction(function(query){
             query.executeSql(createTable);
            query.executeSql(insertStatement , params , function(tx , result){
                productForm.reset();
                window.location.href = "../pages/productsDetails.html";  
                // alert('Data Submitted...'+ productsData.pImage);
            } , function(tx , error){
                console.log(error);
            });
        });
    }
}

let checkInputs = () => {
    if (pname.value == "") {
        pNameSpan.innerHTML = "*";
        pname.focus();
        return true;
    }
    else if (pPrice.value == "") {
        pPriceSpan.innerHTML = "*";
        pPrice.focus();
        return true;
    }
    else if (select.value == "") {
        pSelectSpan.innerHTML = "*";
        select.focus();
        return true;
    }
    else if (pImage.value == "") {
        pImageSpan.innerHTML = "*";
        pImage.focus();
        return true;
    }
    return false;

}

