const Discord = require("discord.js");
const db = require("quick.db");
var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

exports.run = async (bot, message, args) => { 

  let user = message.mentions.members.first() || message.author;
  
  
    var guild = message.guild.id;
  
    let buffertag = db.fetch(`parrentid_${guild}`)
       if (message.channel.parent.id !== `${buffertag}`) return message.reply(`You can only use this command in the **__<#${buffertag}>__**`)
  
  let contributiontag = db.fetch(`contributionid_${guild}`)
    if (message.channel.id !== `${contributiontag}`) return message.reply(`You can only use this command in the **<#${contributiontag}>** channel.`)
  
  let role = message.guild.roles.find(x => x.name === "Voodoo")
  
    if (!message.member.roles.has(role.id)) return message.reply(`Only the ${role} role can use this command`);
  if (message.member.roles.has(role.id)) {
    
  // Rest of your code
  
  message.reply("This is a lot of work....")
    
  }
};

module.exports.help = {
  name:"hardreset"
}