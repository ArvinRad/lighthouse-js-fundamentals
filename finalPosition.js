const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; 
function finalPosition(moves) {
  const position = [0,0];
  for (const move of moves ) {
    (move === "north") ? position[1]++ :((move === "south") ? position[1]-- : ((move === "west") ? position[0]-- : position[0]++));
  }
  return position
}
console.log(finalPosition(moves));
