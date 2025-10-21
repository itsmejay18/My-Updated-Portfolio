function toggleDarkmode() {
  const body = document.body;
  const title = document.getElementById("title");
  
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    title.textContent = "Dark Mode";        
  } else {
    title.textContent = "Light Mode"; 
  }
}
