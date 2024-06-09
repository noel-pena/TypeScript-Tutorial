type Customer = {
  birthday?: Date; // ? is the optional symbol
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// Optional property access operator (?.): checks if the customer is there
console.log(customer?.birthday);

// Optional element access operator
