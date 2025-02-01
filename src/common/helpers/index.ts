export const getFirstCharacter = (name: string): string => {
  const firstWord = name
    .trim()
    .split(" ")
    .find((word) => word !== "");

  return firstWord ? firstWord.charAt(0).toUpperCase() : "";
};
