var userScore = 0;
var wins = 0;
var losses = 0;
var target = "";

var crystalArray = [];

function hideInstructions() {
  $(".instructions").detach();
}

function showInstructions() {
  $("#show-button").on("click", function() {
    $(".instructions").append;
  })
}

function instructionsClick() {
  $("#show-button").on("click", function() {
    $("#instructions").toggle();
    });
}

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
  var crystalOne = getRandomCrystal();
  var crystalTwo = getRandomCrystal();
  if (crystalOne != crystalTwo) {
    var crystalThree = getRandomCrystal();
    if (crystalThree != crystalOne && crystalThree != crystalTwo) {
      var crystalFour = getRandomCrystal();
      if (crystalFour != crystalOne && crystalFour != crystalTwo && crystalFour != crystalThree) {
        crystalArray.push(crystalOne);
        crystalArray.push(crystalTwo);
        crystalArray.push(crystalThree);
        crystalArray.push(crystalFour);
        console.log("crystalArray: " + crystalArray);
      }
      else {
        var crystalOne = 0;
        var crystalTwo = 0;
        var crystalThree = 0;
        var crystalFour = 0;
        getFirstCrystals();
      }
    }
    else {
      var crystalOne = 0;
      var crystalTwo = 0;
      var crystalThree = 0;
      getFirstCrystals();
    }
  }
  else {
    var crystalOne = 0;
    var crystalTwo = 0;
    getFirstCrystals();
  }
}
// The following were my first attempts to get an array for the crystals that would not include a double. They did not work.

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

instructionsClick();
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
    var winSound = new Audio("assets/sounds/1_person_cheering.wav");
    winSound.play();
    wins ++;
    $("#wins").text(wins);
    reset();
  }
  if (userScore > target) {
    var lossSound = new Audio("assets/Sounds/Sad_Trombone.wav");
    lossSound.play();
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

