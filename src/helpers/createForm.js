export default function createForm(parent) {
  // создаём форму и добавдяем её класс
  const formContainer = document.createElement("form");
  formContainer.classList.add("form");
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
  const removeButton = document.createElement("button");
  submitButton.innerText = "Submit";
  removeButton.innerText = "Remove";
  // добавляем кнопкам уникальный id
  submitButton.id = "ok";
  removeButton.id = "remove";
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
  removeButton.classList.add("form__button");
  // каждому инпуту назначаем id
  nameInput.id = "name__input";
  secondNameInput.id = "second-name__input";
  aboutInput.id = "about__input";
  eyeColorSelect.id = "eye-color__select";
  // все элементы делаем дочерними для формы
  // форму добавляем в корневой элемент, который передан в функцию
  formContainer.append(nameInput);
  formContainer.append(secondNameInput);
  formContainer.append(aboutInput);
  formContainer.append(eyeColorSelect);
  formContainer.append(submitButton);
  formContainer.append(removeButton);
  parent.append(formContainer);
}
