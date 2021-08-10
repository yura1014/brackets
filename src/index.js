module.exports = function check(str, bracketsConfig) {
  const map1 = new Map();
  let arr = [];
  bracketsConfig.forEach((element, index) => {
    map1.set(element[0], element[1]);
  });

  for (let i = 0; i < str.length; i++) {
    if (map1.has(str[i])) {
      if (
        arr.length !== 0 &&
        str[i] === arr[arr.length - 1] &&
        map1.get(str[i]) === str[i]
      ) {
        arr.pop();
      } else {
        arr.push(str[i]);

        continue;
      }
    } else if (arr.length !== 0 && map1.get(arr[arr.length - 1]) === str[i]) {
      arr.pop();
    } else arr.push(str[i]);
  }
  if (arr.length === 0) return true;
  else return false;
};

//console.log(check("())(", [["(", ")"]]));
