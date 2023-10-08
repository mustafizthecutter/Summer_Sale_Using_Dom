function getItemInfo(textId, priceId) {
    const textNames = document.getElementById(textId).childNodes[3].childNodes[3].innerText;
    const priceValue = document.getElementById(priceId).childNodes[3].childNodes[5].innerText;
    const newTotalPrice = parseFloat(priceValue.split(' ')[0]);



    const previousTotalPriceField = document.getElementById('total-price');
    const previousTotalString = previousTotalPriceField.innerText;
    const previousTotalPriceValue = parseFloat(previousTotalString);

    const sumPriceTotal = previousTotalPriceValue + newTotalPrice;
    previousTotalPriceField.innerText = sumPriceTotal;



    if (sumPriceTotal > 0) {
        document.getElementById('purchase-btn').disabled = false;
        if (sumPriceTotal >= 200) {
            document.getElementById('apply-btn').disabled = false;
            document.getElementById('apply-btn').addEventListener('click', function () {
                const couponField = document.getElementById('coupon-field').value;
                if (couponField === 'SELL20') {
                    const discountPrice = sumPriceTotal * (20 / 100);
                    console.log(discountPrice);
                    const discountPriceField = document.getElementById('discount-price');
                    const discountPriceString = discountPriceField.innerText;
                    const discountPriceValue = parseFloat(discountPriceString);
                    discountPriceField.innerText = discountPrice.toFixed(2);

                    const totalPrice = document.getElementById('total');
                    const totalPriceString = totalPrice.innerText;
                    const totalPriceValue = parseFloat(totalPriceString);
                    const total = sumPriceTotal - discountPrice;
                    totalPrice.innerText = total.toFixed(2);
                }
            })



        }

    }

    // previousTotalPrice.innerText = sumPriceTotal;


    // const price = sumPriceTotal + newTotalPrice;


    // value = value

    setText('cart-list-container', textNames);

}
function getPrice(value) {
    const getValues = getItemInfo(value);
    parseFloat(previousTotalPriceString);
    console.log(previousTotalPrice);
}

function setText(appendElement, textValue) {
    const cartContainer = document.getElementById(appendElement);
    const count = cartContainer.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = ` ${count + 1.} ${'.'} ${textValue}`
    cartContainer.appendChild(p);
}

