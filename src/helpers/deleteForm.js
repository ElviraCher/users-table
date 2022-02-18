export default function deleteForm(e) {
  e.preventDefault();
  const root = document.querySelector("#root");
  const form = document.querySelector(".form");
  form.reset();
  root.removeChild(form);
}
