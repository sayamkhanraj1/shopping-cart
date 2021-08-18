function updateProductNumber(product, price, isncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();


} 
//
function inputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
//
function calculateTotal(){
   
    const phoneTotal = inputValue('phone') * 1219;
    const caseTotal = inputValue('case') * 59;
    const totalPrice = phoneTotal + caseTotal;
    const tax = totalPrice / 10;
    const totalAmount = totalPrice + tax;
    // update on the html
    document.getElementById('sub-total').innerText = totalPrice;
    document.getElementById('tax-amount').innerText = tax; 
    document.getElementById('total-amount').innerText = totalAmount;
    


}

// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function(){

    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){

    updateProductNumber('phone', 1219, false);
})

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function(){

    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){

    updateProductNumber('case', 59, false);
    
});