// Since TS avoids the use of null and undefined you can utilize union types to give a result for null. You cannot do the same with undefined
function greet(name: string | null) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null);
