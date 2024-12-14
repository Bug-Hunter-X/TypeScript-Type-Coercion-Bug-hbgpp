function printNumber(num: number): void {
  console.log(num);
}

// Solution 1: Using type guards
function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function printNumberSafe(num: any): void {
  if (isNumber(num)) {
    printNumber(num);
  } else {
    console.error("Invalid input: Not a number");
  }
}

printNumberSafe("123"); // Handles the error gracefully
printNumberSafe(456); // Works correctly

// Solution 2: Using a union type
function printNumberUnion(num: number | string): void {
  if (typeof num === 'number') {
    console.log(num);
  } else {
    console.error("Invalid input: Not a number");
  }
}

printNumberUnion("123"); // Handles the error gracefully
printNumberUnion(456); // Works correctly

// Solution 3: Assertions (Use with caution!)
function printNumberAssertion(num: any): void {
  console.log((num as number));
}

printNumberAssertion("123"); // compiles without issue, but might lead to unexpected issues.
printNumberAssertion(456); // Works correctly
//Note: Solution 3 is generally discouraged unless you are absolutely certain about the input type.