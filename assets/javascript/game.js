var userScore = 0;
var wins = 0;
var losses = 0;
var target = "";

var crystalArray = [];


function initialStart() {
  var target = getRandomTarget();
  console.log("target: " + target);
  $("#targetBox").text(target);
  getFirstCrystals();


}

function getFirstCrystals() {
  
  crystalArray.push(getRandomCrystal());
  crystalArray.push(getRandomCrystal());
  crystalArray.push(getRandomCrystal());
  crystalArray.push(getRandomCrystal());
  console.log("crystalArray: " + crystalArray);


  // if (checkCrystals(crystalArray)) {
  //   console.log("crystalArray: " + crystalArray);
  // }
  // else {
  //   crystalArray.length = 0;
  //   getFirstCrystals();
  // }

}

// function checkCrystals() {
  // for (i = 0; i < crystalArray.length; i++) {
  //   if (crystalArray[i] === crystalArray[(i + 1)]) {
  //     return false;
  //   }
  //   else if (crystalArray[i] === crystalArray[i + 2]) {
  //     return false;
  //   }
  //   else if (crystalArray[i] === crystalArray[i + 3]) {
  //     return false;
  //   }
  // }

//   if (crystalArray[0] === crystalArray[1]) {
//     return false;
//   }
//   if (crystalArray[0] === crystalArray[2]) {
//     return false;
//   }
//   if (crystalArray[0] === crystalArray[3]) {
//     return false;
//   }
//   if (crystalArray[1] === crystalArray[2]) {
//     return false;
//   }
//   if (crystalArray[1] === crystalArray[3]) {
//     return false;
//   }
//   if (crystalArray[2] === crystalArray[3]) {
//     return false;
//   }
// }

function getRandomTarget(min, max) {
  min = Math.ceil(19);
  max = Math.floor(120);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function getRandomCrystal(min, max) {
  min = Math.ceil(1);
  max = Math.floor(12);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}



initialStart();


$(".crystalImage").on("click", function() {
    alert("Good luck!");
    Math.floor((Math.random() * 10) + 1); 
    // between 1-10

  });

if (userScore === target) {
    alert("You win!");
    wins ++;
}
if (userScore > target) {
  alert("You lose.");
  losses++;
}

