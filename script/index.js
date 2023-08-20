// Coupon Field
document.getElementById('coupon-field').addEventListener('keyup', function (event) {
    const applyButton = document.getElementById('apply-btn')
    // console.log(event.target.value);
    const couponCode = event.target.value

    if (couponCode === "SELL200") {
        applyButton.style.backgroundColor = '#E527B2'
        applyButton.removeAttribute('disabled')

    } else {
        applyButton.style.backgroundColor = '#F9A8D4'
        applyButton.setAttribute('disabled', true)
    }

})

// Apply Button Action
document.getElementById('apply-btn').addEventListener('click', function () {
    // Step - 3
    const discountAmount = document.getElementById('discount-amount')
    const discountedTotalAmount = document.getElementById('discount-total')

    if (totalCost > 200) {
        const discount = (totalCost / 100) * 20
        const discountUpdate = totalCost - discount
        discountAmount.innerText = parseInt(discount).toFixed(2)
        discountedTotalAmount.innerText = discountUpdate.toFixed(2)
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
    const perItemPrice = target.childNodes[3].childNodes[5].childNodes[1].innerText;
    const itemTotalPrice = document.getElementById('total-price')
    totalCost = parseInt(totalCost) + parseInt(perItemPrice)
    itemTotalPrice.innerText = totalCost.toFixed(2)

}