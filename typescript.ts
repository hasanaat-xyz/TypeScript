function add(a: number, b: number): number {
  return a + b;
}

console.log(add("2", 3)); // ❌ Error at compile time: Argument of type 'string' is not assignable to parameter of type 'number'

//Why Developers Prefer TypeScript
//Fewer bugs
//Predictable behavior
//Easier to collaborate in teams
//Great for large, scalable applications (React, Angular, etc.)