import "./style.scss";
import drawPage from "./drawPage";
import getUserData from "./renderData";
import sortFunction from "./helpers/sortFunction";
import createTableBody from "./helpers/createTableBody";
import createPage from "./helpers/createPage";
import createPageButtons from "./helpers/createPageButtons";

(async function main() {
  const arr = await getUserData();
  await drawPage();

  // вызываем функцию, которая будет в цикле наполнять тело таблицы
  await createTableBody(10, 4, arr);
  await createPageButtons(arr);

  const table = document.querySelector(".table__body");

  await createPage(arr);

  // вешаем обработчик событий на все "th"
  // по клику на любую из ячеек с заголовками в шапке таблице
  // будет вызвана функция сортировки
  document
    .querySelectorAll("th")
    .forEach((th, index) =>
      th.addEventListener("click", () => sortFunction(index, table))
    );
  // document.querySelectorAll(".table__body .row").forEach((tr) =>
  //   tr.addEventListener("click", () => {
  //     const form = root.querySelector(".form");
  //     if (!form) {
  //       createForm(root);
  //       editTableForm(tr);
  //     } else {
  //       console.log("Вы находитесь в режиме редактирования формы");
  //     }
  //   })
  // );
})();
