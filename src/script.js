import "./style.scss";
import { USER_DATA } from "./constants";
import drawPage from "./drawPage";
import createTableBody from "./helpers/createTableBody";
import createPage from "./helpers/createPage";
import createPageButtons from "./helpers/createPageButtons";
import hideAndSortColumn from "./helpers/hideAndSortColumn";

(async function main() {
  const arr = USER_DATA;
  await drawPage();
  hideAndSortColumn();

  // вызываем функцию, которая будет в цикле наполнять тело таблицы
  await createTableBody(10, 4, arr);
  await createPageButtons(arr);

  await createPage(arr);
})();
