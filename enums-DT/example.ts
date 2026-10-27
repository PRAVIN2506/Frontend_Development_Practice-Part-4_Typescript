//an enum is a special type that lets you define a set of named constants, supporting both numeric and string values. Enums help make code more readable by replacing magic numbers or strings with meaningful names.
enum Direction {
    North,
    East,
    South,
    West
}

let myDirection = Direction.North;
console.log(myDirection);
console.log(Direction);