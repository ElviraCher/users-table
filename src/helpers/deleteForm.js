export default function deleteForm() {
  const root = document.querySelector("#root");
  const form = document.querySelector(".form");
  const formContainer = document.querySelector(".container");
  form.reset();
  root.removeChild(formContainer);

  const alertForm = document.querySelector(".alert__container");
  if (alertForm) {
    root.removeChild(alertForm);
  }
}
