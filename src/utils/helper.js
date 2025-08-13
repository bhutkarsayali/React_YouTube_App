import { colors, nameList } from "./mocks/randomNamesArray";

export const generateRandomName = () => {
  let finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
};

export const makeRandomMessage = (length) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// export const randomIndex = colors[Math.floor(Math.random() * colors.length)];
