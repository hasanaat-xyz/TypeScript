function add1(a: number | string, b: number | string): number {
  return Number(a) + Number(b);
}

console.log(add1("2", 3)); // ✅ Output: 5

console.log(add1("4", "6")); // ✅ Output: 10

//Why Developers Prefer TypeScript
//Fewer bugs
//Predictable behavior
//Easier to collaborate in teams
//Great for large, scalable applications (React, Angular, etc.)