const Discord = require("discord.js");
const db = require("quick.db");
const ms = require('parse-ms');

var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

module.exports.run = async (client, message, args) => {
  
  var guild = message.guild.id;
  var contributionid = message.channel.id;
  var parent = message.channel.parent.id;
  
  let guildid = db.fetch(`parrentid_${guild}`)
  if (guildid === null) return message.reply(`__**Error:**__ You don't have a Parent Channel setup! Do \`!pchannel\` in the parent channel you wish to assign this to. (For more Information do \`!setup\`)`)
  
  let role = message.guild.roles.find(x => x.name === "Voodoo")
  
    if (!message.member.roles.has(role.id)) return message.reply(`Only the ${role} role can use this command`);
  if (message.member.roles.has(role.id)) {
  
  
  let contributiontag = db.fetch(`contributionid_${guild}`)
  let frequency = await db.fetch(`bufferfrequency_${guild}`)
  let testing = await db.fetch(`buffertoggles_${guild}`)
  let role2 = message.guild.roles.find(x => x.name === "Wall Checkers")
  //console.log(role2)
//  let bufferchannel = message.guild.channels.get('buffertag').toString()
  
 if (contributiontag === null) contributiontag = "**No Channel**";
  if (frequency === null) frequency = "**60**";
  if (testing === null) testing = "off";

  		 const embed = new Discord.RichEmbed()

  		.setTitle("Contribution Check Setup")
  		.setDescription(`Welcome to the Contribution Check Setup Panel! Follow the instructions below to setup your contribution check bot!`)
  		.setColor("#2B60DE")
      .addField("**Channel:**", `You are currently in the <#${contributionid}> channel! If you wish for this to be your Contribution Channel, type \`!cchannel\` in this channel, if you do not wish for this to be your Buffer Check Channel, type \`!cchannel\` in a different text channel and that will be set to your Contribution channel! You currently have <#${contributiontag}> as your contribution channel.`)
      .addField("**Reset Contributions:**", `:warning: __**WARNING**__ :warning: Once you complete this action you cannot turn back under __ANY__ circumstances! To reset **ALL** your contributions do \`!hardreset\`, then confirm you want to reset everything! Again - once completed, you cannot turn back!`)
  		.setFooter(`If you have any questions/suggestions feel free to message ItzMonklee#7033 on discord -- ${footer}`, `${logo}`)
  		.setTimestamp()

  		message.channel.send({ embed });
    
  }
}
  
 
module.exports.help = {

    name:"csetup"
  }
