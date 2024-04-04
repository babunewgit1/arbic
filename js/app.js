const tigger = document.querySelectorAll("[handel]");
const cmodal = document.querySelectorAll(".cmodal");
const closeModal = document.querySelectorAll(".closeModal");
const body = document.querySelector("body");

tigger.forEach((item) => {
  item.addEventListener("click", () => {
    const tiggerAttr = item.getAttribute("handel");

    cmodal.forEach((citem) => {
      ctimeAttr = citem.getAttribute("id");

      if (tiggerAttr === ctimeAttr) {
        citem.classList.add("openModal");
        body.classList.add("overlay");
      } else {
        citem.classList.remove("openModal");
        body.classList.remove("overlay");
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
        body.classList.remove("overlay");
      } else {
        citem.classList.add("openModal");
        body.classList.add("overlay");
      }
    });
  });
});
