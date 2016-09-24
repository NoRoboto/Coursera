/*
  Global variables.
*/

var target = 0;
var guess_input_text;
var guess_input= "";
var finished = false;
var guesses = 0;
var total_games = 0;
var colors;

function start(){
  name = prompt("Player name");
  total_games += 1;
  newGame();
  showInfo();
  do_game();
}

function showInfo(){
  document.getElementById('name').innerHTML = 'Player Name: '+name; // change label content
  document.getElementById('guesses').innerHTML = 'Actual guesses: '+guesses; // change label content
  document.getElementById('games').innerHTML = 'Total Games: '+total_games; // change label content
}

function newGame(){
  var target = 0;
  finished = false;
  guesses = 0;
}

function reset(){
  newGame();
  name = "";
  total_games = 0;
  showInfo();
  document.body.style.backgroundColor = "white";
}

function do_game() {
    colors = ["aqua","black","blue","cyan","fuchsia","gold","green","magenta","orange","pink","yellow"];
    var random_number = Math.random() * colors.length;
    var random_number_integer = Math.floor(random_number);
    target = random_number_integer;
    console.log("Answer: "+colors[target]);
    while (!finished) {
        guess_input_text = prompt("I am thinking of a color: "+
                                  colors.join()+"\n"+
                                  "What is the color?");
        guess_input = String(guess_input_text);
        guesses += 1;
        finished = check_guess();
    }
    document.body.style.backgroundColor = colors[target];
}

function check_guess() {
    showInfo();
    if (guess_input == "" || guess_input == null) {
        alert("Colorname empty, Please enter an color name");
        return false;
    }

    if (!isNaN(guess_input)) {
        alert("You have entered a number.\n\n" +
              "Please enter a color name.");
        return false;
    }

    if (colors.indexOf(guess_input) == -1) {
        alert("The Color name does not exist in list \n\n" +
              "Please enter a existing color from the list.");
        return false;
    }


    if (colors.indexOf(guess_input) > target) {
        alert("Sorry, your guess is not correct: \n Your color is alphabetically highter than mine!");
        return false;
    }

    if (colors.indexOf(guess_input) < target) {
        alert("Sorry, your guess is not correct: \n Your color is alphabetically lower than mine!");
        return false;
    }

    alert("You got it! The color was " + colors[target] +
          ".\n\nIt took you " + guesses +
          " guesses to get the color!");
    return true;
  }
