// count quantity 
function handleQuantity(product, price, operator) {
    const inputField = document.getElementById(product + "-input")
    const inputText = inputField.value;
    const inputValue = parseInt(inputText);
    let updateField = inputValue + 1
    if (operator == 'plus') {
        updateField = inputValue + 1
    } else if (inputValue < 1) {
        return
    }
    else {
        updateField = inputValue - 1
    }
    inputField.value = updateField
    const productPrice = updateField * price
    updateProductTotal(productPrice, product)
}
// update price per product
function updateProductTotal(price, product) {
    document.getElementById(product + '-price').innerText = price;
    updateTotalPrice();
}
// update subtotal and total with calculate tax 
updateTotalPrice();
function updateTotalPrice() {
    const products = document.getElementsByClassName('product-total')
    let productsTotalPrice = 0
    for (const product of products) {
        const productPriceText = product.innerText
        productsTotalPrice = productsTotalPrice + parseInt(productPriceText)
    };
    document.getElementById('subTotal-display').innerText = productsTotalPrice;
    const taxTotal = productsTotalPrice / 10;
    document.getElementById('tax-display').innerText = taxTotal
    document.getElementById('total-display').innerText = productsTotalPrice + taxTotal;
}
 const removeImages = document.getElementsByClassName('remove-item')
 for (const items of removeImages) {
     items.addEventListener('click', function (e) {
         console.log(e.target)
         e.target.parentNode.parentNode.parentNode.remove()
         updateTotalPrice();
     })
 }
