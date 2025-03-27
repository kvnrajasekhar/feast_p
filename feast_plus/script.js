

$(document).ready(function() {

    const fooditem = [
        { id: 1, name: "Pizzeria Delights", cuisine: "Italian", rating: 4.5, image: "../products/img/Pizzeria Delights.jfif", description: "Delicious pizzas with fresh ingredients." },
        { id: 2, name: "Golden Dragon", cuisine: "Chinese", rating: 4.7, image: "../products/img/Golden Dragon.jpg", description: "Authentic Chinese flavors." },
        { id: 3, name: "Taco Fiesta", cuisine: "Mexican", rating: 4.2, image: "../products/img/Taco Fiesta.jfif", description: "Spicy and flavorful Mexican dishes." },
        { id: 4, name: "Paneer Butter Masala", cuisine: "Mexican", rating: 4.6, image: "../products/img/Paneer Butter Masala.jfif", description: "Made with Indian spices and flavors." },
        { id: 5, name: "Burger Haven", cuisine: "Fast Food", rating: 4.0, image: "../products/img/Burger.jfif", description: "Juicy burgers and crispy fries." },

        { id: 6, name: "Vegetable Biryani", cuisine: "Indian", rating: 4.3, image: "../products/img/vegetable-biryani.jpg", description: "Aromatic rice with fresh vegetables." },
        { id: 7, name: "Veg Meals", cuisine: "Indian", rating: 4.5, image: "../products/img/veg-meals-1.jpg", description: "A wholesome vegetarian meal." },
        { id: 8, name: "Curd Rice", cuisine: "Indian", rating: 4.2, image: "../products/img/curd-rice.jfif", description: "Refreshing curd rice with spices." },

        // New items from nonveg.html
        { id: 9, name: "Dum Biryani", cuisine: "Mexican", rating: 4.8, image: "../products/img/dum_biryani.jfif", description: "Flavorful dum-cooked biryani." },
        { id: 10, name: "Chicken 65", cuisine: "Indian", rating: 4.6, image: "../products/img/chicken_65.jfif", description: "Spicy and crispy chicken bites." },

        // New items from tiffins.html
        { id: 11, name: "Dosa", cuisine: "Indian", rating: 4.4, image: "../products/img/dosa.jfif", description: "Crispy dosa served with chutney." },
        { id: 12, name: "Idly", cuisine: "Indian", rating: 4.5, image: "../products/img/idly.jfif", description: "Soft and fluffy idly with sambar." },
        { id: 13, name: "Sushi Delight", cuisine: "Chinese", rating: 4.8, image: "../products/img/Sushi Delight.jfif", description: "Fresh and authentic sushi rolls." },
        { id: 14, name: "Pad Thai", cuisine: "Mexican", rating: 4.6, image: "../products/img/Pad Thai.jfif", description: "Classic Thai stir-fried noodles." },
        { id: 15, name: "Shawarma Wrap", cuisine: "Italian", rating: 4.5, image: "../products/img/Shawarma Wrap.jfif", description: "Savory and flavorful shawarma wraps." },
        { id: 16, name: "Greek Salad", cuisine: "Mexican", rating: 4.3, image: "../products/img/Greek Salad.jfif", description: "Fresh and healthy Greek salad." },
        { id: 17, name: "Ramen Bowl", cuisine: "Italian", rating: 4.7, image: "../products/img/Ramen Bowl.jfif", description: "Warm and comforting ramen noodles." },
        { id: 18, name: "Falafel Platter", cuisine: "Chinese", rating: 4.4, image: "../products/img/Falafel Platter.jfif", description: "Crispy falafels with hummus and pita." },
        { id: 19, name: "Tom Yum Soup", cuisine: "Chinese", rating: 4.5, image: "../products/img/Tom Yum Soup.jfif", description: "Spicy and tangy Thai soup." },
        { id: 20, name: "Baklava", cuisine: "Chinese", rating: 4.6, image: "../products/img/Baklava.jfif", description: "Sweet and flaky Greek dessert." }
    ];

    
    const $restaurantList = $("#restaurant-list");

    function displayRestaurants(filter) {
        $restaurantList.empty();
        const filteredRestaurants = filter === "All" ? fooditem : fooditem.filter(rest => rest.cuisine === filter);

        $.each(filteredRestaurants, function(index, restaurant) {
            const $card = $("<div>").addClass("restaurant-card").html(`
                <img src="${restaurant.image}" alt="${restaurant.name}">
                <div class="restaurant-info">
                    <h4>${restaurant.name}</h4>
                    <div class="restaurant-meta">
                        <span class="rating">⭐ ${restaurant.rating}</span>
                        <span>${restaurant.cuisine}</span>
                    </div>
                    <p>${restaurant.description}</p>
                    <a href="../restaurant-menu/resto.html" class="view-menu">View Menu</a>
                </div>
            `);
            $restaurantList.append($card);
        });
    }

    window.filterRestaurants = function (cuisine) {
        $(".filter-button").each(function() {
            $(this).removeClass("active");
            if ($(this).text() === cuisine) {
                $(this).addClass("active");
            }
        });
        displayRestaurants(cuisine);
    };

    displayRestaurants("All");
});



