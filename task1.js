function isValidWalk(walk) {
    if (walk.length !== 10) {
      return false;
    }
  
    let x = 0, y = 0;
    for (let direction of walk) {
      switch (direction) {
        case 'n':
          y++;
          break;
        case 's':
          y--;
          break;
        case 'e':
          x++;
          break;
        case 'w':
          x--;
          break;
      }
    }
  
    return x === 0 && y === 0;
  }


// output
let walk1 = ['n', 'n', 'n', 's', 's', 's', 'e', 'e', 'w', 'w'];
let walk2 = ['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];

console.log(isValidWalk(walk1)); 
console.log(isValidWalk(walk2)); 