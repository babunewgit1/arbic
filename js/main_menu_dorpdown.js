const menulink = document.querySelectorAll("[linkLTigger]");
const dropres = document.querySelectorAll("[dropres]");

menulink.forEach((item) => {
  item.addEventListener("click", () => {
    const menulinkAttr = item.getAttribute("linkLTigger");

    dropres.forEach((dropItem) => {
      const dropresAttr = dropItem.getAttribute("dropres");

      if (menulinkAttr === dropresAttr) {
        dropItem.classList.toggle("openDrop");
      } else {
        dropItem.classList.remove("openDrop");
      }
    });
  });
});
