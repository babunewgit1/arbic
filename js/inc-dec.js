const incrementBtns = document.querySelectorAll(".increment-btn");
const decrementBtns = document.querySelectorAll(".decrement-btn");

incrementBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const numberElement = btn.nextElementSibling;
    let currentValue = parseInt(numberElement.textContent);
    currentValue++;
    numberElement.textContent = currentValue;

    if (currentValue > 1) {
      decrementBtns.forEach((decrementBtn) => {
        decrementBtn.classList.remove("disabled");
      });
    }
  });
});

decrementBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const numberElement = btn.previousElementSibling;
    let currentValue = parseInt(numberElement.textContent);
    if (currentValue > 1) {
      currentValue--;
      numberElement.textContent = currentValue;
    } else {
      btn.classList.add("disabled");
    }
  });
});
