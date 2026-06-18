function openOrderModal(name, price) {
    document
        .getElementById("orderModal")
        .classList.remove("hidden");

    document
        .getElementById("selectedProductName")
        .innerText = "Ordering: " + name;

    document
        .getElementById("productInput")
        .value = name;

    document
        .getElementById("priceInput")
        .value = price;

    document.body.style.overflow = "hidden";
}

function closeModal() {
    document
        .getElementById("orderModal")
        .classList.add("hidden");

    document.body.style.overflow = "auto";
}
