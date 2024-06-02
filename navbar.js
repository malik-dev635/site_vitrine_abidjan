const navbarPlaceholder = document.getElementById("navbar-placeholder");

fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    navbarPlaceholder.innerHTML = data;
  })
  .catch((error) => {
    console.error("Erreur de chargement de la barre de navigation :", error);
  });
