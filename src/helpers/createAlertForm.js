export default function createAlertForm() {
  const a = document.querySelector(".alert__container");

  if (!a) {
    const root = document.querySelector("#root");
    const alertContainer = document.createElement("div");
    const alertMassage = document.createElement("p");
    alertContainer.classList.add("alert__container");
    alertMassage.classList.add("alert__massage");
    alertContainer.appendChild(alertMassage);
    root.appendChild(alertContainer);
    alertMassage.textContent = `Вы находитесь в форме редактирования. 
  Нажмите кнопку 'Cancel', если хотите отменить изменения и кнопку 'Submit', 
  если хотите сохранить изменения`;
  }
}
