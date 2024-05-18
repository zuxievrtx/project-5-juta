// Mengambil data produk dari file JSON
fetch("./products.json")
  .then((response) => response.json())
  .then((products) => {
    // Fungsi untuk merender produk
    function renderProducts() {
      const productContainer = document.getElementById("item-3-2");
      productContainer.innerHTML = "";
      products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product-details-box");
        productElement.innerHTML = `
          <div class="product-img">
            <img class="img-fluid img" src="${product.image}" alt="${
          product.name
        }">
          </div>
          <div class="product-content">
            <div class="description d-flex align-items-center justify-content-between gap-1">
              <div>
                <div class="d-flex align-items-center gap-2">
                  <img class="img-fluid" src="assets/images/svg/veg.svg" alt="non-veg">
                  <h6 class="product-name">${product.name}</h6>
                </div>
                <div class="rating-section">
                <ul class="rating-star">
                  ${generateRatingStars(product.rating)}
                </ul>
                <h6 class="rating-amount">${product.rating_amount} Ratings</h6>
              </div>
                <p>${product.description}</p>
              </div>
              <div class="product-box-price">
                <h2 class="theme-color fw-semibold">$${product.price}</h2>
                <button class="btn theme-outline add-btn mt-0" data-product-id="${
                  product.id
                }">+Add</button>
              </div>
            </div>
          </div>
        `;
        productContainer.appendChild(productElement);
      });

      // Menambahkan event listener untuk tombol "Add"
      const addButtons = document.querySelectorAll(".add-btn");
      addButtons.forEach((button) => {
        button.addEventListener("click", addToCart);
      });

      // Memuat data keranjang belanja dari penyimpanan lokal
      loadCartFromLocalStorage();
    }

    // Fungsi untuk menghasilkan elemen bintang rating
    function generateRatingStars(rating) {
      let stars = "";
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating - fullStars >= 0.5;

      for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
          stars += '<li><i class="ri-star-fill star"></i></li>';
        } else if (hasHalfStar && i === fullStars + 1) {
          stars += '<li><i class="ri-star-half-fill star"></i></li>';
        } else {
          stars += '<li><i class="ri-star-line star-o"></i></li>';
        }
      }

      return stars;
    }

    // Fungsi untuk menambahkan produk ke keranjang belanja
    function addToCart(event) {
      const productId = event.target.dataset.productId;
      const product = products.find((p) => p.id == productId);
      const cartItemsContainer = document.getElementById("cart-items");
      const existingItem = Array.from(cartItemsContainer.children).find(
        (item) => item.dataset.productId == productId
      );

      if (existingItem) {
        // Jika item sudah ada di keranjang, tambahkan kuantitas
        const quantityInput = existingItem.querySelector(
          'input[type="number"]'
        );
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateTotalPrice();
        saveCartToLocalStorage();
      } else {
        // Jika item belum ada di keranjang, tambahkan item baru
        const cartItem = document.createElement("li");
        cartItem.dataset.productId = productId;
        cartItem.innerHTML = `
          <div class="horizontal-product-box">
            <div class="product-content">
              <div class="d-flex align-items-center justify-content-between">
                <h5>${product.name}</h5>
                <h6 class="product-price">$${product.price}</h6>
              </div>
              <h6 class="ingredients-text">${product.description}</h6>
              <div class="d-flex align-items-center justify-content-between mt-md-2 mt-1 gap-1">
                <h6 class="place">Serve 1</h6>
                <div class="plus-minus">
                  <i class="ri-subtract-line sub"></i>
                  <input type="number" value="1" min="1" max="10">
                  <i class="ri-add-line add"></i>
                </div>
              </div>
            </div>
          </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        updateTotalPrice();
        saveCartToLocalStorage();
      }
    }

    // Fungsi untuk memperbarui total harga
    // Fungsi untuk memperbarui total harga
    function updateTotalPrice() {
      const cartItemsContainer = document.getElementById("cart-items");
      const cartItems = Array.from(cartItemsContainer.children);
      let totalPrice = 0;

      cartItems.forEach((item) => {
        const productId = item.dataset.productId;
        const product = products.find((p) => p.id == productId);
        const quantityInput = item.querySelector('input[type="number"]');
        const quantity = parseInt(quantityInput.value);
        const itemTotal = product.price * quantity;
        totalPrice += itemTotal;
      });

      const totalPriceElement = document.getElementById("total-price");
      totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Fungsi untuk menyimpan data keranjang belanja ke penyimpanan lokal
    function saveCartToLocalStorage() {
      const cartItemsContainer = document.getElementById("cart-items");
      const cartItems = Array.from(cartItemsContainer.children);
      const cartData = cartItems.map((item) => ({
        productId: item.dataset.productId,
        quantity: parseInt(item.querySelector('input[type="number"]').value),
      }));
      localStorage.setItem("cartData", JSON.stringify(cartData));
    }

    // Fungsi untuk memuat data keranjang belanja dari penyimpanan lokal
    function loadCartFromLocalStorage() {
      const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
      const cartItemsContainer = document.getElementById("cart-items");

      cartData.forEach((item) => {
        const product = products.find((p) => p.id == item.productId);
        const cartItem = document.createElement("li");
        cartItem.dataset.productId = item.productId;
        cartItem.innerHTML = `
          <div class="horizontal-product-box">
            <div class="product-content">
              <div class="d-flex align-items-center justify-content-between">
                <h5>${product.name}</h5>
                <h6 class="product-price">$${product.price}</h6>
              </div>
              <h6 class="ingredients-text">${product.description}</h6>
              <div class="d-flex align-items-center justify-content-between mt-md-2 mt-1 gap-1">
                <h6 class="place">Serve 1</h6>
                <div class="plus-minus">
                  <i class="ri-subtract-line sub"></i>
                  <input type="number" value="${item.quantity}" min="1" max="10">
                  <i class="ri-add-line add"></i>
                </div>
              </div>
            </div>
          </div>
        `;
        cartItemsContainer.appendChild(cartItem);
      });

      updateTotalPrice();
    }

    // Memanggil fungsi untuk merender produk
    renderProducts();
  })
  .catch((error) => console.error("Error:", error));