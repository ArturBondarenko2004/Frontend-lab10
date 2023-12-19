const form = document.querySelector("form");

// Зберігати дані форми в локальному сховищі при введенні користувачем
form.addEventListener("input", () => {
  const formData = new FormData(form);
  for (const [key, value] of formData) {
    if (value.trim() !== '') {
      localStorage.setItem(key, value);
    }
  }
});
// Відновлення введених раніше даних при завантаженні сторінки
window.onload = () => {
  for (const input of document.querySelectorAll("input, textarea, select")) {
    const name = input.name;
    const value = localStorage.getItem(name);
    if (value !== null) {
      if (input.type === 'radio') {
        input.checked = (input.value === value);
      } else {
        input.value = value;
      }
    }
  }
};
// Блокування відправки форми при натисканні кнопки "Відправити"
const submitButton = document.querySelector("button[type='submit']");
if (submitButton) {
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
  });
}
console.log(localStorage);
