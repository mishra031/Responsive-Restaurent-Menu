<script>
/* =========================
   GLOBAL STATE
========================= */
let cart = [];
const DELIVERY_FEE = 50;
const GST_RATE = 0.05;

/* =========================
   CART UI TOGGLE
========================= */
function toggleCart() {
  document.getElementById("cartOverlay").classList.toggle("active");
}

/* =========================
   ADD TO CART
========================= */
function addToCart(name, price, type) {
  const item = cart.find(i => i.name === name);

  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, type, qty: 1 });
  }

  updateCartUI();
}

/* =========================
   UPDATE CART UI
========================= */
function updateCartUI() {
  const container = document.getElementById("cartItemsContainer");
  const footer = document.getElementById("cartFooter");
  const badge = document.getElementById("headerCartCount");

  container.innerHTML = "";

  if (cart.length === 0) {
    footer.style.display = "none";
    badge.style.display = "none";
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <p>Your cart is empty</p>
      </div>`;
    return;
  }

  footer.style.display = "block";
  badge.style.display = "flex";
  badge.textContent = cart.reduce((sum, i) => sum + i.qty, 0);

  cart.forEach((item, index) => {
    container.innerHTML += `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-controls">
            <div class="qty-control">
              <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
              <span class="qty-display">${item.qty}</span>
              <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            </div>
          </div>
        </div>
        <div>
          <div class="cart-item-price">₹${item.price * item.qty}</div>
          <button class="remove-item" onclick="removeItem(${index})">Remove</button>
        </div>
      </div>`;
  });

  calculateTotals();
}

/* =========================
   QUANTITY CONTROL
========================= */
function changeQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  updateCartUI();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCartUI();
}

/* =========================
   TOTAL CALCULATION
========================= */
function calculateTotals() {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const gst = subtotal * GST_RATE;
  const total = subtotal + gst + DELIVERY_FEE;

  document.getElementById("subtotal").textContent = `₹${subtotal}`;
  document.getElementById("gst").textContent = `₹${gst.toFixed(2)}`;
  document.getElementById("totalAmount").textContent = `₹${total.toFixed(2)}`;
}

/* =========================
   FILTER MENU
========================= */
function filterMenu(type) {
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  document.querySelectorAll(".menu-item, .combo-item").forEach(item => {
    const categories = item.dataset.category || "";
    if (type === "all" || categories.includes(type)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

/* =========================
   ORDER PROCESS
========================= */
function processOrder() {
  const address = document.getElementById("deliveryAddress").value.trim();
  const phone = document.getElementById("deliveryPhone").value.trim();

  if (!address || !phone) {
    alert("Please enter delivery address and contact number.");
    return;
  }

  document.body.insertAdjacentHTML("beforeend", `
    <div class="success-message">
      <div class="success-icon">✅</div>
      <div class="success-text">Order Placed Successfully!</div>
      <div class="success-subtext">Thank you for ordering from Spice Garden</div>
    </div>`);

  setTimeout(() => {
    document.querySelector(".success-message").remove();
    cart = [];
    toggleCart();
    updateCartUI();
  }, 3000);
}
</script>
