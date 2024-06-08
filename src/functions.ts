// Catch errors if an expected return conflicts with the given type
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

// TS restricts the amount of arguments declared
calculateTax(10_000);
