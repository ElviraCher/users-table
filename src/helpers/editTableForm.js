import deleteForm from "./deleteForm";
import { USER_DATA } from "./constants";

export default function editTableForm(tr) {
  const row = tr;
  // присваиваем класс строке, чтобы было понятно, что редактируем именно её
  row.classList.add("row__edited");

  // переносим данные из редактируемой строки в инпуты и создаём кнопки формы
  const nameInput = document.querySelector("#name__input");
  const secondNameInput = document.querySelector("#second-name__input");
  const aboutInput = document.querySelector("#about__input");
  const eyeColorSelect = document.querySelector("#eye-color__select");

  const buttonOk = document.querySelector("#ok");
  const buttonCancel = document.querySelector("#cancel");

  nameInput.value = row.querySelectorAll(".cell")[0].innerText;
  secondNameInput.value = row.querySelectorAll(".cell")[1].innerText;
  aboutInput.value = row.querySelectorAll(".cell")[2].innerText;
  eyeColorSelect.value = row.querySelectorAll(".cell")[3].innerText;

  // создаём функцию для удаления класса строки, чтобы вызвать её,
  // когда строка уже не является редактируемой
  const removeClass = () => {
    row.classList.remove("row__edited");
  };

  // функция, которая будет вызвана при нажатии на кнопку "Submit"
  function submitFunction(e) {
    // предотвратим перезагрузку страницы
    e.preventDefault();
    // писваиваем ячейкам в таблице значения из инпутов
    row.querySelectorAll(".cell")[0].innerText = nameInput.value;
    row.querySelectorAll(".cell")[1].innerText = secondNameInput.value;
    row.querySelectorAll(
      ".cell"
    )[2].innerHTML = `<div class = cell__long-text>${aboutInput.value}</div>`;
    row.querySelectorAll(
      ".cell"
    )[3].innerHTML = `<div class = "cell__eye cell__eye--${eyeColorSelect.value}">${eyeColorSelect.value}</div>`;
    // удаляем форму и класс редактируемой ячейки
    deleteForm();
    removeClass();
    // находим пользователя по id и изменяем объект, который находится в переменной USER_DATA
    const id = row.querySelectorAll(".cell")[4].innerText;
    const user = USER_DATA.find((data) => data.id === id);
    user.name.firstName = row.querySelectorAll(".cell")[0].innerText;
    user.name.lastName = row.querySelectorAll(".cell")[1].innerText;
    user.about = row
      .querySelectorAll(".cell")[2]
      .querySelector(".cell__long-text").innerText;
    user.eyeColor = row
      .querySelectorAll(".cell")[3]
      .querySelector(".cell__eye").innerText;
  }

  // навешиваем обработчики событий на кнопки
  buttonOk.addEventListener("click", submitFunction);
  buttonCancel.addEventListener("click", deleteForm);
  buttonCancel.addEventListener("click", removeClass);
}
