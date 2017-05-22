const Discord = require("discord.js");
const client = new Discord.Client();
const PREFIX = "><"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', message => {
  if (!message.content.startsWith(PREFIX)) return;

var userChoice = prompt("Do you choose rock, paper or scissors?");
  var computerChoice = Math.random();
    if (computerChoice < 0.34) {
	      computerChoice = "rock";
}   else if(computerChoice <= 0.67) {
	      computerChoice = "paper";
}   else {
	      computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(userChoice, computerChoice) {
  if(choice1 === choice2) {
    return "The result is a tie!";
  }

  else if(choice1 === "rock") {
    if(choice2 === "scissors") {
      return "Rock Wins";
    }
    else {
      return "Paper Wins";
    }
  }
  if(choice1 === "paper") {
    if(choice2 === "rock") {
      return "Paper Wins";
    }
    else {
      return "Scissors Wins";
    }
  }
  else(choice1 === "scissors"); {
    if(choice2 === "paper") {
      return "Scissors Wins";
    }
    else {
      return "Rock Wins";
    }
  }
}

client.login('MzE1ODc3OTMxMjMyNjU3NDA4.DASVlA.0ADGjMuEV-dQ4hKxdu-q-dg-4SU');
