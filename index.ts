const compress = (str: string): string => {
  let ans: string = "";
  for (let i = 0; i < str.length; i++) {
    let freq = 0;
    while (str[i] === str[i + 1]) {
      freq++;
      i++;
    }
    ans = `${ans}${str[i]}`;
    if (freq > 0) {
      ans = `${ans}${freq}`;
    }
  }
  return ans;
};

console.log(compress("abbbccdGGGGeeeeebbbcdd"));

/*
  ASCII ranges:
    [a-z] = 97-122
    [A-Z] = 65-90
    [0-9] = 48-57
*/

const isNumber = (char: string): boolean => {
  const ascii: number = char.charCodeAt(0);
  return ascii >= 48 && ascii <= 57;
};

const inflate = (str: string): string => {
  let ans: string = "";
  for (let i = 0; i < str.length; i++) {
    if (isNumber(str[i])) {
      let s = "";
      for (let j = 0; j < Number(str[i]); j++) {
        s = s + ans[ans.length - 1];
      }
      ans = ans + s;
    } else {
      ans = `${ans}${str[i]}`;
    }
  }
  return ans;
};

console.log(inflate("ab2c1dG3e4b2cd1"));
