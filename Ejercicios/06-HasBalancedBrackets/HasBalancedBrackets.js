function HasBalancedBrackets(string) {
  // Your code here:
  const validOpeningBrackets = ["{", "[", "("];
  const validClosingBrackets = ["}", "]", ")"];

  if (!validOpeningBrackets.find((ob) => ob === string[0])) return false; // en caso inicie con una llave de clausura
  if (!(string.length % 2 === 0)) return false;

  const openedBrackets = [];

  for (let i = 0; i < string.length; i++) {
    const bracket = string[i];
    if (validOpeningBrackets.includes(bracket)) {
      openedBrackets.push(bracket);
    }

    if (validClosingBrackets.includes(bracket)) {
      const lastOpened = openedBrackets[openedBrackets.length - 1];
      const index = validClosingBrackets.indexOf(bracket);
      const pair = validOpeningBrackets[index];

      if (lastOpened === pair) {
        openedBrackets.pop();
      } else return false;
    }
  }

  if (openedBrackets.length === 0) {
    return true;
  }

  return false;
}

console.log(HasBalancedBrackets("{[()]}"));
console.log(HasBalancedBrackets("{]()}"));
console.log(HasBalancedBrackets("{(){}]}"));

module.exports = HasBalancedBrackets;
