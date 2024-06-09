// To make code readable, you should create the type before declaring known as type alias. Think struct like in C
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Noel",
  retire: (date: Date) => {
    console.log(date);
  },
};
