const myword = "toto";
const voyelles = ["a", "e", "i", "o", "u", "y"];

// difference assignation, mutation
// difference == \ ===

function countVoyelle(word) {
  const wordSplit = word.split("");
  let counter = 0;

  for (let i = 0; i < wordSplit.length; i++) {
    for (let j = 0; j < voyelles.length; j++) {
      if (wordSplit[i] === voyelles[j]) {
        counter++;
      }
    }
  }

  return counter;
}

console.log("NB voyelles :", countVoyelle(myword));

function countVoyelleSachou(word) {
  return word.split("").reduce((count, letter) => {
    if (voyelles.includes(letter)) {
      count++;
    }
    return count;
  }, 0);
}

console.log("NB voyelles :", countVoyelleSachou("Coucou Namoureuse"));
