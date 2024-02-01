const APIKEY =
  "live_W59yADfCl0zz50jHsAElmhFZEyJV6jC9RT3YY5Q43cP78HvD8XNGH80daxZBiTzY";
const URLRANDOM =
  "https://api.thecatapi.com/v1/images/search";
const URLFAVORITES =
  "https://api.thecatapi.com/v1/favourites";

const queryLimit = [
  URLRANDOM,
  "?",
  "limit=",
  "4",
  "&",
  "api_key=",
  APIKEY,
].join("");

export { APIKEY, URLRANDOM, URLFAVORITES, queryLimit };
