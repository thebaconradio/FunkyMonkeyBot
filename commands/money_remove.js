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

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!pUser) return message.channel.send(`Please mention a user!`)
  


    if (isNaN(Number(args[1]))) return message.reply("Supply a valid number to add!");
    parseInt(`money3_${message.guild.id}_${user.id}`, Number(args[1]))
    db.subtract(`money3_${message.guild.id}_${user.id}`, Number(args[1]))
    let bal = await db.fetch(`money3_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setTitle(":page_with_curl: **Donation Recipt**")
    .setColor("#DEA82A")
    .setDescription(`**Donation Removed From:** ${pUser}\n\n**Amount Removed:** $${Number(args[1]).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\n\n**Total Donations for** ${pUser}**:** $${bal.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\n\n**Confirmed By:** <@${message.author.id}>`)
    .setFooter(`${footer}`, `${logo}`)
  	.setTimestamp();
    message.channel.send(moneyEmbed)
  }
};
module.exports.help = {
  name:"removemoney"
}