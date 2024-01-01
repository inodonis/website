let totalPurchased = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productPrice = parseFloat(this.parentElement.getAttribute('data-price'));
        totalPurchased += productPrice;

        alert(`You have purchased items worth Birr ${totalPurchased.toFixed(2)}`);
    });
});

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission
    alert("Thank you for contacting us!");
  });