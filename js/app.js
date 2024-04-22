function heandelCard() {
  const tigger = document.querySelectorAll("[handel]");
  const cmodal = document.querySelectorAll(".cmodal");
  const closeModal = document.querySelectorAll(".closeModal");
  const cartbtn = document.querySelectorAll(".desktopcartbtn");
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
      cartBox.classList.remove("openCart");

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

  document.querySelector("#card_btns").addEventListener("click", () => {
    cartBox.classList.add("openCart");
  });

  document.querySelector(".cardsm").addEventListener("click", () => {
    cartBox.classList.add("openCart");
  });
}

// handel mobile cart
function handelMobileCart() {
  const mobileCartbtn = document.querySelectorAll(".mobilecartbtn ");
  const mobilecart = document.querySelector("#mobilecart");

  mobileCartbtn.forEach((item) => {
    item.addEventListener("click", () => {
      mobilecart.classList.add("openMobileCart");
    });
  });

  mobilecart.addEventListener("click", function (event) {
    if (event.target.classList.contains("openMobileCart")) {
      mobilecart.classList.remove("openMobileCart");
    }
  });
}

// handel search box

function setupSearchBox(searchBoxIconId) {
  var searchBoxIcon = document.getElementById(searchBoxIconId);
  var searchBox = searchBoxIcon.querySelector(".search_box");

  document.addEventListener("click", function (event) {
    if (
      event.target === searchBoxIcon ||
      searchBoxIcon.contains(event.target)
    ) {
      searchBox.classList.add("openSearchBox");
    } else if (!event.target.closest(".search_box_wrapper")) {
      searchBox.classList.remove("openSearchBox");
    }
  });
}

setupSearchBox("search_boxIcon1");
setupSearchBox("search_boxIcon2");
