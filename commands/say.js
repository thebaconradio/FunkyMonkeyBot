const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let role = message.guild.roles.find(x => x.name === "Voodoo")
  
    if (!message.member.roles.has(role.id)) return message.reply(`Only the ${role} role can use this command`);
  if (message.member.roles.has(role.id)) {
  	       const sayMessage = args.join(" ");
  	       message.delete().catch(O_o=>{});
  	       message.channel.send(sayMessage);
  }
}

module.exports.help = {
  name: "say"
}
