
function reverseMot(mot) {
  let motSplit = mot.split('');
  let reversedMot =[];
  for (var i = motSplit.length - 1 ; i >= 0; i--) {
    reversedMot.push(motSplit[i]);
  }
  console.log(reversedMot);
  return reversedMot;
}


function palindromeVerificator(mot) {
  let motSplit = mot.split('');
  let palindrome = true;
  let motSplitInverse = reverseMot(mot);

  for (var i = 0; i < motSplit.length; i++) {
    if (motSplitInverse[i] !== motSplit[i]) {
      palindrome = false;
    }
  }
  return palindrome;
}

console.log("Resultat :", palindromeVerificator("bob"));
