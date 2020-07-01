const Discord = require("discord.js");
const db = require("quick.db")
var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

module.exports.run = async (bot, message, args) => {
  
  var guild = message.guild.id;
  
    let buffertag = db.fetch(`parrentid_${guild}`)
      if (message.channel.parent.id !== `${buffertag}`) return message.reply(`You can only use this command in the **__<#${buffertag}>__**`)
  
var role = message.guild.roles.find(role => role.name === "Horde");
message.member.addRole(role);
  message.reply(`You've been given the Horde role! To remove the Horde role do \`!horderemove\``)

}
  
module.exports.help = {
  name: "horde"
}
