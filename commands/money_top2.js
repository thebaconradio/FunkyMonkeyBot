var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
var guild = message.guild.id;
  let user = message.mentions.members.first() || message.author;

 // const rank = await db.fetch(`money_${message.guild.id}_${user.id}`, { sort: ".data" });
  
    let buffertag = db.fetch(`parrentid_${guild}`)
       if (message.channel.parent.id !== `${buffertag}`) return message.reply(`You can only use this command in the **__<#${buffertag}>__**`)
  
   let contributiontag = db.fetch(`contributionid_${guild}`)
    if (message.channel.id !== `${contributiontag}`) return message.reply(`You can only use this command in the **<#${contributiontag}>** channel.`)
 
  
  const wallcheck = db.startsWith(`money3_${guild}_`, { sort: ".data" });
wallcheck.length = 10;
  let count = 0;
  let content = "";
  let i = 0
  for (i in wallcheck) {
    //let user = bot.users.get(money[i].ID.split('_')[2]).username
            count = count + 1;
            content += `**${count}**. <@${
              wallcheck[i].ID.split("_")[2]
            }> $${wallcheck[i].data
              .toLocaleString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\n`;
          }
  //money_${message.guild.id}_${user.id}


  const embed = new Discord.RichEmbed()
    .setColor("#DEA82A")
    .setTitle("Top Donators")
    .setFooter(
      `FunkyMonkey Bot - `, `${logo}`)
    .setDescription(`${content}`)
    .setTimestamp();
 // console.log(`${count} ${rank} ${user}`);
message.channel.send(embed)
 
};

module.exports.help = {
  name: "top"
};

