import "./style.scss";
import { USER_DATA } from "./constants";
import drawPage from "./drawPage";
import sortFunction from "./helpers/sortFunction";
import createTableBody from "./helpers/createTableBody";
import createPage from "./helpers/createPage";
import createPageButtons from "./helpers/createPageButtons";

(async function main() {
  const arr = USER_DATA;
  await drawPage();

  // вызываем функцию, которая будет в цикле наполнять тело таблицы
  await createTableBody(10, 4, arr);
  await createPageButtons(arr);

  const table = document.querySelector(".table__body");

  await createPage(arr);

  // вешаем обработчик событий на все элементы с кассом "table__heading"
  // по клику на любую из ячеек с заголовками в шапке таблице
  // будет вызвана функция сортировки
  document
    .querySelectorAll(".table__heading")
    .forEach((th, index) =>
      th.addEventListener("click", () => sortFunction(index, table))
    );
})();
