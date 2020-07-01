const sql = require ("sqlite")
const playlist = sql.open("./playlist.sqlite")
//exports.run = async (client, message, args, ops) => {
  
const Discord = require("discord.js");
var logo = "https://i.imgur.com/DN9rLDr.jpg"; //the logo
var footer = "FunkyMonkey Bot"; //the name of bot for footer
const ytdl = require('ytdl-core');
  
module.exports.run = async (bot, message, args, ops) => {
  
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('Something went wrong, please try again!');
  
  let queue = fetched.queue;
  
  let nowPlaying = queue[0];
  
  let resp = `__**Now Playing**__\n**${nowPlaying.songTitle}** -- **Requested By:** *${nowPlaying.requester}*\n\n__**Next in Queue**__\n`;
  
  for (var i=1; i < queue.length; i++) {
    resp += `${i}. **${queue[i].songTitle}** -- **Requested By:** *${queue[i].requester}*\n`;
  }
  message.channel.send(`>>> ${resp}`);

}
  module.exports.help = {
  name: "queue"
}