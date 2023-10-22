function photographerTemplate(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;
  const photographerPageURL = `photographer.html?${id}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const photographerLink = document.createElement("a");
    photographerLink.setAttribute("href", photographerPageURL);
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const localisation = document.createElement("p");
    localisation.textContent = city + ", " + country;
    const accroche = document.createElement("p");
    accroche.textContent = tagline;
    const prix = document.createElement("p");
    prix.textContent = price + "€/jour";

    // Ajouter des classes aux éléments <p>
    localisation.classList.add("localisation");
    accroche.classList.add("accroche");
    prix.classList.add("prix");

    photographerLink.appendChild(img);
    photographerLink.appendChild(h2);
    photographerLink.appendChild(localisation);
    photographerLink.appendChild(accroche);
    photographerLink.appendChild(prix);

    article.appendChild(photographerLink);

    return article;
  }
  return { name, picture, getUserCardDOM };
}
