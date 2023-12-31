let totalPurchased = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productPrice = parseFloat(this.parentElement.getAttribute('data-price'));
        totalPurchased += productPrice;

        // Show notification
        alert(`You have purchased items worth Birr ${totalPurchased.toFixed(2)}`);
    });
});