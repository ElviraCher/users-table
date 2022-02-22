export default function deleteForm() {
  const root = document.querySelector("#root");
  const form = document.querySelector(".form");
  const rowsDisabled = document.querySelectorAll(".row--disabled");
  const headingsDisabled = document.querySelectorAll(".table__heading");
  const pageButtons = document.querySelectorAll(".button__counter");

  rowsDisabled.forEach((row) => {
    row.classList.remove("row--disabled");
  });
  headingsDisabled.forEach((heading) => {
    heading.classList.remove("table__heading--disabled");
  });
  pageButtons.forEach((button) => {
    button.classList.remove("button__counter--disabled");
  });
  const formContainer = document.querySelector(".container");
  form.reset();
  root.removeChild(formContainer);

  const alertForm = document.querySelector(".alert__container");
  if (alertForm) {
    root.removeChild(alertForm);
  }
}
