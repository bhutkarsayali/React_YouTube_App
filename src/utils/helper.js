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

//  //Function to check the number is prime
export const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

//Function to find the nth prime number
export const findNthPrime = (n) => {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
};

console.log(findNthPrime(10));
console.log(findNthPrime(100));
