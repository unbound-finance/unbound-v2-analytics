import { tokenAliases } from "../constants";

export function getIconUrl(name: string): string {
  if (
    name &&
    name.length > 0 &&
    Object.keys(tokenAliases).includes(name.toLowerCase())
  ) {
    name = tokenAliases[name.toLowerCase()];
  }

  const BASE_URL =
    "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/icon/";
  const result = `${BASE_URL}${name.toLowerCase()}.svg`;

  return result;
}
