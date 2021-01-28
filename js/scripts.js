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
    return this.turnScore = 0; 
  }
}

Player.prototype.hold = function() {
  this.overallScore += this.turnScore;
  this.turnScore = 0;
  if (this.overallScore >= 100) {
    return "Your score is " + this.overallScore + ". You win, " + this.name + "! Game over."
  }
}

// Business logic for game initialization
function initializeGame(name1, name2) {
  let player1 = new Player(name1);
  let player2 = new Player(name2);
  const players = [player1, player2];
  const startingPlayer = Math.floor(Math.random() * players.length);
  return players[startingPlayer].name;
}

$(document).ready(function() {
  $("form#playerNames").submit(function(event) {
    event.preventDefault();
    const playerName1 = $("input#playerName1").val();
    const playerName2 = $("input#playerName2").val();
    let player1 = new Player(playerName1);
    let player2 = new Player(playerName2);
    let players = [player1, player2];
    $("form#playerNames").hide();
    $("div#gameBoard").show();
    $("#player1").text(player1.name);
    $("#player2").text(player2.name);

  });
});