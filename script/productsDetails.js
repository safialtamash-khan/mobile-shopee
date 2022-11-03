console.log('products details');

showProductsData = document.getElementById('showProductsData');
let connection = openDatabase('registeredUser', '1.0', 'Test DB', 2 * 1024 * 1024);
let selectStatement = 'select * from productsDetails ';
let eidtStatementt = 'select * from productsDetails where id=?';
let deleteStatment = 'delete  from productsDetails where id=?';

connection.transaction(function (query) {
    query.executeSql(selectStatement, [], function (tx, result) {
        // alert('show record');
        if (result.rows.length > 0) {
            showRecords(result);
        }
        else {
            alert('no record found');
        }
    }, function (tx, error) {
        console.log(error);
    });
});


function showRecords(record) {

    let table = '<table class="table my-4">';
    table = table + '<thead>';
    table = table + '<tr>';
    table = table + '<th scope="col"></th>';
    table = table + '<th scope="col">PRODUCT NAME</th>';
    table = table + '<th scope="col">PRODUCT PRICE</th>';
    table = table + '<th scope="col">PRODUCT TYPE</th>';
    table = table + '<th scope="col">PRODUCT IMAGE</th>';
    table = table + '<th scope="col">EDIT</th>';
    table = table + '<th scope="col">DELETE</th>';
    table = table + '<tr>';
    table = table + '</thead>';

    for (let i = 0; i < record.rows.length; i++) {

        table = table + '<tbody>';
        table = table + '<tr>';
        table = table + '<th scope="row"></th>';
        table = table + '<td>' + record.rows.item(i).productName + '</td>';
        table = table + '<td>' + record.rows.item(i).productPrice + '</td>';
        table = table + '<td>' + record.rows.item(i).productBrand + '</td>';
        table = table + '<td><img src="../images/' + record.rows.item(i).productImage + '" width="55"/></td>';
        table = table + '<td><BUtton type="button" class="btn btn-primary" onclick="EDIT(' + record.rows.item(i).id + ')">EDIT</BUtton></td>';
        table = table + '<td><BUtton type="button" class="btn btn-primary" onclick="DELETE(' + record.rows.item(i).id + ')">DELETE</BUtton></td>';
        table = table + '</tr>';
        table = table + '</tbody>';
    }
    table = table + '</table>';
    showProductsData.innerHTML = table;
}

function EDIT(productID) {
    alert(productID);
    connection.transaction(function (query) {
        query.executeSql(eidtStatementt, [productID], function (tx, record) {

            if (record.rows.length > 0) {
                sessionStorage.setItem('productData', JSON.stringify({
                    productID: record.rows.item(0).id,
                    productName: record.rows.item(0).productName,
                    productPrice: record.rows.item(0).productPrice,
                    productType: record.rows.item(0).productBrand,
                    productImage: record.rows.item(0).productImage,
                }));

                window.location.href = "../pages/products.html";
            }

        }, function (tx, error) {
            console.log(error);
        });
    });
}

function DELETE(productID){
    // alert('delete func start');
    connection.transaction(function(query){
        query.executeSql(deleteStatment , [productID] , function (tx, record) {
            // alert(record);
            location.reload();
        }, function (tx, error) {
            console.log(error);
        });
    });

    // alert('delete func end ');
}