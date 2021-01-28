// Business logic for Player object ----------
function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.overallScore = 0;
}

Player.prototype.rollDie = function() {
  return Math.floor((Math.random() * 6) + 1);
}

Player.prototype.play = function() {
  const currentRoll = this.rollDie();
  if (currentRoll !== 1) {
    return this.turnScore += currentRoll;
  } else {
    this.turnScore = 0;
    return this.endTurn(); 
  }
}

Player.prototype.hold = function() {
  const nextPlayer = this.endTurn();
  this.turnScore = 0;
  if (this.overallScore >= 100) {
    return "Your score is " + this.overallScore + ". You win, " + this.name + "! Game over."
  } else {
    return nextPlayer;
  }
}

Player.prototype.endTurn = function() {
  this.overallScore += this.turnScore
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
    $("#currentPlayer").text(initializeGame(playerName1, playerName2));
    $("#player1").text(player1.name);
    $("#player2").text(player2.name);
  });
});