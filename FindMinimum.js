function minimum(nbArray) {
    let mini = nbArray[0];
    for (let i = 1; i < nbArray.length; i++) {
      if (mini > nbArray[i]) {
        mini = nbArray[i];
        return mini;
      }
    }
  }
  
  console.log("Minimum", minimum([0, 1, 2, 9, 5, -6, -4, 4, -4, 3, 4, -1.5]));
  