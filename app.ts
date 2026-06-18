function openOrderModal(
    name: string,
    price: string
): void {

    const modal =
        document.getElementById("orderModal");

    const productName =
        document.getElementById("selectedProductName");

    const productInput =
        document.getElementById("productInput") as HTMLInputElement;

    const priceInput =
        document.getElementById("priceInput") as HTMLInputElement;

    modal?.classList.remove("hidden");

    if (productName) {
        productName.innerText =
            `Ordering: ${name}`;
    }

    productInput.value = name;
    priceInput.value = price;

    document.body.style.overflow = "hidden";
}

function closeModal(): void {

    const modal =
        document.getElementById("orderModal");

    modal?.classList.add("hidden");

    document.body.style.overflow = "auto";
}
