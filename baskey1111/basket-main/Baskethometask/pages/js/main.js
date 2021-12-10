basketProductCount();

addCart();

let hiddenIdData = document.querySelectorAll("tr"),
    removeButton = document.querySelectorAll(".remove"),
    buttonsToArray = Array.prototype.slice.call(removeButton);
for (let i = 0; i < buttonsToArray.length; i++) {
    buttonsToArray[i].addEventListener("click", function (e) {
        let hiddenDataId = hiddenIdData[i].firstElementChild.innerText,
            index = buttonsToArray.indexOf(e.target);
        // isExist = getDataFromStorage.find(data => data.id == hiddenDataId);
        buttonsToArray.splice(index, 1);
        let getDataFromStorage = JSON.parse(localStorage.getItem("basket"));
        getDataFromStorage.splice(index, 1);
        removeButton[i].parentElement.parentElement.remove();
        localStorage.setItem("basket", JSON.stringify(getDataFromStorage));
        document.querySelector("sup").innerText = JSON.parse(localStorage.getItem("basket")).length;
        // if (isExist.id == hiddenDataId) {

        // }
    });
}

function addCart() {
    let cartItems = JSON.parse(localStorage.getItem("basket"));
    if (cartItems) {
        Object.values(cartItems).map(item => {
            let tBody = document.querySelector("tbody"),
                tRow = document.createElement("tr"),
                tHead = document.querySelectorAll("th");
            // idData
            let idData = document.createElement("td");
            idData.className = "id-data";
            idData.innerText = item.id;
            // titleData
            let titleData = document.createElement("td");
            titleData.innerText = item.title;
            // imageData
            let imageData = document.createElement("td");
            // img
            let img = document.createElement("img");
            img.style.height = "50px";
            img.style.width = "100px";
            img.src = item.image;
            // priceData
            let priceData = document.createElement("td");
            priceData.innerText = item.price;
            // countData
            let countData = document.createElement("td");
            countData.innerText = item.count;
            // buttonData
            let buttonData = document.createElement("td");
            // button
            let button = document.createElement("button");
            button.className = "remove";

            button.innerText = "x";

            tRow.append(idData, titleData, imageData, priceData, priceData, countData, buttonData);
            imageData.appendChild(img);
            buttonData.appendChild(button);
            tBody.appendChild(tRow);
        });
    }
}

function basketProductCount() {
    document.querySelector("sup").innerText = JSON.parse(localStorage.getItem("basket")).length;
}