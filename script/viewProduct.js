console.log('products details');

showProductsData = document.getElementById('showProductsData');
let connection = openDatabase('registeredUser', '1.0', 'Test DB', 2 * 1024 * 1024);
let selectStatement = 'select * from productsDetails ';
connection.transaction(function (query) {
    query.executeSql(selectStatement , [] , function( tx, result){
        // alert('show record');
        if (result.rows.length > 0) {
            showRecords(result);
        }
        else{
            alert('no record found');
        }
    }, function( tx, error){
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
        table = table + '<th scope="col">ORDER</th>';
        table = table + '<th scope="col">STATUS</th>';
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
        table = table + '<td><BUtton type="button" class="btn btn-primary" onclick="ORDER(' + record.rows.item(i).pid + ')">ORDER</BUtton></td>';
        table = table + '<td><BUtton type="button" class="btn btn-primary" onclick="DELETE(' + record.rows.item(i).pid + ')">STATUS</BUtton></td>';
        table = table + '</tr>';
        table = table + '</tbody>';
    }
    table = table + '</table>';
    showProductsData.innerHTML = table;
}