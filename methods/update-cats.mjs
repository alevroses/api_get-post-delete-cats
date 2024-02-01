import { showRandom } from "../main.mjs";

const updateCats = () => {
  const update = document.querySelector(
    ".random__button"
  );

  update.addEventListener("click", showRandom);
};

export { updateCats };
