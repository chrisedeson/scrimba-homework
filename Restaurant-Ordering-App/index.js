import { menuArray } from "./data.js";

const menuElement = document.querySelector(".menu");
const cartArray = []; // Array to store items added to the cart

function renderMenu() {
    menuElement.innerHTML = ''; // Clear menu to avoid duplicating items
    menuArray.forEach(item => {
        menuElement.innerHTML += `
            <div class=menu-items>
                <p class="emoji">${item.emoji}</p>
                <div class="item-details">
                    <h2 class="item-name">${item.name}</h2>
                    <p class="ingredients">${item.ingredients.join(", ")}</p>
                    <p class="price">$${item.price}</p>
                </div>
                <button class="add-btn" data-add="${item.id}">+</button>
            </div>`;
    });
}

renderMenu();

document.addEventListener("click", function(event) {
    if (event.target.dataset.add) {
        addToCart(Number(event.target.dataset.add)); // Convert itemId to a number
    } else if (event.target.classList.contains("remove-btn")) {
        const itemIndex = Number(event.target.dataset.index);
        removeFromCart(itemIndex);
    } else if (event.target.classList.contains("complete-order-btn")) {
        showPaymentDialog();
    } else if (event.target.classList.contains("pay-btn")) {
        handlePayment();
    }
});

function addToCart(itemId) {
    const targetIdObj = menuArray.find(item => item.id === itemId);
    
    if (targetIdObj) {
        const cartItem = cartArray.find(item => item.id === itemId);
        
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cartArray.push({ ...targetIdObj, quantity: 1 });
        }
        
        renderOrder(); // Update the order display
    }
}

function removeFromCart(itemIndex) {
    if (cartArray[itemIndex].quantity > 1) {
        cartArray[itemIndex].quantity -= 1;
    } else {
        cartArray.splice(itemIndex, 1);
    }
    renderOrder();
}

function renderOrder() {
    // Remove any existing order container to reset
    let orderContainerElement = document.querySelector(".order-container");
    if (orderContainerElement) {
        orderContainerElement.remove();
    }

    // If there are items in the cart, display the order summary
    if (cartArray.length > 0) {
        orderContainerElement = document.createElement("div");
        orderContainerElement.classList.add("order-container");

        const orderHeaderText = document.createElement("h3");
        orderHeaderText.textContent = "Your Order";
        orderContainerElement.append(orderHeaderText);
        menuElement.append(orderContainerElement);

        let totalPrice = 0;
        cartArray.forEach((item, index) => {
            const orderDivElement = document.createElement("div");
            orderDivElement.classList.add("order-item");

            const itemTotalPrice = item.price * item.quantity;
            totalPrice += itemTotalPrice;

            orderDivElement.innerHTML = `
                <h2>${item.name} (${item.quantity})</h2>
                <button class="remove-btn" data-index="${index}">remove</button>
                <p class="item-total-price">$${itemTotalPrice}</p>
            `;

            orderContainerElement.append(orderDivElement);
        });

        const totalElement = document.createElement("div");
        totalElement.classList.add("total-price");
        
        // Create the "Total Price" label and value
        const labelSpan = document.createElement("span");
        labelSpan.classList.add("label"); // Corrected this line
        labelSpan.textContent = "Total Price:";

        const valueSpan = document.createElement("span");
        valueSpan.classList.add("value");
        valueSpan.textContent = `$${totalPrice}`;

        // Append to the container
        totalElement.appendChild(labelSpan);
        totalElement.appendChild(valueSpan);

        orderContainerElement.append(totalElement);

        // Add "Complete Order" button if cart is not empty
        const completeOrderBtn = document.createElement("button");
        completeOrderBtn.classList.add("complete-order-btn");
        completeOrderBtn.textContent = "Complete Order";
        orderContainerElement.append(completeOrderBtn);
    }
}

function showPaymentDialog() {
    const dialog = document.createElement("dialog");
    dialog.classList.add("payment-dialog");

    dialog.innerHTML = `
        <h2>Enter Card Details</h2>
        <label for="card-name"></label>
        <input type="text" id="card-name" class="card-name" placeholder="Enter your name" required>
        <label for="card-number"></label>
        <input type="text" id="card-number" class="card-number" placeholder="Enter card number" required>
        <label for="card-cvv"></label>
        <input type="text" id="card-cvv" class="card-cvv" placeholder="Enter CVV" required>
        <div class="dialog-buttons">
            <button class="pay-btn">Pay</button>
        </div>
    `;

    // Append the dialog to the body
    document.body.append(dialog);

    // Show the dialog
    dialog.showModal();

    // // Add functionality to close the dialog
    // dialog.querySelector(".close-btn").addEventListener("click", () => {
    //     dialog.close(); // Close the dialog
    //     dialog.remove(); // Remove it from the DOM
    // });

    // // Add functionality for the Pay button (optional)
    // dialog.querySelector(".pay-btn").addEventListener("click", () => {
    //     alert("Payment processing...");
    //     dialog.close(); // Close the dialog after action
    //     dialog.remove(); // Remove it from the DOM
    // });
}

function handlePayment() {
    const cardNumber = document.querySelector(".card-number").value;
    const cardName = document.querySelector(".card-name").value;
    const cardCvv = document.querySelector(".card-cvv").value;

    if (cardNumber && cardName && cardCvv) {
        document.querySelector(".payment-dialog").remove();
        thankUser(cardName);
    } else {
        alert("All fields are required!");
    }
}

function thankUser(cardName) {
    const firstName = cardName.split(" ")[0];
    const thankYouMessage = document.createElement("p");
    thankYouMessage.classList.add("thank-you-message")
    thankYouMessage.textContent = `Thanks, ${firstName}! Your order is on the way!`;
    menuElement.append(thankYouMessage);

    // Clear the cart array and re-render the cart
    cartArray.length = 0;  // Empty the cart array
    renderOrder();  // Re-render to remove cart items from the display
}
