// Подставляет год в футер
document.addEventListener("DOMContentLoaded", function () {
  const y = new Date().getFullYear();
  const el = document.getElementById("year");
  if (el) el.textContent = '© ' + y + ' TarifPro';
});
