/*-----------------------------------------------------------------------------------

    Template Name:zomo - Online Food Delivery
    Template URI: https://themes.pixelstrap.net/zomo
    Description: This is Food Ordering Html Template
    Author: Pixelstrap
    Author URL: https://themeforest.net/user/pixelstrap

----------------------------------------------------------------------------------- */

// 01.wishlist js
// 02.Ratio js
// 03.tap to top js
// 04.Range js
// 05.Plus Minus Item  Js
// 06.popup Quantity Js
// 07.RTL js
// 08.Dark js

/*=====================
  01. wishlist added start
==========================*/
const divs = document.querySelectorAll(".like-btn");
divs.forEach((el) =>
  el.addEventListener("click", (event) => {
    event.target.parentNode.classList.toggle("animate");
    event.target.parentNode.classList.toggle("active");
    event.target.parentNode.classList.toggle("inactive");
  })
);

/*====================
  02. Ratio js
=======================*/
window.addEventListener("load", () => {
  const bgImg = document.querySelectorAll(".bg-img");
  for (i = 0; i < bgImg.length; i++) {
    let bgImgEl = bgImg[i];

    if (bgImgEl.classList.contains("bg-top")) {
      bgImgEl.parentNode.classList.add("b-top");
    } else if (bgImgEl.classList.contains("bg-bottom")) {
      bgImgEl.parentNode.classList.add("b-bottom");
    } else if (bgImgEl.classList.contains("bg-center")) {
      bgImgEl.parentNode.classList.add("b-center");
    } else if (bgImgEl.classList.contains("bg-left")) {
      bgImgEl.parentNode.classList.add("b-left");
    } else if (bgImgEl.classList.contains("bg-right")) {
      bgImgEl.parentNode.classList.add("b-right");
    }

    if (bgImgEl.classList.contains("blur-up")) {
      bgImgEl.parentNode.classList.add("blur-up", "lazyload");
    }

    if (bgImgEl.classList.contains("bg_size_content")) {
      bgImgEl.parentNode.classList.add("b_size_content");
    }

    bgImgEl.parentNode.classList.add("bg-size");
    const bgSrc = bgImgEl.src;
    bgImgEl.style.display = "none";
    bgImgEl.parentNode.setAttribute(
      "style",
      `
      background-image: url(${bgSrc});
      background-size:cover;
      background-position: center;
      background-repeat: no-repeat;
      display: block;
      `
    );
  }
});

/*====================
  03. tap to top js
=======================*/
const btn = document.querySelector(".scroll");

btn.addEventListener("click", function () {
  scroll(0, 200);
});

window.onscroll = function showHide() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    btn.style.transform = "scale(1)";
  } else {
    btn.style.transform = "scale(0)";
  }
};

function scroll(target, duration) {
  if (duration <= 0) {
    return;
  }
  let difference = target - document.documentElement.scrollTop;
  let speed = (difference / duration) * 10;
  setTimeout(function () {
    document.documentElement.scrollTop += speed;
    if (document.documentElement.scrollTop == target) {
      return;
    }
    scroll(target, duration - 10);
  }, 10);
}

/*====================
  04. Range js
=======================*/
const rangeInputs = document.querySelectorAll('input[type="range"]');
const numberInput = document.querySelector('input[type="number"]');

function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== "range") {
    target = document.getElementById("range");
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "%100%";
}

rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

/*====================
  05. Plus Minus Quantity Item js
=======================*/
const plusMinus = document.querySelectorAll(".plus-minus");

for (var i = 0; i < plusMinus.length; ++i) {
  const addButton = plusMinus[i].querySelector(".add");
  const subButton = plusMinus[i].querySelector(".sub");
  addButton?.addEventListener("click", function () {
    const inputEl = this.parentNode.querySelector("input[type='number']");
    if (inputEl.value < 10) {
      inputEl.value = Number(inputEl.value) + 1;
    }
  });
  subButton?.addEventListener("click", function () {
    const inputEl = this.parentNode.querySelector("input[type='number']");
    if (inputEl.value >= 1) {
      inputEl.value = Number(inputEl.value) - 1;
    }
  });
}

