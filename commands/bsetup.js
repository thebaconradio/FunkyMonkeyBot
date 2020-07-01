const Discord = require("discord.js");
const db = require("quick.db");
const ms = require('parse-ms');

var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

module.exports.run = async (client, message, args) => {
  
  var guild = message.guild.id;
  var bufferid = message.channel.id;
  var parent = message.channel.parent.id;
  
  let guildid = db.fetch(`parrentid_${guild}`)
  if (guildid === null) return message.reply(`__**Error:**__ You don't have a Parent Channel setup! Do \`!pchannel\` in the parent channel you wish to assign this to. (For more Information do \`!setup\`)`)
  
  let role = message.guild.roles.find(x => x.name === "Voodoo")
  
    if (!message.member.roles.has(role.id)) return message.reply(`Only the ${role} role can use this command`);
  if (message.member.roles.has(role.id)) {
  
  
  let buffertag = db.fetch(`bufferid_${guild}`)
  let frequency = await db.fetch(`bufferfrequency_${guild}`)
  let testing = await db.fetch(`buffertoggles_${guild}`)
  let role2 = message.guild.roles.find(x => x.name === "Wall Checkers")
  //console.log(role2)
//  let bufferchannel = message.guild.channels.get('buffertag').toString()
  
 if (buffertag === null) buffertag = "**No Channel**";
  if (frequency === null) frequency = "**60**";
  if (testing === null) testing = "off";

  		 const embed = new Discord.RichEmbed()

  		.setTitle("Buffer Check Setup")
  		.setDescription(`Welcome to the Buffer Check Setup Panel! Follow the instructions below to setup your buffer check bot!`)
  		.setColor("#2B60DE")
      .addField("**Channel:**", `You are currently in the <#${bufferid}> channel! If you wish for this to be your Buffer Check Channel, type \`!bufferchannel\` in this channel, if you do not wish for this to be your Buffer Check Channel, type \`!bufferchannel\` in a different text channel and that will be set to your buffer check channel! You currently have <#${buffertag}> as your buffer check channel.`)
      .addField("**Frequency:**", `The default frequency for Buffer Check Reminders are set to every **1 Hour**. You can change this by typing \`!bfrequency {your time in minutes}\` *(e.x. __!bfrequency 30__ for buffer checks every 30 minutes).* You currently have your Buffer Check Frequency set to every **${frequency}** Minutes!`)
      .addField("**Buffer Toggle:**", `You can turn Buffer Checks on and off by using the Buffer Check toggle command! Use the following commands to turn on/off Buffer Checks: \`!buffer on\` or \`!buffer off\`. You currently have your Buffer Checks Turned \`${testing}!\``)
      .addField("**Extra Information**", `When a cannon is spotted and someone sounds the Buffer Check WeeWoo, the following message will be sent 3 times: **${role2} Stay alert! There are threats outside the base! A new cannon/cannon box has been found!**`)
      .addField("**Extra Information 2**", `Players can use the \`!bclear\` or \`!bweewoo\` commands if the bot glitches out when they attempt to use ✅ or 💣 `)
      .addField("**Extra Information 3**", `For safety reasons we are going to set it up so that your buffer commands can only be used in the buffer check parent channel!`)
  		.setFooter(`If you have any questions/suggestions feel free to message ItzMonklee#7033 on discord -- ${footer}`, `${logo}`)
  		.setTimestamp()

  		message.channel.send({ embed });
    
  }
}
  
 
module.exports.help = {

    name:"bsetup"
  }
