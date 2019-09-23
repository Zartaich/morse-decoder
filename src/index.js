const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  const arrayOfValuesSeparatedByTen = expr.match(/.{1,10}/g);

  const result = arrayOfValuesSeparatedByTen.reduce((res, letterByDecimal) => {
    const arrayOfValuesSeparatedByTwo = letterByDecimal.match(/.{1,2}/g);

    const stringOfMorzeSymbols = arrayOfValuesSeparatedByTwo
      .map(morzeSymbol => {
        if (morzeSymbol === "10") {
          return ".";
        } else if (morzeSymbol === "11") {
          return "-";
        }
      })
      .join("");

    if (stringOfMorzeSymbols !== "") {
      return res.concat(MORSE_TABLE[stringOfMorzeSymbols]);
    } else {
      return res.concat(" ");
    }
  }, "");

  return result;
}

module.exports = {
  decode
};
