function updateQuantity(quantityId, change) {
    // Get the current quantity value
    var quantityElement = document.getElementById(quantityId);
    var quantityValueElement = quantityElement.querySelector('.quantity-value');
    var currentQuantity = parseInt(quantityValueElement.textContent);

    // Update the quantity with the change
    var newQuantity = currentQuantity + change;

    // Ensure the quantity is at least 1
    if (newQuantity < 1) {
        newQuantity = 1;
    }

    // Update the quantity value in the HTML
    quantityValueElement.textContent = newQuantity;

    // Update the subtotal
    updateSubtotal(quantityId, newQuantity);
}

function updateTotal() {
    // Calculate the total based on all subtotals
    var subtotals = document.querySelectorAll('.subtotal');
    var total = 0;
    subtotals.forEach(function (subtotal) {
        total += parseFloat(subtotal.textContent.replace('$', ''));
    });

    // Round the total to the nearest integer
    total = Math.round(total);

    // Update the total value in the HTML
    var totalElement = document.getElementById('total');
    totalElement.textContent = 'Total: $' + total;

    // Update other parts of your application if needed
    // ...
}

function updateSubtotal(quantityId, newQuantity) {
    // Get the price and update the subtotal
    var priceElement = document.querySelector('#' + quantityId).previousElementSibling;
    var subtotalElement = document.querySelector('#' + quantityId).nextElementSibling;
    var price = parseInt(priceElement.textContent.replace('$', ''));
    var subtotal = price * newQuantity;

    // Round the subtotal to the nearest integer
    subtotal = Math.round(subtotal);

    // Update the subtotal value in the HTML
    subtotalElement.textContent = '$' + subtotal;

    // Update the total
    updateTotal();
}

function deleteProduct(quantityId) {
    // Get the parent row and remove it
    var row = document.getElementById(quantityId).parentNode;
    row.parentNode.removeChild(row);

    // Update the total after removing the product
    updateTotal();
}


function checkout() {
    // Add checkout functionality here
    // For example, display an alert or redirect to a payment page
    alert('Checkout functionality will be implemented here.');
}
