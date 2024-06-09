let employees: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Noel",
  retire: (date: Date) => {
    console.log(date);
  },
};
