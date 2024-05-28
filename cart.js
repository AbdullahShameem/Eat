document.addEventListener('DOMContentLoaded', function () {
    const checkoutButton = document.getElementById('checkout-button');
    const paymentForm = document.getElementById('payment-form');
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalAmountElement = document.getElementById('total-amount');

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    function displayCartItems() {
        cartItemsContainer.innerHTML = '';
        let totalAmount = 0;

        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p>${item.name}</p>
                <p>$${item.price}</p>
            `;
            cartItemsContainer.appendChild(itemElement);
            totalAmount += item.price;
        });

        totalAmountElement.textContent = totalAmount.toFixed(2);
    }

    checkoutButton.addEventListener('click', function () {
        document.getElementById('cart').style.display = 'none';
        document.getElementById('payment-method').style.display = 'block';
    });

    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;

        const cardError = document.getElementById('card-error');
        const expiryError = document.getElementById('expiry-error');
        const cvvError = document.getElementById('cvv-error');

        cardError.textContent = '';
        expiryError.textContent = '';
        cvvError.textContent = '';

        let isValid = true;

        if (!/^\d{16}$/.test(cardNumber)) {
            cardError.textContent = 'Card number must be 16 digits.';
            isValid = false;
        }

        if (!/^\d{4}$/.test(expiryDate)) {
            expiryError.textContent = 'Expiry date must be 4 digits (MMYY).';
            isValid = false;
        }

        if (!/^\d{3}$/.test(cvv)) {
            cvvError.textContent = 'CVV must be 3 digits.';
            isValid = false;
        }

        if (isValid) {
            alert('Payment Successful!');
            localStorage.removeItem('cartItems');
            displayCartItems();
            document.getElementById('cart').style.display = 'block';
            document.getElementById('payment-method').style.display = 'none';
        }
    });

    displayCartItems();
});
