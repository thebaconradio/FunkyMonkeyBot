const Discord = require("discord.js");
const db = require("quick.db");
const ms = require('parse-ms');

var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

module.exports.run = async (client, message, args) => {
    
  var guild = message.guild.id;
  let buffertag = db.fetch(`bufferid_${guild}`)
  var channel = client.channels.get(`${buffertag}`);
  var bot = ("649693697985740801")
  
  if(message.member.roles.find(x => x.name === "Wall Checkers")){
    
    let toggle = db.fetch(`buffertoggles_${guild}`)
  console.log(toggle)
  if (toggle === "on") {
    
    let buffertag = db.fetch(`parrentid_${guild}`)
     if (message.channel.parent.id !== `${buffertag}`) return message.reply(`You can only use this command in the **__<#${buffertag}>__**`)
    
     let timesincechecked = db.fetch(`TimeSinceCheck_${bot}`);
    let timesincecheck = ms(Date.now() - timesincechecked);
          
  let player =  message.author;
   
          channel.fetchMessages({ limit: 1 }).then(messages => {
  let lastMessage = messages.first();

let MessageID = db.fetch(`MessageID`)
//messages.delete(MessageID)
      
channel.fetchMessage(MessageID).then(msg => msg.delete());
})
    
.catch(console.error);
      
let timesincecheck1 = ms(Date.now() - timesincechecked);
      
      var checked = new Date();
var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
var hours = ["07","08","09","10","11","12","01","02","03","04","05","06","07","08","09","10","11","12","01","02","03","04","05","06"];
var ampm = ["PM","PM","PM","PM","PM","AM","AM","AM","AM","AM","AM", "AM","AM","AM","AM","AM","AM","PM","PM","PM","PM","PM","PM","PM"];
var minutes = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];
    var timechecked = days[checked.getDay()] + " " + checked.getDate() + " " + month[checked.getMonth()] + " at " + hours[checked.getHours()] + ":" + minutes[checked.getMinutes()] + " " + ampm[checked.getHours()];
    
      let role2 = message.guild.roles.find(x => x.name === "Wall Checkers")
  //console.log(role2)
   channel.send(`${role2} Stay alert! There are threats outside the base! A new cannon/claim/cannon box has been found!`);
   channel.send(`${role2} Stay alert! There are threats outside the base! A new cannon/claim/cannon box has been found!`);
   channel.send(`${role2} Stay alert! There are threats outside the base! A new cannon/claim/cannon box has been found!`);
     
    
    const embed = new Discord.RichEmbed()
    
    .setDescription(":x: **Buffers are NOT clear!** New ``claims/cannons`` have been found outside the base!")
    .addField("Triggered By:", `<@${player.id}>`, true)
    .addField("**Time Triggered**", `${timechecked} EST`, true)
    .setColor("#ff0000")
    .setFooter(`${footer}`, `${logo}`)
    .setTimestamp();
    
    channel.send({embed})
     db.set(`lastDaily_${bot}`, Date.now());
     db.set(`TimeSinceCheck_${bot}`, Date.now());
     console.log("Time has been updated")
  } else {
    return message.reply("Buffer Checks are turned off!")
  } 
  } else {
     let role2 = message.guild.roles.find(x => x.name === "Wall Checkers")
     message.reply(`You cannot use this command! You don't have the ${role2} role.`)
   }
}
  
 
module.exports.help = {

    name:"bweewoo"
  }