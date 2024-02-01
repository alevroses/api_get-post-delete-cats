import {
  URLRANDOM,
  queryLimit,
} from "./parameters.mjs";

const getRandom = async () => {
  const response = await fetch(queryLimit);
  const data = await response.json();
  return data;
};

export { getRandom };
