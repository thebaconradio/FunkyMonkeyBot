const Discord = require("discord.js");
const db = require("quick.db");
const ms = require('parse-ms');

var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

module.exports.run = async (client, message, args) => {
  
  var guild = message.guild.id;
  
     let buffertag = db.fetch(`parrentid_${guild}`)
       if (message.channel.parent.id !== `${buffertag}`) return message.reply(`You can only use this command in the **__<#${buffertag}>__**`)
  
  let role = message.guild.roles.find(x => x.name === "Voodoo")
  
    if (!message.member.roles.has(role.id)) return message.reply(`Only the ${role} role can use this command`);
  if (message.member.roles.has(role.id)) {
   
  //var guild = message.guild.id;
    console.log(guild)
  if (args[0] === 'on') {db.set(`buffertoggles_${guild}`, (args[0]))
    let testing = await db.fetch(`buffertoggles_${guild}`)
    console.log(testing)}
  if (args[0] === 'off') {db.set(`buffertoggles_${guild}`, (args[0]))
    let testing = await db.fetch(`buffertoggles_${guild}`)
    console.log(testing)}
  
  
      const embed = new Discord.RichEmbed()

  		.setTitle("Buffer Check Toggle Success")
  		.setColor("#2B60DE")
      .setDescription(`You just turned your Buffer Checks \`${args[0]}\`! You can toggle the buffer checks at anytime by using the following commands: \`!buffer on\` or \`!buffer off\``)
  		.setFooter(`If you have any questions/suggestions feel free to message ItzMonklee#7033 on discord -- ${footer}`, `${logo}`)
  		.setTimestamp()
      
      if (args[0] === undefined) args[0] = "";
  
      const embed2 = new Discord.RichEmbed()
      
  		.setTitle("Buffer Check Toggle Failed")
  		.setColor("#2B60DE")
      .setDescription(`**Failed** to turn the buffer checks on/off. In order to toggle your buffer checks, please use the following command: \`!buffer on\` or \`!buffer off\``)
      .addField("**Command Given**", `\` !buffer ${args[0]}\``)
  		.setFooter(`If you have any questions/suggestions feel free to message ItzMonklee#7033 on discord -- ${footer}`, `${logo}`)
  		.setTimestamp()
      
    if (args[0] === 'on') return message.channel.send(embed)
    if (args[0] === 'off') return message.channel.send(embed)
  
    if (args[0] !== 'on',"off") return message.channel.send(embed2)
                         
//  let bufferchannel = message.guild.channels.get('buffertag').toString()
 


  }

}
  
 
module.exports.help = {

    name:"buffer"
  }
