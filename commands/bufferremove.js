const Discord = require("discord.js");
const db = require("quick.db");
var tnt = "https://i.imgur.com/UJyHc8b.png";

var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

exports.run = async (bot, message, args) => { 

  let user = message.mentions.members.first() || message.author;
  
  var guild = message.guild.id;
  
      let buffertag = db.fetch(`parrentid_${guild}`)
      if (message.channel.parent.id !== `${buffertag}`) return message.reply(`You can only use this command in the **__<#${buffertag}>__**`)
  
  let role = message.guild.roles.find(x => x.name === "Voodoo")
  
    if (!message.member.roles.has(role.id)) return message.reply(`Only the ${role} role can use this command`);
  if (message.member.roles.has(role.id)) {
  // Rest of your code

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!pUser) return message.channel.send(`Please mention a user!`)


    if (isNaN(Number(args[1]))) return message.reply("Supply a valid number to add!");
    parseInt(`wallcheck_${guild}_${user.id}`, Number(args[1]))
    db.subtract(`wallcheck_${guild}_${user.id}`, Number(args[1]))
    let bal = await db.fetch(`wallcheck_${guild}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setTitle(":page_with_curl: **Buffer Added**")
    .setColor("#ff0000")
    .setDescription(`**Buffer Checks By:** ${pUser}\n\n**Buffer Check Amount:** ${Number(args[1]).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\n\n**Total Buffer Checks for** ${pUser}**:** ${bal.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\n\n**Confirmed By:** <@${message.author.id}>`)
    .setFooter(`${footer}`, `${logo}`)
  	.setTimestamp();
    message.channel.send(moneyEmbed)
  }
};

module.exports.help = {
  name:"bremove"
}