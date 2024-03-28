const arr = [
  { value: 1 },
  { value: 2 },
  5,
  6,
  7,
  "test",
  "test2",
  "test3",
  "test4",
  false,
  null,
  undefined,
  [123],
  [456],
  new Date("2021-06-22"),
  new Date("2022-02-01"),
];

let objs = [];
let numbers = [];
let strings = [];
let booleans = [];
let nulls = [];
let undefineds = [];
let arrays = [];
let dates = [];

const result = {
  objs,
  numbers,
  strings,
  booleans,
  nulls,
  undefineds,
  arrays,
  dates,
};

const groupedArr = arr.map((el) => {
  switch (typeof el) {
    case "number":
      numbers.push(el);
      return;
    case "string":
      strings.push(el);
      return;
    case "boolean":
      booleans.push(el);
      return;
    case "undefined":
      undefineds.push(el);
      return;
  }

  if (el === null) {
    nulls.push(el);
  } else if (Array.isArray(el)) {
    arrays.push(el);
  } else if (!(el instanceof Date) && !Array.isArray(el) && el !== null) {
    objs.push(el);
  } else {
    const year = el.getFullYear();
    const month = el.getMonth() + 1;
    const day = el.getDate();

    dates.push(`new Date(${year}-${month}-${day}`);
  }
});

console.log(result);
