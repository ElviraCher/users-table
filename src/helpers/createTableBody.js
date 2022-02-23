// создаём функцию, которая в цикле будет наполнять тело таблицы
// таблица принимает 4 параметра:
// 1). родитель -  DOM-элемент, в который поместим данные после создания таблицы;
// 2). количество строк;
// 3). количество столбцов
// 4). массив, по которому будем итерироваться

// функции совершается итерация по двум вложенным циклам:
// 1). строки
// 2). ячейки (внутри строк)

// в первом цикле создаются элементы строк,
// во вложенном цикле создаются элементы ячеек

// в зависимости от индекса ячейки присваиваем элементам различные,
// необходимые для стилизации классы
// также, создаём дополнитльные div, где это необходимо для стилизации

import createForm from "./createForm";
import editTableForm from "./editTableForm";
import createAlertForm from "./createAlertForm";

export default async function createTableBody(rows, cols, arr) {
  const tableBody = document.querySelector("tbody");
  tableBody.classList.add("table__body");

  for (let rowCounter = 0; rowCounter < rows; rowCounter += 1) {
    const tr = document.createElement("tr");
    tr.classList.add("row");
    for (let colCounter = 0; colCounter < cols + 1; colCounter += 1) {
      const td = document.createElement("td");
      let div;
      switch (colCounter) {
        case 0:
          td.innerHTML = `${arr[rowCounter].name.firstName}`;
          break;
        case 1:
          td.innerHTML = `${arr[rowCounter].name.lastName}`;
          break;

        case 2:
          div = document.createElement("div");
          td.appendChild(div);
          div.classList.add("cell__long-text");
          div.innerHTML = `${arr[rowCounter].about}`;
          break;
        case 3:
          div = document.createElement("div");
          td.appendChild(div);
          div.classList.add("cell__eye");
          div.classList.add(`cell__eye--${arr[rowCounter].eyeColor}`);
          break;
        default:
          td.innerHTML = `${arr[rowCounter].id}`;
          td.classList.add("cell__id");
      }
      td.classList.add("cell");
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  }

  const root = document.querySelector("#root");

  const editRow = (tr) => {
    const form = root.querySelector(".form");
    const everyRows = document.querySelectorAll(".row");
    const tableHeading = document.querySelectorAll(".table__heading");
    const pageButtons = document.querySelectorAll(".button__counter");
    everyRows.forEach((everyRow) => {
      if (everyRow === tr) {
        return;
      }
      everyRow.classList.add("row--disabled");
    });
    tableHeading.forEach((heading) => {
      heading.classList.add("table__heading--disabled");
    });
    pageButtons.forEach((button) => {
      button.classList.add("button__counter--disabled");
    });
    if (!form) {
      createForm(root);
      editTableForm(tr);
    } else {
      createAlertForm();
    }
  };

  document
    .querySelectorAll(".table__body .row")
    .forEach((tr) => tr.addEventListener("click", () => editRow(tr)));
}
