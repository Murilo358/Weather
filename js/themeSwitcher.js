export const themeSwitcher = document.querySelector("#themeSwitcher");

function switchTheme() {
  const container = document.getElementById("mainContainer");
  container.classList.toggle("dark");
  document.body.classList.toggle("dark");
  container.classList.toggle("light");
  document.body.classList.toggle("light");
}

themeSwitcher.addEventListener("click", switchTheme);
