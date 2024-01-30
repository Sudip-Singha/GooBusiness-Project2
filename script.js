const service = document.querySelector("#select-service");
const totalPrice = document.querySelector(".total-price");
const customPrice = document.querySelector(".custom-price");
const customPriceInput = document.querySelector(".custom-price-input");
const orderBtn = document.querySelector(".order-btn");
const userInputs = document.querySelectorAll(".user-input");
const countryId = document.querySelector("#phone");


service.addEventListener("change", () => {
    totalPrice.innerText = "Total Price: $" + service.options[service.selectedIndex].value;
    if (service.options[service.selectedIndex].innerText === "Custom") {
        customPrice.classList.remove("hidden");
        customPriceInput.value = 0

    } else {
        customPrice.classList.add("hidden");
    }
})

customPriceInput.addEventListener("input", () => {
    totalPrice.innerText = "Total Price: $" + customPriceInput.value;
})

orderBtn.addEventListener("click", (e) => {
    if (userInputs[0].value && userInputs[1].value && userInputs[2].value && service.selectedIndex != 0 && countryId.selectedIndex != 0) {
        userInputs.forEach((input) => {
            input.value = ''
        })
        service.selectedIndex = 0;
        countryId.selectedIndex = 0;
        totalPrice.innerText = "Total Price: ";
        customPriceInput.value = ''
        customPrice.classList.add("hidden")
    }

})



