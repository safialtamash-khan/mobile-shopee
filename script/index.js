console.log('index....');

// alert('onload')
function homeMenu(){


let navBar = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">';
navBar = navBar + '<div class="container-fluid">';
navBar = navBar + '<a class="navbar-brand" href="#">';
navBar = navBar + ' <h3>Mobile Shopee</h3>';
navBar = navBar + '</a>';
navBar = navBar + '<button class="navbar-toggler" type="button" data-bs-toggle="collapse"';
navBar = navBar + 'data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"';
navBar = navBar + 'aria-label="Toggle navigation">';
navBar = navBar + '<span class="navbar-toggler-icon"></span>';
navBar = navBar + '</button>';
navBar = navBar + '<div class="collapse navbar-collapse" id="navbarSupportedContent">';
navBar = navBar + '<ul class="navbar-nav me-auto mb-2 mb-lg-0">';
navBar = navBar + '<li class="nav-item">';
navBar = navBar + '<a class="nav-link active" aria-current="page" href="../pages/index.html">HOME</a>';
navBar = navBar + '</li>';
navBar = navBar + '<li class="nav-item">';
navBar = navBar + '<a class="nav-link" href="../pages/login.html">LOGIN</a>';
navBar = navBar + '</li>';
navBar = navBar + '<li class="nav-item">';
navBar = navBar + '<a class="nav-link" href="../pages/registration.html">REGISTER</a>';
navBar = navBar + '</li>';
// navBar = navBar + '<li class="nav-item">';
// navBar = navBar + '<a class="nav-link" href="../pages/products.html">PRODUCTS</a>';
// navBar = navBar + '</li>';
// navBar = navBar + '<li class="nav-item">';
// navBar = navBar + '<a class="nav-link" href="../pages/profile.html">PROFILE</a>';
// navBar = navBar + '</li>';
// navBar = navBar + '<li class="nav-item">';
// navBar = navBar + '<a class="nav-link" href="../pages/productsDetails.html">PRODUCTS DETAILS</a>';
// navBar = navBar + '</li>';
navBar = navBar + '<li class="nav-item">';
navBar = navBar + '<a class="nav-link" href="../pages/contactUs.html">CONTACT US</a>';
navBar = navBar + '</li>';
navBar = navBar + '<li class="nav-item">';
navBar = navBar + '<a class="nav-link" href="../pages/aboutUs.html">ABOUT US</a>';
navBar = navBar + '</li>';
navBar = navBar + '</ul>';
navBar = navBar + '<form class="d-flex">';
navBar = navBar + '<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">';
navBar = navBar + '<button class="btn btn-success" type="submit">Search</button>';
navBar = navBar + '</form>';
navBar = navBar + '</div>';
navBar = navBar + '</div>';
navBar = navBar + '</nav>';

document.getElementById('navBar').innerHTML = navBar;

}

function userNavBar() {
    let registerNavbar = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">';
    registerNavbar = registerNavbar + '<div class="container-fluid">';
    registerNavbar = registerNavbar + '<a class="navbar-brand" href="#">';
    registerNavbar = registerNavbar + ' <h3>Mobile Shopee</h3>';
    registerNavbar = registerNavbar + '</a>';
    registerNavbar = registerNavbar + '<button class="navbar-toggler" type="button" data-bs-toggle="collapse"';
    registerNavbar = registerNavbar + 'data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"';
    registerNavbar = registerNavbar + 'aria-label="Toggle navigation">';
    registerNavbar = registerNavbar + '<span class="navbar-toggler-icon"></span>';
    registerNavbar = registerNavbar + '</button>';
    registerNavbar = registerNavbar + '<div class="collapse navbar-collapse" id="navbarSupportedContent">';
    registerNavbar = registerNavbar + '<ul class="navbar-nav me-auto mb-2 mb-lg-0">';
    registerNavbar = registerNavbar + '<li class="nav-item">';
    registerNavbar = registerNavbar + '<a class="nav-link" href="../pages/profile.html">PROFILE</a>';
    registerNavbar = registerNavbar + '</li>';
    registerNavbar = registerNavbar + '<li class="nav-item">';
    registerNavbar = registerNavbar + '<a class="nav-link" href="../pages/viewProducts.html">VIEW PRODUCTS </a>';
    registerNavbar = registerNavbar + '</li>';
    registerNavbar = registerNavbar + '<li class="nav-item">';
    registerNavbar = registerNavbar + '<a class="nav-link active" aria-current="page" href="../pages/index.html">LOGOUT</a>';
    registerNavbar = registerNavbar + '</li>';
    registerNavbar = registerNavbar + '</ul>';
    registerNavbar = registerNavbar + '<form class="d-flex">';
    registerNavbar = registerNavbar + '<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">';
    registerNavbar = registerNavbar + '<button class="btn btn-success" type="submit">Search</button>';
    registerNavbar = registerNavbar + '</form>';
    registerNavbar = registerNavbar + '</div>';
    registerNavbar = registerNavbar + '</div>';
    registerNavbar = registerNavbar + '</nav>';

    document.getElementById('userNavBar').innerHTML = registerNavbar;
}



function adminNavBar() {
    let registerNavbar = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">';
    registerNavbar = registerNavbar + '<div class="container-fluid">';
    registerNavbar = registerNavbar + '<a class="navbar-brand" href="#">';
    registerNavbar = registerNavbar + ' <h3>Mobile Shopee</h3>';
    registerNavbar = registerNavbar + '</a>';
    registerNavbar = registerNavbar + '<button class="navbar-toggler" type="button" data-bs-toggle="collapse"';
    registerNavbar = registerNavbar + 'data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"';
    registerNavbar = registerNavbar + 'aria-label="Toggle navigation">';
    registerNavbar = registerNavbar + '<span class="navbar-toggler-icon"></span>';
    registerNavbar = registerNavbar + '</button>';
    registerNavbar = registerNavbar + '<div class="collapse navbar-collapse" id="navbarSupportedContent">';
    registerNavbar = registerNavbar + '<ul class="navbar-nav me-auto mb-2 mb-lg-0">';
    registerNavbar = registerNavbar + '<li class="nav-item">';
    registerNavbar = registerNavbar + '<a class="nav-link" href="../pages/products.html">PRODUCTS</a>';
    registerNavbar = registerNavbar + '</li>';
    registerNavbar = registerNavbar + '<li class="nav-item">';
    registerNavbar = registerNavbar + '<a class="nav-link" href="../pages/profile.html">PROFILE</a>';
    registerNavbar = registerNavbar + '</li>';
    registerNavbar = registerNavbar + '<li class="nav-item">';
    registerNavbar = registerNavbar + '<a class="nav-link" href="../pages/productsDetails.html">PRODUCTS DETAILS</a>';
    registerNavbar = registerNavbar + '</li>';
    registerNavbar = registerNavbar + '<li class="nav-item">';
    registerNavbar = registerNavbar + '<a class="nav-link active" aria-current="page" href="../pages/index.html">LOGOUT</a>';
    registerNavbar = registerNavbar + '</li>';
    registerNavbar = registerNavbar + '</ul>';
    registerNavbar = registerNavbar + '<form class="d-flex">';
    registerNavbar = registerNavbar + '<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">';
    registerNavbar = registerNavbar + '<button class="btn btn-success" type="submit">Search</button>';
    registerNavbar = registerNavbar + '</form>';
    registerNavbar = registerNavbar + '</div>';
    registerNavbar = registerNavbar + '</div>';
    registerNavbar = registerNavbar + '</nav>';

    document.getElementById('adminNavBar').innerHTML = registerNavbar;
}

