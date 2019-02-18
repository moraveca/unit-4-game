var userScore = 0;
var wins = 0;
var losses = 0;
var target = "";

var crystalArray = [];


function initialStart() {
  getTarget();
  getFirstCrystals();
}

function getTarget() {
  target = getRandomTarget();
  console.log("target: " + target);
  $("#targetBox").text(target);
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


$("#crystal1").on("click", function() {
  userScore = userScore + crystalArray[0];
  checkScore();
  });

$("#crystal2").on("click", function() {
  userScore = userScore + crystalArray[1];
  checkScore();
  });

$("#crystal3").on("click", function() {
  userScore = userScore + crystalArray[2];
  checkScore();
  });

$("#crystal4").on("click", function() {
  userScore = userScore + crystalArray[3];
  checkScore();
  });
    

function checkScore() {
  $("#scoreBox").text(userScore);

  if (userScore === target) {
    alert("You win!");
    wins ++;
    $("#wins").text(wins);
    reset();
  }
  if (userScore > target) {
    alert("You lose.");
    losses++;
    $("#losses").text(losses);
    reset();
  }
}

function reset() {
  userScore = 0;
  var target = 0;
  crystalArray = [];

  $("#scoreBox").text("0");
  getTarget();
  getFirstCrystals();
}


