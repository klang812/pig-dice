function Player(nameFromUser) {
  this.name = nameFromUser;
  this.turnScore = 0;
  this.overallScore = 0;
}

Player.prototype.rollDie = function() {
  return Math.floor((Math.random() * 6) + 1);
}

Player.prototype.play = function(resultNum) {
  if (resultNum !== 1) {
    return this.turnScore += resultNum;
  } else {
    return this.turnScore = 0; 
  }
}

Player.prototype.hold = function(value) {
  this.overallScore += value;
  if (this.overallScore >= 100) {
    return "Your score is " + this.overallScore + ". You win! Game over."
  }
}
