import getUserData from "../renderData";
import createTableBody from "./createTableBody";

export default async function createPage() {
  const rowsCount = await getUserData();
  const rowsOnPage = 10;
  const buttons = document.querySelectorAll(".button__counter");
  const tbody = document.querySelector("tbody");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const pageNumber = button.innerHTML;
      const start = (pageNumber - 1) * rowsOnPage;
      const end = start + rowsOnPage;
      const currentPage = rowsCount.slice(start, end);
      createTableBody(tbody, rowsOnPage, 4, currentPage);
    });
  });
}
