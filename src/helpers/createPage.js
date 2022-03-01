import createTableBody from "./createTableBody";
import removeTableBody from "./removeTableBody";

export default async function createPage(data) {
  // параметром передаём в функцию данные, которые должны быть записаны в таблицу
  const rowsCount = data;
  // устанавливаем необходимое количество строк,
  // которое будет отображаться на одной странице
  const rowsOnPage = 10;
  // находим кнопки, которые переключают страницы
  const buttons = document.querySelectorAll(".button__counter");
  // изначально делаем активной самую первую кнопку с помощью класса
  buttons[0].classList.add("button__counter--active");
  // на каждую кнопку навешиваем обработчик клика
  // удаляем класс с той книпки, которая была активна до нажатой кнопки
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const previousActiveButton = document.querySelector(
        ".button__counter--active"
      );
      previousActiveButton.classList.remove("button__counter--active");
      // считаем, что номер странице равен номеру (тексту) кнопки
      // вводим переменные start - из номера страницы вычитаем 1 (так как индексы начинаются с 0)
      // и умножаем на количество строк на странице, это то значение,
      // с которого будет начинатся часть таблицы,
      // которую будем отрисовывать на странице;
      // и end - до какой строки отражаем  даные.
      // Удаляем часть таблицы с предыдущей страница и помещаем ту часть,
      // которая соответствует текущей странице;
      // текущей странице присваиваем класс активной
      const pageNumber = button.innerHTML;
      const start = (pageNumber - 1) * rowsOnPage;
      const end = start + rowsOnPage;
      const currentData = rowsCount.slice(start, end);
      removeTableBody();
      createTableBody(rowsOnPage, 4, currentData);
      button.classList.add("button__counter--active");
    });
  });
}
