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
  // присваиваем класс элементу с заголовком таблицы
  caption.classList.add("table__caption");
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
  nameHeading.classList.add("table__heading");

  const secondNameHeading = document.createElement("th");
  secondNameHeading.innerHTML = "Фамилия";
  secondNameHeading.classList.add("table__heading");

  const aboutHeading = document.createElement("th");
  aboutHeading.innerHTML = "О себе";
  aboutHeading.classList.add("table__heading");

  const eyeColorHeading = document.createElement("th");
  eyeColorHeading.innerHTML = "Цвет глаз";
  eyeColorHeading.classList.add("table__heading");

  // добавляем ячейки в строку с заголовком, а строку в шапку таблицы
  headingRow.appendChild(nameHeading);
  headingRow.appendChild(secondNameHeading);
  headingRow.appendChild(aboutHeading);
  headingRow.appendChild(eyeColorHeading);
  thead.appendChild(headingRow);
}
