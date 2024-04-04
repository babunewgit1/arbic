const tigger = document.querySelectorAll("[handel]");
const cmodal = document.querySelectorAll(".cmodal");
const closeModal = document.querySelectorAll(".closeModal");
const cartbtn = document.querySelectorAll(".cmitem_link button");
const cartBox = document.querySelector(".card");
const cartClose = document.querySelector(".card_heading_left span");

tigger.forEach((item) => {
  item.addEventListener("click", () => {
    const tiggerAttr = item.getAttribute("handel");

    cmodal.forEach((citem) => {
      ctimeAttr = citem.getAttribute("id");

      if (tiggerAttr === ctimeAttr) {
        citem.classList.add("openModal");
      } else {
        citem.classList.remove("openModal");
      }
    });
  });
});

closeModal.forEach((item) => {
  item.addEventListener("click", () => {
    const closeAttr = item.getAttribute("closeM");

    cmodal.forEach((citem) => {
      ctimeAttr = citem.getAttribute("id");

      if (closeAttr === ctimeAttr) {
        citem.classList.remove("openModal");
      }
    });
  });
});

cartbtn.forEach((item) => {
  item.addEventListener("click", () => {
    cartBox.classList.add("openCart");
  });
});

cartClose.addEventListener("click", () => {
  cartBox.classList.remove("openCart");
});
