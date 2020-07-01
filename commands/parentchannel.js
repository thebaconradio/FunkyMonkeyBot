const Discord = require("discord.js");
const db = require("quick.db");
const ms = require('parse-ms');

var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

module.exports.run = async (client, message, args) => {
  
  
  let role = message.guild.roles.find(x => x.name === "Voodoo")
  
    if (!message.member.roles.has(role.id)) return message.reply(`Only the ${role} role can use this command`);
  if (message.member.roles.has(role.id)) {
   
  var guild = message.guild.id;
  
  var bufferid = message.channel.parent.id;
    db.set(`parrentid_${guild}`, bufferid);
  let buffertag = db.fetch(`parrentid_${guild}`)
//  let bufferchannel = message.guild.channels.get('buffertag').toString()
 // message.channel.parent.id

  		 const embed = new Discord.RichEmbed()

  		.setTitle("Buffer Check Channel Update")
  		.setColor("#2B60DE")
      .setDescription(`You chose **__<#${buffertag}>__** to be your Parent Channel! You can change this at anytime by going to any __Text Channel__ and typing \`!pchannel\` inside the channel.`)
  		.setFooter(`If you have any questions/suggestions feel free to message ItzMonklee#7033 on discord -- ${footer}`, `${logo}`)
  		.setTimestamp()

  		message.channel.send({ embed });
    
  }
}
  
 
module.exports.help = {

    name:"pchannel"
  }
