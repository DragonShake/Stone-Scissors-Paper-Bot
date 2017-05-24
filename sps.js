const Discord = require("discord.js");
const client = new Discord.Client();
const PREFIX = "><"

var servers = {};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', message => {
  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

// case "stone, scissors, paper" alternativ commando

  switch (args[0].toLowerCase()) {
    case "SPS"
      var choice1 = sendMessage("Do you choose rock, paper or scissors?"); {
        if (msg.content === "paper", "stone", "scissors")
      }
        var choice2 = Math.random();
          if (choice2 < 0.34) {
	         choice2 = "rock";
}         else if(choice2 <= 0.67) {
	         choice2 = "paper";
}         else {
	         choice2 = "scissors";
}         console.log("Computer: " + computerChoice);

//choice1 = userChice
//choice2 = computerChoice

var compare = function(choice1, choice2) {
  if(choice1 === choice2) {
    sendMessage("The result is a tie!");
  }

  else if(choice1 === "rock") {
    if(choice2 === "scissors") {
      sendMessage("Rock Wins");
    }
    else {
      sendMessage("Paper Wins");
    }
  }
  if(choice1 === "paper") {
    if(choice2 === "rock") {
      sendMessage("Paper Wins");
    }
    else {
      sendMessage("Scissors Wins");
    }
  }
  else(choice1 === "scissors"); {
    if(choice2 === "paper") {
      sendMessage("Scissors Wins");
    }
    else {
      sendMessage("Rock Wins");
    }
  }
}
};
client.login('MzE1ODc3OTMxMjMyNjU3NDA4.DASVlA.0ADGjMuEV-dQ4hKxdu-q-dg-4SU');
