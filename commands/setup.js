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
    db.set(`guildID_${guild}`, guild);
  let guildid = db.fetch(`guildID_${guild}`)

  


  		 const embed = new Discord.RichEmbed()

  		.setTitle("Welcome To The FunkyMonkey Setup Menu **:ringed_planet:**")
  		.setDescription(`The FunkyMonkey Discord Bot comes with many features that you may enabled/disable at anytime! The following are all features and how to set them up:`)
  		.setColor("#2B60DE")
      .addField('**Private Commands:**', "To prevent non-faction players from seeing your contributions and other private commands we make you choose a parent channel. (A parent channel is a group of channels and calls [A Folder]) Please go to the parent channel you wish to lock all your commands into and do `!pchannel`")
      .addField("**Buffer Check:**", "To enable Buffer Checks and setup your Buffer Check Bot, create a buffer check __Text Channel__ and run the command `!bsetup` inside the channel.")
      .addField('**Contributions:**', "To enable Contributions, create a contribution __Text Channel__ and run the command `!csetup` inside the channel.")
      .addField("**Beta Disclaimer:**", "This bot is currently in private beta and is being tested in the Freecam Faction Discord. More features are to come like _Automatic Faction Discord Channel/Role Setup_, _Moderation Features_, & _More_!")
  		.setFooter(`If you have any questions/suggestions feel free to message ItzMonklee#7033 on discord -- ${footer}`, `${logo}`)
  		.setTimestamp()

  		message.channel.send({ embed });
    
  }
}
  
 
module.exports.help = {

    name:"setup"
  }
