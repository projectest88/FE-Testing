function combineStringsInGroups(str1, str2, str3) {
    let result = "";
    for (let i = 0; i < str1.length; i++) {
      result += str1[i] + str2[i] + str3[i];
    }
    return result;
  }
  

  // output
  console.log(combineStringsInGroups("aa", "bb", "cc")); 