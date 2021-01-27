Describe: Player(name)
Test: "This function constructs a player object with a name, and two score counters initialized to 0"
Code: let player1 = new Player("Player 1");
Expect(player1).toEqual(Player {name: "Player 1", turnScore: 0, overallScore: 0});

Describe: rollDie()
Test: "It returns a randomly selected integer from 1–6, simulating a die roll"
Expect(player1.rollDie()).toEqual(1–6);

Describe: play(resultNum)
Test: "It takes a value !== 1 simulating a random rollDie and adds to turnScore"
Expect(player1.play(3)).toEqual(3);

Test: "It takes a value === 1 simulating a rollDie of that value and branches method to reset turnScore to 0"
Expect(player1.play(1)).toEqual(0);

Describe: hold(value)
Test: "It takes a value simulating turnScore, adds to and returns overallScore, and resets turnScore to 0"
Expect(player1.hold(22)).toEqual(22)

Test: "It checks the player's overall score for winning value of >= 100 and ends game"
Expect(player1.hold(100)).toEqual("You win! Game over.");