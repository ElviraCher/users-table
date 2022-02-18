export default function deleteForm() {
  const root = document.querySelector("#root");
  const form = document.querySelector(".form");
  form.reset();
  root.removeChild(form);

  const alertForm = document.querySelector(".alert__container");
  if (alertForm) {
    root.removeChild(alertForm);
  }
}
