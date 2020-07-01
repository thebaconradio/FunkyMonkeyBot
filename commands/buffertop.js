var tnt = "https://i.imgur.com/UJyHc8b.png";
var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  var guild = message.guild.id;
  let user = message.mentions.members.first() || message.author;

   
    let buffertag = db.fetch(`parrentid_${guild}`)
       if (message.channel.parent.id !== `${buffertag}`) return message.reply(`You can only use this command in the **__<#${buffertag}>__**`)

 // const rank = await db.fetch(`money_${message.guild.id}_${user.id}`, { sort: ".data" });
  
  const wallcheck = db.startsWith(`wallcheck_${guild}_`, { sort: ".data" });
wallcheck.length = 10;
  let count = 0;
  let content = "";
  let i = 0
  for (i in wallcheck) {
    //let user = bot.users.get(money[i].ID.split('_')[2]).username
            count = count + 1;
            content += `**${count}**. <@${
              wallcheck[i].ID.split("_")[2]
            }> ${wallcheck[i].data
              .toLocaleString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\n`;
          }
  //money_${message.guild.id}_${user.id}
  let pages = ["1", "2", "3", "4", "5"];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor("#00FF00")
   .setThumbnail(`${tnt}`)
    .setTitle("Top Buffer Checkers")
   // .setFooter(`${rank}`)
    .setFooter(
      `FunkyMonkey Bot`, `${logo}`
    )
    .setDescription(content);
 // console.log(`${count} ${rank} ${user}`);
message.channel.send(embed)
 
};

module.exports.help = {
  name: "btop"
};

