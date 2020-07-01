const Discord = require("discord.js");
var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

module.exports.run = async (bot, message, args) => {

  		      function doRandHT() {
  		var rand = ['Rolled: **1**', 'Rolled: **2**', 'Rolled: **3**', 'Rolled: **4**', 'Rolled: **5**', 'Rolled: **6**'];

  		return rand[Math.floor(Math.random()*rand.length)];
  		}

  		 const embed = new Discord.RichEmbed()

  		.setTitle(":game_die: **Dice Roll**")
  		.setDescription(doRandHT())
  		.setColor("#DEA82A")
  		.setFooter(`${footer}`, `${logo}`)
  		.setTimestamp()

  		message.channel.send({ embed });
  
}

module.exports.help = {
  name: "roll"
}
