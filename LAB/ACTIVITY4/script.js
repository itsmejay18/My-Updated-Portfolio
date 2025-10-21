function toggleDarkmode() {
  const body = document.body;
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    title.textContent = "Dark Mode";
    subtitle.textContent = "You are in Dark Mode ";
  } else {
    title.textContent = "Light Mode";
    subtitle.textContent = "You are in Light Mode ";
  }
}
