import createTableBody from "./createTableBody";
import removeTableBody from "./removeTableBody";

export default async function createPage(data) {
  const rowsCount = data;
  const rowsOnPage = 10;
  const buttons = document.querySelectorAll(".button__counter");
  buttons[0].classList.add("button__counter--active");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const previousActiveButton = document.querySelector(
        ".button__counter--active"
      );
      previousActiveButton.classList.remove("button__counter--active");

      const pageNumber = button.innerHTML;
      const start = (pageNumber - 1) * rowsOnPage;
      const end = start + rowsOnPage;
      const currentData = rowsCount.slice(start, end);
      removeTableBody();
      createTableBody(rowsOnPage, 4, currentData);
      button.classList.add("button__counter--active");
    });
  });
}
