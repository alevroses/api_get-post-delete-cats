import { getRandom } from "./methods/get-random.mjs";
import { updateCats } from "./methods/update-cats.mjs";
import { postFavorites } from "./methods/post-favorites.mjs";
import { getFavorites } from "./methods/get-favorites.mjs";
import { deleteFavorites } from "./methods/delete-favorites.mjs";

const showRandom = async () => {
  const data = await getRandom();
  console.log(data);

  const container =
    document.querySelector(".container");
  container.innerHTML = "";

  data.map(img => {
    console.log(img.id);
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const add = document.createElement("img");
    const description = document.createElement("p");

    figure.className = "figure";
    image.className = "figure__img";
    add.className = "figure__add";
    description.className = "figure__description";

    image.src = img.url;
    add.src = "./styles/heart.svg";

    description.textContent = "ID: " + img.id;

    add.addEventListener("click", () => {
      postFavorites(img.id);
      //showFavorites();
    });

    figure.append(image);
    figure.append(add);
    figure.append(description);
    container.append(figure);
  });
};

const showFavorites = async () => {
  const data = await getFavorites();

  const container = document.querySelector(
    ".favorites-container"
  );
  container.innerHTML = "";

  if (data.length === 0) {
    const message = document.createElement("p");
    message.className = "message";
    message.textContent =
      "No favorites yet, add some kittens here.";

    container.append(message);
  } else {
    data.map(favorite => {
      console.log("favorite", favorite);
      const figure =
        document.createElement("figure");
      const image = document.createElement("img");
      const remove = document.createElement("img");

      figure.className = "figure";
      image.className = "figure__favorite";
      remove.className = "figure__remove";

      image.src = favorite.image.url;
      remove.src = "./styles/remove.svg";

      remove.addEventListener("click", () => {
        deleteFavorites(favorite.id);
      });

      figure.append(image);
      figure.append(remove);
      container.append(figure);
    });
  }
};

showRandom();
updateCats();
showFavorites();

export { showRandom, showFavorites };
