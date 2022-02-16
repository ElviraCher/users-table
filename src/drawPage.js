import getUserData from "./renderData";
import "./style.css";

export async function init() {
  const root = document.querySelector("#root");

  const table = document.createElement("table");
  const caption = document.createElement("caption");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  table.classList.add("table");

  table.appendChild(caption);
  caption.innerText = "Таблица пользователей";

  table.appendChild(thead);
  table.appendChild(tbody);

  root.appendChild(table);

  const row1 = document.createElement("tr");
  const heading1 = document.createElement("th");
  heading1.innerHTML = "Имя";
  const heading2 = document.createElement("th");
  heading2.innerHTML = "Фамилия";
  const heading3 = document.createElement("th");
  heading3.innerHTML = "О себе";
  const heading4 = document.createElement("th");
  heading4.innerHTML = "Цвет глаз";

  row1.appendChild(heading1);
  row1.appendChild(heading2);
  row1.appendChild(heading3);
  row1.appendChild(heading4);
  thead.appendChild(row1);

  const arr = await getUserData();

  function createTable(parent, rows, cols) {
    for (let rowCounter = 0; rowCounter < rows; rowCounter += 1) {
      const tr = document.createElement("tr");
      tr.classList.add("row");
      for (let colCounter = 0; colCounter < cols; colCounter += 1) {
        const td = document.createElement("td");
        if (colCounter === 2) {
          const div = document.createElement("div");
          td.appendChild(div);
          div.classList.add("long-text");
          div.innerHTML = `${arr[rowCounter][colCounter]}`;
        } else {
          td.innerHTML = `${arr[rowCounter][colCounter]}`;
        }
        td.classList.add("cell");
        tr.appendChild(td);
      }
      parent.appendChild(tr);
    }
  }
  createTable(tbody, arr.length, 4);
}
