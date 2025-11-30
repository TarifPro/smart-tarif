// Автоматически подставляет текущий год в элемент с id="year"
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("year");
  if (el) {
    el.textContent = `© ${new Date().getFullYear()} TarifPro`;
  }
});
