const defaultConfig = {
  opening_hours: "Open Daily: 11 AM – 11 PM",
  contact_info: "+91 98765 43210",
  address: "MG Road, Bangalore",
  footer_disclaimer: "Prices inclusive of taxes"
};

let cart = [];

onConfigChange(defaultConfig);

function onConfigChange(config) {
  document.getElementById("topOpeningHours").textContent = config.opening_hours;
  document.getElementById("topContactInfo").textContent = config.contact_info;
  document.getElementById("footerAddress").textContent = config.address;
  document.getElementById("footerContact").textContent = config.contact_info;
  document.getElementById("footerDisclaimer").textContent = config.footer_disclaimer;
}

/* CART */
function addToCart(name, price) {
  const item = cart.find(i => i.name === name);
  if (item) item.qty++;
  else cart.push({ name, price, qty: 1 });
  updateCart();
}

function updateCart() {
  const container = document.getElementById("cartItemsContainer");
  const badge = document.getElementById("headerCartCount");

  container.innerHTML = "";
  let subtotal = 0;
  let count = 0;

  cart.forEach(item => {
    subtotal += item.price * item.qty;
    count += item.qty;

    container.innerHTML += `
      <div class="cart-item">
        <span>${item.name} x ${item.qty}</span>
        <span>₹${item.price * item.qty}</span>
      </div>`;
  });

  badge.textContent = count;
  document.getElementById("subtotal").textContent = "₹" + subtotal;
  document.getElementById("gst").textContent = "₹" + Math.round(subtotal * 0.05);
  document.getElementById("totalAmount").textContent =
    "₹" + (subtotal + Math.round(subtotal * 0.05) + 50);
}

function toggleCart() {
  document.getElementById("cartOverlay").classList.toggle("active");
}

/* FILTER */
function filterMenu(type) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");

  document.querySelectorAll(".menu-item").forEach(item => {
    item.style.display =
      type === "all" || item.dataset.category === type ? "block" : "none";
  });
}

/* ORDER */
function processOrder() {
  alert("Order placed successfully!");
  cart = [];
  updateCart();
  toggleCart();
}
