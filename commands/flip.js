const Discord = require("discord.js");
var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

module.exports.run = async (bot, message, args) => {

  		      function doRandHT() {
  		var rand = ['Outcome: **Heads!**','Outcome: **Tails!**'];

  		return rand[Math.floor(Math.random()*rand.length)];
  		}

  		 const embed = new Discord.RichEmbed()

  		.setTitle(":dollar: **Coin Flip**")
  		.setDescription(doRandHT())
  		.setColor("#ff0000")
  		.setFooter(`${footer}`, `${logo}`)
  		.setTimestamp()

  		message.channel.send({ embed });
}

module.exports.help = {
  name: "flip"
}
