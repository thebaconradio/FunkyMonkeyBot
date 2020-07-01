const Discord = require("discord.js");
var logo = "https://i.imgur.com/DN9rLDr.jpg"; //the logo
var footer = "FunkyMonkey Bot"; //the name of bot for footer

module.exports.run = async (bot, message, args) => {
  
  if(message.member.voiceChannel)
    {
      if(!message.guild.voiceConnection)
        {
          message.member.voiceChannel.join()
          .then(connection => {
            message.reply("Joined the channel succesfully")
          })
        }
    }
    else {
      message.reply("Join a voice channel for me to work properly")
    }
};

module.exports.help = {
  name: "join"
}
