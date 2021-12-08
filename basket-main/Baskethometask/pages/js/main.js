basketProductCount();

addCart();

let hiddenIdData = document.querySelectorAll("tr"),
    removeButton = document.querySelectorAll("button");
for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener("click", function (e) {
        e.preventDefault();
        let getDataFromStorage = JSON.parse(localStorage.getItem("basket")),
            hiddenDataId = hiddenIdData[i].firstElementChild.innerText,
            isExist = getDataFromStorage.find(data => data.id == hiddenDataId);
        // console.log(`i: ${i}`);
        if (isExist.id == hiddenDataId) {
            getDataFromStorage.splice(i-1, 1);
            console.log(`i: ${i}`);
            removeButton[i].parentElement.parentElement.remove();
            localStorage.setItem("basket", JSON.stringify(getDataFromStorage));
        }
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