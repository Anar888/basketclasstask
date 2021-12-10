let addBtns = document.querySelectorAll(".btn-primary");
function createBasketStorage() {
    if (!localStorage.getItem("basket")) {
        localStorage.setItem("basket", JSON.stringify([]));
    }
}
createBasketStorage();
function basketProductCount() {
    document.querySelector("sup").innerText = JSON.parse(localStorage.getItem("basket")).length;
}

basketProductCount();

addBtns.forEach(btn => {
    btn.addEventListener("click", function (ev) {
        ev.preventDefault();
        let Id = this.parentElement.parentElement.getAttribute("data-id"),
            Price = this.previousElementSibling.innerText,
            Title = this.parentElement.firstElementChild.innerText,
            Image = this.parentElement.previousElementSibling.src;

        createBasketStorage();

        let basket = getBasket(Id, Price, Title, Image);

        localStorage.setItem("basket", JSON.stringify(basket));

        basketProductCount();
    })
})
function getBasket(Id, Price, Title, Image) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    let existProduct = basket.find(item => item.id == Id);

    if (existProduct == undefined) {
        basket.push({
            id: Id,
            price: Price,
            title: Title,
            image: Image,
            count: 1
        })
    }
    else {
        existProduct.count++;
    }
    return basket;
}