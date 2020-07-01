const Discord = require("discord.js");
const db = require("quick.db");
const ms = require('parse-ms');

var logo = "https://i.imgur.com/UsKW7HU.png"; //the logo[img]https://i.imgur.com/UsKW7HU.png[/img]
var footer = "FunkyMonkey Bot"; //the name of bot for footer

module.exports.run = async (client, message, args) => {
  
  let role = message.guild.roles.find(x => x.name === "Voodoo")
  
    if (!message.member.roles.has(role.id)) return message.reply(`Only the ${role} role can use this command`);
  if (message.member.roles.has(role.id)) {
   
  var guild = message.guild.id;
  //let guildid = db.fetch(`bufferid_${guild}`)
console.log(`${guild}`)
    if (isNaN(Number(args[0]))) return message.reply("Please supply a time *(in minutes)* for how often you want Buffer Checks to be sent! (e.x. `!bfrequency 30` for 30 minute reminders.)");
    parseInt(`bufferfrequency_${guild}`, Number(args[0]))
    db.set(`bufferfrequency_${guild}`, Number(args[0]))
    let frequency = await db.fetch(`bufferfrequency_${guild}`)
//  let bufferchannel = message.guild.channels.get('buffertag').toString()
 

  		 const embed = new Discord.RichEmbed()

  		.setTitle("Buffer Check Frequency Time")
  		.setColor("#2B60DE")
      .setDescription(`You chose your Buffer Check Reminders to be every **${frequency}** Minutes! You can change this at anytime by going to any __Text Channel__ and typing \`!bfrequency {your time in minutes}\` inside the channel.`)
  		.setFooter(`If you have any questions/suggestions feel free to message ItzMonklee#7033 on discord -- ${footer}`, `${logo}`)
  		.setTimestamp()

  		message.channel.send({ embed });
    
  }
}
  
 
module.exports.help = {

    name:"bfrequency"
  }
