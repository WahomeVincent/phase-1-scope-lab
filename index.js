// Write your solution in this file!

var customerName = "bob";

function upperCaseCustomerName() {
    return window.customerName.toUpperCase();
}

upperCaseCustomerName();

function setBestCustomer() {
    window.bestCustomer = 'not bob';
  }
  
function overwriteBestCustomer() {
    window.bestCustomer = 'maybe bob';
}

const LeastFavoriteCustomer = "Maybe";

function changeLeastFavoriteCustomer() {
    LeastFavoriteCustomer = "Nop";
    return LeastFavoriteCustomer;

}