document.addEventListener("DOMContentLoaded", () => {

    const menuItems = [
        {
          id: 1,
          name: "McDonald's",
          description: "Fast Food restaurant located at 123 Main St, Chennai",
          price: 5.99, // Example price, as restaurants might not have a fixed price
          distance: "2 km",
          image: "../restaurant-menu/food-images/mcd.jpg",
          rating: 4.2,
          cuisine: "Fast Food",
          menuUrl: "/restaurant/mcdonalds",
          ingredients: ["Burger Patty", "Lettuce", "Cheese", "Bun"] // Example ingredients
        },
        {
          id: 2,
          name: "Domino's Pizza",
          description: "Pizza restaurant located at 456 Elm St, Chennai",
          price: 8.99, // Example price
          distance: "3 km",
          image: "../restaurant-menu//food-images/dominos.jpg",
          rating: 4.5,
          cuisine: "Pizza",
          menuUrl: "/restaurant/dominos",
          ingredients: ["Cheese", "Tomato Sauce", "Pepperoni", "Dough"] // Example ingredients
        },
        {
          id: 3,
          name: "Cafe Coffee Day",
          description: "Cafe located at 789 Oak St, Chennai",
          price: 4.99, // Example price
          distance: "1.5 km",
          image: "../restaurant-menu//food-images/cafe coffe.png",
          rating: 3.9,
          cuisine: "Cafe",
          menuUrl: "/restaurant/ccd",
          ingredients: ["Coffee Beans", "Milk", "Sugar", "Water"] // Example ingredients
        }
      ];
      

    const menuContainer = document.getElementById("menu-items");

    function renderMenu() {
        menuContainer.innerHTML = "";
        menuItems.forEach(item => {
            const col = document.createElement("div");
            col.className = "col-md-4 mb-4";

            col.innerHTML = `
                <div class="card menu-card">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class=" fw-bold item-price">$${item.price.toFixed(2)}</span>
                            <button class="btn btn-primary cart-btn" onclick="openItemModal(${item.id})">
                                <i class="fas fa-info-circle"></i> View Details
                            </button>
                        </div>
                    </div>
                </div>
            `;

            menuContainer.appendChild(col);
        });
    }

    window.openItemModal = (itemId) => {
        const item = menuItems.find(i => i.id === itemId);
        if (!item) return;

        document.getElementById("itemModalLabel").textContent = item.name;
        document.getElementById("item-image").src = item.image;
        document.getElementById("item-description").textContent = item.description;
        document.getElementById("item-price").textContent = `$${item.price.toFixed(2)}`;

        const ingredientsList = document.getElementById("item-ingredients");
        ingredientsList.innerHTML = "";
        item.ingredients.forEach(ing => {
            const li = document.createElement("li");
            li.textContent = ing;
            ingredientsList.appendChild(li);
        });

        document.getElementById("add-to-cart").onclick = () =>  window.location.href = "../products/product.html";

        const modal = new bootstrap.Modal(document.getElementById("itemModal"));
        modal.show();
    };

    renderMenu();
});



// cart section
const cartItems = [
    { id: 1, name: "Pizza", price: 10.99, quantity: 1, image: "../products/img/Pizzeria Delights.jfif" },
    { id: 2, name: "Burger", price: 7.49, quantity: 2, image: "../products/img/Burger.jfif" }
];

function updateCartUI() {
    const cartContainer = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart-message");
    const orderSummary = document.getElementById("order-summary");

    cartContainer.innerHTML = "";

    if (cartItems.length === 0) {
        emptyCartMessage.style.display = "block";
        orderSummary.style.display = "none";
    } else {
        emptyCartMessage.style.display = "none";
        orderSummary.style.display = "block";

        let subtotal = 0;
        cartItems.forEach(item => {
            subtotal += item.price * item.quantity;

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h5>${item.name}</h5>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <div class="quantity-controls">
                    <button onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
                <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
            `;

            cartContainer.appendChild(cartItem);
        });

        document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById("total").textContent = `$${(subtotal + 2.99).toFixed(2)}`;
    }
}

function changeQuantity(id, change) {
    const item = cartItems.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            const index = cartItems.indexOf(item);
            cartItems.splice(index, 1);
        }
        updateCartUI();
    }
}

updateCartUI();
