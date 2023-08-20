// Coupon Button
document.getElementById('coupon-field').addEventListener('keyup', function (event) {
    const applyButton = document.getElementById('apply-btn')
    const couponCode = event.target.value
    // console.log(event.target.value);
    if (couponCode === "SELL200") {
        applyButton.style.backgroundColor = '#E527B2'
        return applyButton.removeAttribute('disabled')

    } else {
        applyButton.style.backgroundColor = '#F9A8D4'
        return applyButton.setAttribute('disabled', true)
    }

})

// Cart Section Calculation
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
    totalPrice.innerText = totalCost.toFixed(2)

}

