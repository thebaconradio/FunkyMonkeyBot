const Discord = require("discord.js");
var logo = "https://i.imgur.com/DN9rLDr.jpg"; //the logo
var footer = "FunkyMonkey Bot"; //the name of bot for footer

module.exports.run = async (bot, message, args) => {

    if(message.guild.voiceConnection)
        {
          message.guild.voiceConnection.disconnect()
          message.reply("Rebooting the bot!")
        }
        else {
          message.reply("I'm not currently in a call so I can't be rebooted")
              }
};

module.exports.help = {
  name: "reboot"
}
