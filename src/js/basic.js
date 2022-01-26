export default function orderByProps(obj, sortoder) {
  const result = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const newObj = {
        key: prop,
        value: obj[prop],
      };
      result.push(newObj);
    }
  }
  result.sort((x, y) => {
    if (x.key < y.key) {
      return -1;
    }
    if (x.key > y.key) {
      return 1;
    }
    return 0;
  });
  return result;
}
