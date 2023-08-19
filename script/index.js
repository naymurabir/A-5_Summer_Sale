let totalCost = 0
function handleCLikBtn(target) {
    // Step-1
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const newCart = document.createElement('li')
    newCart.innerText = itemName
    const cartItems = document.getElementById('cart-items')
    cartItems.appendChild(newCart)

    // Step-2
    const itemPrice = target.childNodes[3].childNodes[5].childNodes[1].innerText;
    const totalPrice = document.getElementById('total-price')
    totalCost = parseInt(totalCost) + parseInt(itemPrice)
    totalPrice.innerText = totalCost


}
