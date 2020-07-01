const Discord = require("discord.js");
var logo = "https://i.imgur.com/DN9rLDr.jpg"; //the logo
var footer = "FunkyMonkey Bot"; //the name of bot for footer
const ytdl = require('ytdl-core');

exports.run = async (client, message, args, ops) => {
  message.delete()
  let fetched = ops.active.get(message.guild.id);
  ops.active.set(message.guild.id, fetched);
    message.channel.send('Skipping Music!');
    fetched.dispatcher.emit('end');
}

  module.exports.help = {
  name: "skip"
}