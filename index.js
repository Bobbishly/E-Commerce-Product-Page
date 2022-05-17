var addition = document.getElementById("addingOne");
var subtraction = document.getElementById("subtractingOne");
var ordydee = document.getElementById("numberOfOrders");
var add_To_Cart = document.getElementById("addToCart");
var damny = document.getElementById("damn");

add_To_Cart.addEventListener("click", () => {
    console.log(ordydee.value);
    damny.appendChild(document.createTextNode(ordydee.value))
    ordydee.value = "";
})

addition.addEventListener("click", () => {
    ordydee.value++;
})

subtraction.addEventListener("click", () => {
    if (ordydee.value > 0) {
    ordydee.value--;
    }
})