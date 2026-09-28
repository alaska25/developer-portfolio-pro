document.getElementById("yr").textContent = new Date().getFullYear();
document.getElementById("theme").addEventListener("click", function () {
  var r = document.documentElement;
  var dark = r.dataset.theme ? r.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  r.dataset.theme = dark ? "light" : "dark";
});
