document.addEventListener('DOMContentLoaded', function() {
    // Food.js functionality
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const foodCard = this.parentElement;
            const foodName = foodCard.querySelector('p:nth-of-type(1)').textContent;
            const foodPrice = parseFloat(foodCard.querySelector('p:nth-of-type(3)').textContent.replace('Price: $', ''));

            const cartItem = {
                name: foodName,
                price: foodPrice
            };

            cart.push(cartItem);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${foodName} has been added to your cart.`);
        });
    });

    // Carousel functionality
    let reviewCard = document.querySelectorAll(".reviewCard");
    let foodCard = document.querySelectorAll(".foodCard");

    let count = 0;

    reviewCard.forEach(function(card, index){
        card.style.left = `${index * 100}%`;
    });

    function myFun(){
        reviewCard.forEach(function(curCard){
            curCard.style.transform = `translateX(-${count * 100}%)`;
        });
    }

    setInterval(function(){
        count++;
        if(count == reviewCard.length){
            count = 0;
        }
        myFun();
    }, 3000);

    // Food card detail functionality
    foodCard.forEach(function(cards){
        cards.addEventListener("click", function(){
            console.log(cards);
            let div = document.createElement("div");
            div.classList.add("cardDetail");
            div.innerHTML = `
                <i id="icons" class="fa-solid fa-xmark"></i>
                <img src="${cards.firstElementChild.src}" alt="">
                <p>Eat Best Eat Delicious</p>
                <p>"Enjoy our delicious dishes, made with fresh ingredients and bursting with flavor."</p>
            `;
            document.querySelector("body").appendChild(div);

            document.getElementById("icons").addEventListener("click", function(){
                div.remove();
            });
        });
    });

    // Cart functionality
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    const checkoutButton = document.getElementById('checkout-button');
    const paymentMethod = document.getElementById('payment-method');
    const paymentForm = document.getElementById('payment-form');

    let totalAmount = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `<p>${item.name}</p><p>$${item.price.toFixed()}</p>`;
        cartItemsContainer.appendChild(cartItemElement);
        totalAmount += item.price;
    });

    totalAmountElement.textContent = totalAmount.toFixed(2);

    checkoutButton.addEventListener('click', function() {
        paymentMethod.style.display = 'block';
    });

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Payment successful!');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    });

   document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const password = document.getElementById('password').value;

    // For now, just log the values to the console
    console.log('Email:', email);
    console.log('Contact Number:', contact);
    console.log('Password:', password);

    // You can add further logic here to handle login, e.g., sending data to a server
});
})