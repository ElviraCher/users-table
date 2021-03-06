export default function createForm(parent) {
  const formContainer = document.createElement("div");
  formContainer.classList.add("container");
  // создаём форму и добавдяем её класс
  const form = document.createElement("form");
  form.classList.add("form");

  formContainer.append(form);
  // создаём 3 инпута и один селект с вариантами цвета глаз
  const nameInput = document.createElement("input");
  const secondNameInput = document.createElement("input");
  const aboutInput = document.createElement("input");
  const eyeColorSelect = document.createElement("select");
  const eyeColorOptionBlue = document.createElement("option");
  const eyeColorOptionBrown = document.createElement("option");
  const eyeColorOptionGreen = document.createElement("option");
  const eyeColorOptionRed = document.createElement("option");
  // каждой option присваиваем value
  eyeColorOptionBlue.value = "blue";
  eyeColorOptionBrown.value = "brown";
  eyeColorOptionGreen.value = "green";
  eyeColorOptionRed.value = "red";
  // добавляем варианты в селект
  eyeColorSelect.append(eyeColorOptionBlue);
  eyeColorSelect.append(eyeColorOptionBrown);
  eyeColorSelect.append(eyeColorOptionGreen);
  eyeColorSelect.append(eyeColorOptionRed);
  // для каждого варианта прописываем соответсвующий цвет глаз
  eyeColorOptionBlue.innerText = "blue";
  eyeColorOptionBrown.innerText = "brown";
  eyeColorOptionGreen.innerText = "green";
  eyeColorOptionRed.innerText = "red";
  // создаём 2 кнопки для управления формой, для каждой прописываем текст
  const submitButton = document.createElement("button");
  const cancelButton = document.createElement("button");
  submitButton.innerText = "Submit";
  cancelButton.innerText = "Cancel";
  // добавляем кнопкам уникальный id
  submitButton.id = "ok";
  cancelButton.id = "cancel";
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("form__container");
  buttonContainer.append(eyeColorSelect);
  buttonContainer.append(submitButton);
  buttonContainer.append(cancelButton);
  // добавляем классы для стилизации элементов формы
  nameInput.classList.add("form__input");
  secondNameInput.classList.add("form__input");
  aboutInput.classList.add("form__input");
  eyeColorSelect.classList.add("form__select");
  eyeColorOptionBlue.classList.add("form__select__option");
  eyeColorOptionBrown.classList.add("form__select__option");
  eyeColorOptionGreen.classList.add("form__select__option");
  eyeColorOptionRed.classList.add("form__select__option");
  submitButton.classList.add("form__button");
  cancelButton.classList.add("form__button");
  // каждому инпуту назначаем id
  nameInput.id = "name__input";
  secondNameInput.id = "second-name__input";
  aboutInput.id = "about__input";
  eyeColorSelect.id = "eye-color__select";
  // все элементы делаем дочерними для формы
  // форму добавляем в корневой элемент, который передан в функцию
  form.append(nameInput);
  form.append(secondNameInput);
  form.append(aboutInput);
  form.append(buttonContainer);
  parent.append(formContainer);
}
