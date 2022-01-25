module.exports = function check(str, bracketsConfig) {
  // brackets collection
  const openBr = [];
  const closeBr = [];
  const sameBr = [];
  // result storeumulator
  const store = [];

  // get brackets collections
  bracketsConfig.forEach((item, idx) => {
    if (item[0] === item[1]) {
      sameBr.push(item[0]);
    } else {
      openBr.push(item[0]);
      closeBr.push(item[1]);
    }
  });

  if (str % 2 === 1) {
    return false;
  } else {
    for (let s of str) {
      // check same opening-closing brackets in str
      if (sameBr.includes(s)) {
        const i = getElIdx(sameBr, s);
        if (store[store.length - 1] === sameBr[i]) {
          store.pop(s);
        } else {
          store.push(s);
        }
      } else if (openBr.includes(s)) {
        // collect opening brackets in store
        store.push(s);
      } else if (closeBr.includes(s)) {
        // check correct closing bracket
        const i = getElIdx(closeBr, s);
        if (store[store.length - 1] === openBr[i]) {
          store.pop(s);
        } else {
          return false;
        }
      }
    }
  }

  // if store = [] - return true
  return store.length === 0;
};

// return the value's index from arr
function getElIdx(arr, value) {
  for (let idx in arr) {
    if (arr[idx] === value) {
      return idx;
    }
  }
  return null;
}
