const Discord = require("discord.js");
const db = require("quick.db");

var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

exports.run = async (bot, message, args) => { 
  
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);

     if (!message.author.id === "347925246717853697") {
        message.channel.send("You don't have the permissions to use this command!");
    }
    else{
        
        if(!member)
            //you have to type !kick then @username#1234 as an example
            return console.log("Please mention a valid member!");
        if(!member.kickable) 
            return console.log("I cannot kick this user!");

        // slice(1) removes the first part, which here should be the user mention or ID
        // join(' ') takes all the various parts to make it a single string.
        let reason = args.slice(1).join(' ');
        if(!reason) 
            reason = "No reason provided";
        member.kick(reason)
            .catch(error => console.log(`Sorry ${message.author} I couldn't kick because of : ${error}`));
            console.log(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
    }
}

module.exports.help = {
  name: "kickoff..."
}