function Player(nameFromUser) {
  this.name = nameFromUser;
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