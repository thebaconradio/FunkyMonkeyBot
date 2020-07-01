const Discord = require("discord.js");
const db = require("quick.db");
var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

module.exports.run = async (bot, message, args, utils) => {
  
    var guild = message.guild.id;
  
    let buffertag = db.fetch(`parrentid_${guild}`)
        if (message.channel.parent.id !== `${buffertag}`) return message.reply(`You can only use this command in the **__<#${buffertag}>__**`)
  
   let contributiontag = db.fetch(`contributionid_${guild}`)
    if (message.channel.id !== `${contributiontag}`) return message.reply(`You can only use this command in the **<#${contributiontag}>** channel.`)
 

  let user = message.mentions.members.first() || message.author;

  let bal = await db.fetch(`money3_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let moneyEmbed = new Discord.RichEmbed()
    .setTitle(`Total Contributions`)
    .setColor("#DEA82A")
    .setDescription(`${user} has donated **$${bal.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}** dollars so far.`)
    .setFooter(`${footer}`, `${logo}`)
  	.setTimestamp();
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"total",
  aliases: ["bal"]
}