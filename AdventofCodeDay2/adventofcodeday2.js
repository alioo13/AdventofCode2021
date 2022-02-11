const fs = require("fs");

let buffer = fs.readFileSync(__dirname + "/input");
const directions = buffer
  .toString()
  .split("\n")
  .filter((n) => n.length);


// What do you get if you multiply your final horizontal position by your final depth?
const move = (directions) => {
    let horizontal = 0;
    let depth = 0;
    for (let i = 0; i < directions.length; i++) {
      let [direction, distance] = directions[i].split(" ");
      distance = parseInt(distance);
      switch (direction) {
        case "forward":
          horizontal += distance;
          break;
        case "up":
          depth -= distance;
          break;
        case "down":
           depth += distance;
          break;
      }
    }
    return horizontal * depth;
  };


// What do you get if you multiply your final horizontal position by your final depth? Part 2
const movebyaim = (directions) => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  for (let i = 0; i < directions.length; i++) {
    let [direction, distance] = directions[i].split(" ");
    distance = parseInt(distance);
    switch (direction) {
      case "forward":
        horizontal += distance;
        depth += aim * distance;
        break;
      case "up":
        aim -= distance;
        break;
      case "down":
        aim += distance;
        break;
    }
  }
  return horizontal * depth;
};


console.log("What do you get if you multiply your final horizontal position by your final depth? Part 1 ====> " +move(directions));
console.log("What do you get if you multiply your final horizontal position by your final depth? Part 2 ====>  " +movebyaim(directions));