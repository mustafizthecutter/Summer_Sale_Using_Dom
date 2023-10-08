function getItemInfo(textId, priceId) {
    const textNames = document.getElementById(textId).childNodes[3].childNodes[3].innerText;
    const priceValue = document.getElementById(priceId).childNodes[3].childNodes[5].innerText;
    const newTotalPrice = parseFloat(priceValue.split(' ')[0]);



    const previousTotalPrice = document.getElementById('total-price');
    const previousTotalString = previousTotalPrice.innerText;
    const previousTotalPriceValue = parseFloat(previousTotalString);

    const sumPriceTotal = previousTotalPriceValue + newTotalPrice;
    previousTotalPrice.innerText = sumPriceTotal;
    console.log(sumPriceTotal);

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

