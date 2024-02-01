import {
  APIKEY,
  URLFAVORITES,
} from "./parameters.mjs";

const getFavorites = async () => {
  const response = await fetch(URLFAVORITES, {
    headers: { "x-api-key": APIKEY },
  });
  const data = await response.json();

  console.log(response);
  console.log(data);
  return data;
};

export { getFavorites };
