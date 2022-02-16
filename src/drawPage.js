import getUserData from "./renderData";
import "./style.css";

export async function init() {
  // находим корневой div в index.html
  const root = document.querySelector("#root");
  // создаём таблицу, у которой есть заголовок, шапка и тело
  const table = document.createElement("table");
  const caption = document.createElement("caption");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  // добавляем таблице класс
  table.classList.add("table");
  // помещаем заголовок в таблицу и добавлем заголовку текст
  table.appendChild(caption);
  caption.innerText = "Таблица пользователей";
  // помещаем в таблицу шапку и тело
  table.appendChild(thead);
  table.appendChild(tbody);
  // в корневой элемент помещаем таблицу
  root.appendChild(table);
  // создаём строку с заголовком и ячейки,
  // в которые добавляем текст с названием столбца
  const headingRow = document.createElement("tr");
  const nameHeading = document.createElement("th");
  nameHeading.innerHTML = "Имя";
  const secondNameHeading = document.createElement("th");
  secondNameHeading.innerHTML = "Фамилия";
  const aboutHeading = document.createElement("th");
  aboutHeading.innerHTML = "О себе";
  const eyeColorHeading = document.createElement("th");
  eyeColorHeading.innerHTML = "Цвет глаз";
  // добавляем ячейки в строку с заголовком, а строку в шапку таблицы
  headingRow.appendChild(nameHeading);
  headingRow.appendChild(secondNameHeading);
  headingRow.appendChild(aboutHeading);
  headingRow.appendChild(eyeColorHeading);
  thead.appendChild(headingRow);

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
