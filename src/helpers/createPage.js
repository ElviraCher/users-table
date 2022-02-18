import createTableBody from "./createTableBody";
import removeTableBody from "./removeTableBody";

export default async function createPage(data) {
  const rowsCount = data;
  const rowsOnPage = 10;
  const buttons = document.querySelectorAll(".button__counter");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const pageNumber = button.innerHTML;
      const start = (pageNumber - 1) * rowsOnPage;
      const end = start + rowsOnPage;
      const currentData = rowsCount.slice(start, end);
      removeTableBody();
      createTableBody(rowsOnPage, 4, currentData);
    });
  });
}
