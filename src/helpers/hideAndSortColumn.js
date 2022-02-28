import sortFunction from "./sortFunction";

export default function hideAndSortColumn() {
  const table = document.querySelector(".table");
  const tableHeadings = document.querySelectorAll(".table__heading");

  tableHeadings.forEach((header, index) => {
    const innerDiv = document.createElement("div");
    const outerDiv = document.createElement("div");
    const sortDiv = document.createElement("div");
    const hideDiv = document.createElement("div");

    header.prepend(outerDiv);

    outerDiv.prepend(innerDiv);
    innerDiv.prepend(sortDiv);
    innerDiv.prepend(hideDiv);
    outerDiv.classList.add("table__heading--outer-div");

    innerDiv.classList.add("table__heading--inner-div");
    innerDiv.id = `${index}`;
    hideDiv.textContent = "Скрыть";
    sortDiv.textContent = "Сортировать";
    hideDiv.classList.add("inner-div");
    sortDiv.classList.add("inner-div");

    const hide = () => {
      const cells = document.querySelectorAll(".cell");

      for (let i = +innerDiv.id; i < cells.length; i += 5) {
        cells[i].classList.toggle("cell--invisible");
        if (cells[i].classList.value === "cell cell--invisible") {
          hideDiv.textContent = "Показать";
        } else {
          hideDiv.textContent = "Скрыть";
        }
      }
    };

    const sort = () => {
      tableHeadings.forEach((th, i) =>
        th.addEventListener("click", () => sortFunction(i, table))
      );
      sortDiv.classList.add("inner-div--sorted");
    };

    hideDiv.addEventListener("click", hide);

    sortDiv.addEventListener("click", sort);
  });
}
