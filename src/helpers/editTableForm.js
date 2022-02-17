import deleteForm from "./deleteForm";

export default function editTableForm(tr) {
  const row = tr;

  const nameInput = document.querySelector("#name__input");
  const secondNameInput = document.querySelector("#second-name__input");
  const aboutInput = document.querySelector("#about__input");
  const eyeColorSelect = document.querySelector("#eye-color__select");

  const buttonOk = document.querySelector("#ok");
  const buttonRemove = document.querySelector("#remove");

  nameInput.value = row.querySelectorAll(".cell")[0].innerText;
  secondNameInput.value = row.querySelectorAll(".cell")[1].innerText;
  aboutInput.value = row.querySelectorAll(".cell")[2].innerText;

  function submitFunction(e) {
    // предотвратим перезагрузку страницы
    e.preventDefault();

    row.querySelectorAll(".cell")[0].innerText = nameInput.value;
    row.querySelectorAll(".cell")[1].innerText = secondNameInput.value;
    row.querySelectorAll(
      ".cell"
    )[2].innerHTML = `<div class = long-text>${aboutInput.value}</div>`;
    row.querySelectorAll(
      ".cell"
    )[3].innerHTML = `<div class = eye__${eyeColorSelect.value}></div>`;

    deleteForm();
  }

  buttonOk.addEventListener("click", submitFunction);
  buttonRemove.addEventListener("click", deleteForm);
}