// Business logic for Player object ----------
function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.overallScore = 0;
}

Player.prototype.rollDie = function() {
  return Math.floor((Math.random() * 6) + 1);
}

let currentRoll;
Player.prototype.play = function() {
  currentRoll = this.rollDie();
  if (currentRoll !== 1) {
    return this.turnScore += currentRoll;
  } else {
    return this.endTurn(); 
  }
}

Player.prototype.hold = function() {
  const nextPlayer = this.endTurn();
  if (this.overallScore >= 100) {
    return "Your score is " + this.overallScore + ". You win, " + this.name + "! Game over."
  } else {
    return nextPlayer;
  }
}

Player.prototype.endTurn = function() {
  this.overallScore += this.turnScore;
  this.turnScore = 0;
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
  return currentPlayer.name;
}

// Business logic for game initialization
let player1;
let player2;
let currentPlayer;
function initializeGame(name1, name2) {
  player1 = new Player(name1);
  player2 = new Player(name2);
  const players = [player1, player2];
  const startingPlayerIndex = Math.floor(Math.random() * players.length);
  currentPlayer = players[startingPlayerIndex];
  return currentPlayer.name;
}

// User Interface Logic

$(document).ready(function() {
  $("form#playerNames").submit(function(event) {
    event.preventDefault();
    const playerName1 = $("input#playerName1").val();
    const playerName2 = $("input#playerName2").val();
    $("form#playerNames").hide();
    $("div#gameBoard").show();
    const startingPlayer = initializeGame(playerName1, playerName2);
    $("#currentPlayer").text(startingPlayer);
    $("#player1").text(player1.name);
    $("#player2").text(player2.name);
  });
  $("#play1Roll").click(function() {
    player1.play();
    $("#play1Turn").text(player1.turnScore);
    $("#dieRoll").text(currentRoll);
    $("#currentPlayer").text(currentPlayer.name);
  });
  $("#play1Hold").click(function() {
    player1.hold();
    $("#play1Overall").text(player1.overallScore);
    $("#currentPlayer").text(currentPlayer.name);
  });
  $("#play2Roll").click(function() {
    player2.play();
    $("#play2Turn").text(player2.turnScore);
    $("#dieRoll").text(currentRoll);
    $("#currentPlayer").text(currentPlayer.name);
  });
  $("#play2Hold").click(function() {
    player2.hold();
    $("#play2Overall").text(player2.overallScore);
    $("#currentPlayer").text(currentPlayer.name);
  });
});