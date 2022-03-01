export default async function createPageButtons(data) {
  // создаём переменную, которая определяет количество кнопок пагинации
  const pageCount = data.length;
  // определяем сколько строк должно отражаться на странице
  const rowsOnPage = 10;
  // считаем сколько кнопок должно содержаться на странице
  const buttonCount = Math.ceil(pageCount / rowsOnPage);

  const root = document.querySelector("#root");
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button__container");
  root.append(buttonContainer);

  // внутри каждой кнопки напишем номер, это будет номер страницы,
  // на которую пользватель хочет попасть;
  // номер страницы соответствует индексу кнопки +1;
  // всем кнопкам присваиваем общий класс
  for (let i = 0; i < buttonCount; i += 1) {
    const button = document.createElement("button");
    button.classList.add("button__counter");
    button.textContent = `${i + 1}`;

    buttonContainer.append(button);
  }
}
