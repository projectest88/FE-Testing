function generateAcronym(name) {
    const parts = name.split(/[-\s]/);
    let acronym = "";
  
    for (let i = 0; i < parts.length; i++) {
      if (i === 0 || parts[i - 1].toLowerCase() === "von") {
        acronym += parts[i][0];
      } else {
        acronym += parts[i][0].toUpperCase();
      }
    }
  
    return acronym;
  }

  // output
  console.log(generateAcronym("Thomas Meyer")); 
  console.log(generateAcronym("martin schmidt")); 
  console.log(generateAcronym("Jan-Erich Schmidt")); 
  console.log(generateAcronym("Paul von Lahnstein")); 