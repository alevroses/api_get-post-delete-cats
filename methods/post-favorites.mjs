import {
  URLFAVORITES,
  APIKEY,
} from "./parameters.mjs";
import { showFavorites } from "../main.mjs";

const postFavorites = async id => {
  const response = await fetch(URLFAVORITES, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": APIKEY,
    },
    body: JSON.stringify({
      image_id: id,
      sub_id: "user-123",
    }),
  });

  showFavorites();
  console.log(response);
  console.log(response.status);
  console.log(response.json());
};

export { postFavorites };
