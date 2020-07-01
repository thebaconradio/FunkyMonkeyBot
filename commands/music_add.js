const Discord = require("discord.js");
var logo = "https://i.imgur.com/DN9rLDr.jpg"; //the logo
var footer = "FunkyMonkey Bot"; //the name of bot for footer
const ytdl = require('ytdl-core');
const active = new Map();

module.exports.run = async (bot, message, args, ops) => {
  
      try {
    
    let ops = {
      
      active:active
      
    }
  } catch (e) {
    console.log(e);
  }
  
  if(!message.member.voiceChannel) return message.reply ("Please join a channel to use this feature!");
 // if(message.guild.me.voiceChannel) return message.reply ("This bot is already being used in channel!");
  if(!args[0]) return message.reply ("Please add a URL after the ``!add`` command!");
  
  let validate = await ytdl.validateURL(args[0]);
  
  if (!validate) return message.channel.send ("``Error: Invalid URL detected!``").then(
    message.channel.send ("Please supply a valid URL following the ``!add`` command!"));
  
  let info = await ytdl.getInfo(args[0]);
  
  let data = ops.active.get(message.guild.id) || {};
  
  if (!data.connection) data.connection = await message.member.voiceChannel.join();
  if (!data.queue) data.queue = [];
  data.guildID = message.guild.id;
  
  data.queue.push({
    songTitle: info.title,
    requester: message.author.tag,
    url: args[0],
    announceChannel: message.channel.id
  });
  
  if(!data.dispatcher) play(bot, ops, data);
  else {
    message.channel.send(`>>> ${message.author.tag} added ${info.title} to the Queue!`)
  }
  
  ops.active.set(message.guild.id, data);
  
  
/*  let info = await ytdl.getInfo(args[0]);
  
  let connection = await message.member.voiceChannel.join();
  
  let dispatcher = await connection.playStream(ytdl(args[0], { filter: 'audioonly' }));
  
  message.channel.send(`Now playing: **${info.title}**`);*/

}

async function play(client, ops, data) {
    client.channels.get(data.queue[0].announceChannel).send(`>>> Now Playing: ${data.queue[0].songTitle} which was requested by: ${data.queue[0].requester}`);

    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, {filter: 'audioonly'}));
    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('end', function() {
        end(client, ops, this);

    });

}
function end(client, ops, dispatcher){

    let fetched = ops.active.get(dispatcher.guildID);

    fetched.queue.shift();

    if (fetched.queue.length > 0) {
        ops.active.set(dispatcher.guildID, fetched);
        play(client, ops, fetched);
    } else {
        ops.active.delete(dispatcher.guildID);

        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;  

        if (vc) vc.leave();

    }

}
  
module.exports.help = {
  name:"add"
}