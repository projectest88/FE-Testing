function getRemainder(n, m) {
    if (n === 0 && m === 0) return "NaN"; 
    if (n === 0 || m === 0) return "NaN"; 
  
    const larger = Math.max(n, m);
    const smaller = Math.min(n, m);
  
    return larger % smaller;
  }


  // output
  console.log(getRemainder(17, 5)); 
  console.log(getRemainder(13, 72));
  console.log(getRemainder(0, -1));
  console.log(getRemainder(0, 1));