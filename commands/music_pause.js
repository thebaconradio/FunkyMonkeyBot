const Discord = require("discord.js");
var logo = "https://i.imgur.com/DN9rLDr.jpg"; //the logo
var footer = "FunkyMonkey Bot"; //the name of bot for footer
const ytdl = require('ytdl-core');

exports.run = (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send(`Couldn't find any music to pause!`);
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You must be in a voice channel to use this command!');
  
  if (fetched.dispatcher.paused) return message.channel.send('The music has already been paused!');
  
  fetched.dispatcher.pause();
  
  message.channel.send('>>> Music Paused');

}

  module.exports.help = {
  name: "pause"
}