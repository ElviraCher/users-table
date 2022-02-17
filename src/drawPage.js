import getUserData from "./renderData";
import sortFunction from "./helpers/sortFunction";
import createTableBody from "./helpers/createTableBody";
import "./style.css";

export default async function drawPage() {
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

  // вызываем функцию, которая будет в цикле наполнять тело таблицы
  createTableBody(tbody, arr.length, 4, arr);

  // вешаем обработчик событий на все "th"
  // по клику на любую из ячеек с заголовками в шапке таблице
  // будет вызвана функция сортировки
  document
    .querySelectorAll("th")
    .forEach((th, index) =>
      th.addEventListener("click", () => sortFunction(index, table))
    );
}
