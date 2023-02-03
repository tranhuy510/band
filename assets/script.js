"use strict";

const header = document.getElementById("header");
const mobileMenu = document.getElementById("mobile-menu");
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

// Đóng/mở mobile menu
const headerHeight = header.clientHeight;
mobileMenu.addEventListener("click", function () {
  const isClose = header.clientHeight === headerHeight;
  isClose ? (header.style.height = "auto") : (header.style.height = null);
});

// Tự động đóng khi chọn menu
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", function (e) {
    const isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    isParentMenu ? e.preventDefault() : (header.style.height = null);
  });
});

// Hàm hiển thị modal mua vé (thêm class open vào modal)
const showModalTicket = function () {
  modal.classList.add("open");
};

// Hàm ẩn modal mua vé (gỡ bỏ class open của modal)
const hideModalTicket = function () {
  modal.classList.remove("open");
};

// Lặp qua từng thẻ Button và nghe hành vi click
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showModalTicket);
}

// Nghe hành vi click và button close
modalClose.addEventListener("click", hideModalTicket);

modal.addEventListener("click", hideModalTicket);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
