export const translit = (str) => {
  const chars = {
    а: "a",
    б: "b",
    в: "v",
    г: "h",
    ґ: "g",
    д: "d",
    е: "e",
    є: "ie",
    ж: "zh",
    з: "z",
    и: "y",
    і: "i",
    ї: "i",
    й: "i",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ь: "",
    ю: "iu",
    я: "ia",
  };

  if (!str) {
    return;
  }

  let result = str
    .toLowerCase()
    .split("")
    .map((char) => chars[char] || char)
    .join("");

  return result;
};

// // Приклад використання:
// const dynamicText = "привіт вася";
// console.log(translit(dynamicText));