/*======================
  06. popup Quantity Item js
// =======================*/
document.addEventListener("DOMContentLoaded", function () {
  var faqContainers = document.getElementsByClassName("add-btn");
  var faqToggle = document.getElementsByClassName("plus-minus")[0];

  for (var i = 0; i < faqContainers.length; i++) {
    faqContainers[i].addEventListener("click", function () {
      if (faqToggle.classList.contains("d-flex")) {
        faqToggle.classList.remove("d-flex");
      } else {
        faqToggle.classList.add("d-flex");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var faqContainers = document.getElementsByClassName("apply-btn");
  var faqToggle = document.getElementsByClassName("cart-popup")[0];

  for (var i = 0; i < faqContainers.length; i++) {
    faqContainers[i].addEventListener("click", function () {
      if (faqToggle.classList.contains("d-flex")) {
        faqToggle.classList.remove("d-flex");
      } else {
        faqToggle.classList.add("d-flex");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var faqContainers = document.getElementsByClassName("cart-btn");
  var faqToggle = document.getElementsByClassName("pay-btn")[0];

  for (var i = 0; i < faqContainers.length; i++) {
    faqContainers[i].addEventListener("click", function () {
      if (faqToggle.classList.contains("d-flex")) {
        faqToggle.classList.remove("d-flex");
        faqToggle.classList.remove("d-block");
      } else {
        faqToggle.classList.add("d-flex");
      }
    });
  }
});

/*====================
  07. RTL js
======================*/
const rtlBtn = document.querySelector("#rtl-btn");
const html = document.querySelector("html");
const rtlLink = document.querySelector("#rtl-link");
const themeBtnParent = document.querySelector(".rtlBtnEl");

themeBtnParent?.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".btntheme")?.id;
  if (!clicked) return;
  if (clicked === "rtl-btn") {
    rtlBtn.id = "ltr-btn";
    // feather.replace();
    rtlBtn.querySelector(".text-value").textContent = "LTR";
    html.setAttribute("dir", "rtl");
    rtlLink.href = "assets/css/vendors/bootstrap.rtl.css";
    rtlBtn.classList.add("rtlBtnEl");
    localStorage.setItem("rtlcss", "assets/css/vendors/bootstrap.rtl.css");
    localStorage.setItem("dir", "rtl");
    localStorage.setItem("rtlBtnId", "ltr-btn");
    localStorage.setItem("textContentRtl", "Ltr");
  }

  if (clicked === "ltr-btn") {
    rtlBtn.id = "rtl-btn";
    // feather.replace();
    rtlBtn.querySelector(".text-value").textContent = "RTL";
    html.setAttribute("dir", "");
    rtlLink.href = "assets/css/vendors/bootstrap.css";
    localStorage.setItem("rtlcss", "assets/css/vendors/bootstrap.css");
    localStorage.setItem("dir", "");
    localStorage.setItem("rtlBtnId", "rtl-btn");
    localStorage.setItem("textContentRtl", "Rtl");
  }
});
rtlBtn.id = localStorage.getItem("rtl-btn")
  ? localStorage.getItem("rtl-btn")
  : "rtl-btn";
rtlBtn.querySelector(".text-value").textContent = localStorage.getItem(
  "textContentRtl"
)
  ? localStorage.getItem("textContentRtl")
  : "RTL";
html.setAttribute("dir", localStorage.getItem("dir"));
rtlLink.href = localStorage.getItem("rtlcss")
  ? localStorage.getItem("rtlcss")
  : "assets/css/vendors/bootstrap.css";

/*====================
  08. Dark js
======================*/
document.body.style = "transition: 0.5s;";
const sun = "ri-sun-line";
const moon = "ri-moon-line";

var theme = "dark";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("mode-change-button")[0];
const themeIcon = document.getElementById("themeIcon");
container.addEventListener("click", setTheme);

function setTheme() {
  switch (theme) {
    case "dark":
      setLight();
      theme = "light";
      break;
    case "light":
      setDark();
      theme = "dark";
      break;
  }
}

function setLight() {
  root.style.setProperty(
    "--black-gradient",
    " linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
  );

  container.classList.remove("shadow-dark");
  document.body.classList.add("dark");
  document.body.classList.remove("light");
  themeIcon.classList.remove(moon);
  themeIcon.classList.add(sun);
}

function setDark() {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
  themeIcon.classList.add(moon);
  themeIcon.classList.remove(sun);
}

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
                  <i class="ri-subtract-line sub" data-product-id="${productId}"></i>
                  <input type="number" value="1" min="1" max="10">
                  <i class="ri-add-line add" data-product-id="${productId}"></i>
                </div>
              </div>
            </div>
          </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        updateTotalPrice();
        saveCartToLocalStorage();

        // Menambahkan event listener untuk tombol pengurangan
        const subButtons = cartItem.querySelectorAll(".sub");
        subButtons.forEach((button) => {
          button.addEventListener("click", decreaseProductQuantity);
        });

        // Menambahkan event listener untuk tombol penambahan
        const addButtons = cartItem.querySelectorAll(".add");
        addButtons.forEach((button) => {
          button.addEventListener("click", increaseProductQuantity);
        });
      }
    }

    // Fungsi untuk mengurangi jumlah produk
    function decreaseProductQuantity(event) {
      const productId = event.target.dataset.productId;
      const cartItemsContainer = document.getElementById("cart-items");
      const existingItem = Array.from(cartItemsContainer.children).find(
        (item) => item.dataset.productId == productId
      );

      if (existingItem) {
        const quantityInput = existingItem.querySelector(
          'input[type="number"]'
        );
        const quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
          quantityInput.value = quantity - 1;
          updateTotalPrice();
          saveCartToLocalStorage();
        } else {
          // Jika jumlah produk mencapai 0, hapus item dari keranjang
          cartItemsContainer.removeChild(existingItem);
          updateTotalPrice();
          saveCartToLocalStorage();
        }
      }
    }

    // Fungsi untuk menambahkan jumlah produk
    function increaseProductQuantity(event) {
      const productId = event.target.dataset.productId;
      const cartItemsContainer = document.getElementById("cart-items");
      const existingItem = Array.from(cartItemsContainer.children).find(
        (item) => item.dataset.productId == productId
      );

      if (existingItem) {
        const quantityInput = existingItem.querySelector(
          'input[type="number"]'
        );
        const quantity = parseInt(quantityInput.value);
        if (quantity < 10) {
          quantityInput.value = quantity + 1;
          updateTotalPrice();
          saveCartToLocalStorage();
        }
      }
    }

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

    /**
     * Fungsi untuk menyimpan data ke localStorage
     * @param {string} key - Kunci (key) untuk menyimpan data di localStorage
     * @param {any} data - Data yang akan disimpan di localStorage
     */
    function saveToLocalStorage(key, data) {
      try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
      } catch (error) {
        console.error(
          `Error saving data to localStorage with key "${key}":`,
          error
        );
      }
    }

    // Contoh penggunaan untuk menyimpan data keranjang belanja
    function saveCartToLocalStorage() {
      const cartItemsContainer = document.getElementById("cart-items");
      const cartItems = Array.from(cartItemsContainer.children);
      const cartData = cartItems.map((item) => ({
        productId: item.dataset.productId,
        quantity: parseInt(item.querySelector('input[type="number"]').value),
      }));

      saveToLocalStorage("cartData", cartData);
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
                  <i class="ri-subtract-line sub" data-product-id="${item.productId}"></i>
                  <input type="number" value="${item.quantity}" min="1" max="10">
                  <i class="ri-add-line add" data-product-id="${item.productId}"></i>
                </div>
              </div>
            </div>
          </div>
        `;
        cartItemsContainer.appendChild(cartItem);

        // Menambahkan event listener untuk tombol pengurangan
        const subButtons = cartItem.querySelectorAll(".sub");
        subButtons.forEach((button) => {
          button.addEventListener("click", decreaseProductQuantity);
        });

        // Menambahkan event listener untuk tombol penambahan
        const addButtons = cartItem.querySelectorAll(".add");
        addButtons.forEach((button) => {
          button.addEventListener("click", increaseProductQuantity);
        });
      });

      updateTotalPrice();
    }

    // Memanggil fungsi untuk merender produk
    renderProducts();

    // Fungsi untuk membuat URL WhatsApp dengan pesan yang berisi detail pesanan
    function createWhatsAppUrl() {
      const addressData = JSON.parse(localStorage.getItem("addressData"));
      const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
      const products = JSON.parse(localStorage.getItem("products")) || [];

      let message = "Halo, saya ingin memesan:\n\n";

      // Menambahkan detail produk ke pesan
      if (cartData.length > 0 && products.length > 0) {
        let hasPrintedProduct = false;
        cartData.forEach((item) => {
          const product = products.find((p) => p.id === item.productId);
          if (product) {
            message += `- ${product.name} x ${item.quantity}\n`;
            hasPrintedProduct = true;
          }
        });
        if (!hasPrintedProduct) {
          message += "Tidak ada produk yang dipesan.\n\n";
        } else {
          message += "\n";
        }
      } else {
        message += "Tidak ada produk yang dipesan.\n\n";
      }

      message += "\nDetail alamat:\n";

      // Menambahkan detail alamat ke pesan
      if (addressData) {
        message += `${addressData.fullName}\n`;
        message += `${addressData.address}\n`;
        message += `${addressData.city}, ${addressData.state}, ${addressData.zip}\n`;
        message += `No. HP: ${addressData.phone}\n`;
      }

      // Mendapatkan total harga
      const totalPrice = document.getElementById("total-price").textContent;
      message += `\nTotal: ${totalPrice}`;

      // Membuat URL WhatsApp dengan pesan yang telah dibuat
      const whatsappUrl = `https://wa.me/6285768973182?text=${encodeURIComponent(
        message
      )}`;

      return whatsappUrl;
    }
    // Mengubah event click pada tombol "Order To Whatsapp" untuk membuka URL WhatsApp
    const whatsappButton = document.getElementById("whatsappOrderButton");
    whatsappButton.addEventListener("click", function () {
      const whatsappUrl = createWhatsAppUrl();
      window.open(whatsappUrl, "_blank");
    });
  });

function saveAddress() {
  const fullName = document.getElementById("inputFullName").value;
  const address = document.getElementById("inputAddress").value;
  const city = document.getElementById("inputCity").value;
  const state = document.getElementById("inputState").value;
  const phone = document.getElementById("inputPhone").value;
  const zip = document.getElementById("inputZip").value;

  const addressData = {
    fullName,
    address,
    city,
    state,
    phone,
    zip,
  };

  localStorage.setItem("addressData", JSON.stringify(addressData));

  updateAddressBox(addressData);
}

function updateAddressBox(addressData) {
  const nameClient = document.querySelector(".name_client");
  const addressDetail = document.querySelector(".address_detail");
  const phoneNumber = document.querySelector(".phone-number");

  nameClient.textContent = addressData.fullName;
  addressDetail.textContent = `${addressData.address}, ${addressData.city}, ${addressData.state}, ${addressData.zip}`;
  phoneNumber.textContent = addressData.phone;
}

window.onload = function () {
  const addressData = JSON.parse(localStorage.getItem("addressData"));
  if (addressData) {
    updateAddressBox(addressData);
  }
};
