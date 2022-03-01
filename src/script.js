import "./style.scss";
import { USER_DATA } from "./constants";
import drawPage from "./drawPage";
import sortFunction from "./helpers/sortFunction";
import createTableBody from "./helpers/createTableBody";
import createPage from "./helpers/createPage";
import createPageButtons from "./helpers/createPageButtons";
import hideColumn from "./helpers/hideColumn";

(async function main() {
  const arr = USER_DATA;
  await drawPage();
  hideColumn();

  // вызываем функцию, которая будет в цикле наполнять тело таблицы
  await createTableBody(10, 4, arr);
  await createPageButtons(arr);

  const table = document.querySelector(".table__body");

  await createPage(arr);

  // вешаем обработчик событий на все элементы с кассом ".inner-div__sort"
  // по клику на внутренний див сортировки в шапке таблицы
  // будет вызвана функция сортировки
  document
    .querySelectorAll(".inner-div__sort")
    .forEach((sortDiv, index) =>
      sortDiv.addEventListener("click", () => sortFunction(index, table))
    );
})();
