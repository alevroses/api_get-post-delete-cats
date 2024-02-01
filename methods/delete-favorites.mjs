import {
  APIKEY,
  URLFAVORITES,
} from "./parameters.mjs";
import { showFavorites } from "../main.mjs";

const deleteFavorites = async id => {
  const response = await fetch(
    `${URLFAVORITES}/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "x-api-key": APIKEY,
      },
    }
  );

	showFavorites()

  console.log("Delete: ", response);
  console.log("Delete: ", response.json());

  return response;
};

export { deleteFavorites };
