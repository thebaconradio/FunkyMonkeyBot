const Discord = require("discord.js");
var logo = "https://i.imgur.com/DN9rLDr.jpg"; //the logo
var footer = "FunkyMonkey Bot"; //the name of bot for footer
const ytdl = require('ytdl-core');


exports.run = (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send(`Couldn't find any music to resume!`);
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You must be in a voice channel to use this command!');
  
  if (!fetched.dispatcher.paused) return message.channel.send('The music is not paused!');
  
  fetched.dispatcher.resume();
  
  message.channel.send(`>>> **Music has been resumed, Now playing:** ${fetched.queue[0].songTitle}`);

}
  module.exports.help = {
  name: "resume"
}