(function () {
  var root = document.documentElement;

  // Footer year
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  // Light / dark switch. Follows the system setting until the visitor picks one,
  // then remembers the choice (the inline script in <head> re-applies it on load).
  var btn = document.getElementById("theme");
  var media = matchMedia("(prefers-color-scheme: dark)");

  function isDark() {
    return root.dataset.theme ? root.dataset.theme === "dark" : media.matches;
  }
  function sync() {
    if (btn) btn.setAttribute("aria-pressed", String(isDark()));
  }

  if (btn) {
    btn.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
      sync();
    });
  }
  if (media.addEventListener) media.addEventListener("change", sync);
  sync();

  // Highlight the nav link for the section in view
  var links = {};
  document.querySelectorAll('nav ul a[href^="#"]:not(.btn)').forEach(function (a) {
    links[a.getAttribute("href").slice(1)] = a;
  });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var a = links[e.target.id];
        if (!a) return;
        if (e.isIntersecting) {
          Object.keys(links).forEach(function (k) { links[k].removeAttribute("aria-current"); });
          a.setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(links).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) io.observe(s);
    });
  }
})();
