export default function deleteForm() {
  const root = document.querySelector("#root");
  const form = document.querySelector(".form");
  form.reset();
  root.removeChild(form);
}
