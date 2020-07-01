const http = require('http');
const express = require('express'); 
const db = require("quick.db");

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const sql = require("sqlite");
sql.open("./score.sqlite")
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();
const active = new Map();
const ownerID = '347925246717853697'

fs.readdir("./commands/", (err, files) => {
  
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Could not find commands!");
    return;
  }

  
  if (err) console.log(err);
  
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});


var bot = new Discord.Client();

client.on("ready", () => {
  console.log("FunkyMonkey Bot has been enabled!");
  console.log(client.commands);
  const ms = require('parse-ms');
  client.user.setActivity('FunkyMonkey Videos', { type: 'WATCHING' });
  
  /*
const db = require('quick.db');
const ms = require('parse-ms');
const economy = require('discord-eco');
const sql = require("sqlite");
sql.open("./score.sqlite");

exports.run = async (client, message, args, tools) =>{
  
  sql.get(`SELECT`)
  let cooldown = 8.64e+7;
  let amount = 15;
  
  let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
  
  if (lastDaily != null && cooldown - (Date.now() - lastDaily) > 0){
      let timeObj = ms(cooldown - (Date.now() - lastDaily));
    message.channel.send(`Tu as déjà collecté ton revenu quotidient, reviens dans **${timeObj.hours}h ${timeObj.minutes}m!**`)
  } else {
    message.channel.send(`Tu as collecté $${amount}`)
    
    db.set(`lastDaily_${message.author.id}`, Date.now());
    economy.updateBalance(message.author.id,parseInt(amount))
  
  }

}*/
  
  
  
  var schedule = require('node-schedule');
 
  var j = schedule.scheduleJob('00 * * * * *', function(){
    

  //var channel = client.channels.get('707709987073294356');
  var guild = ('553657927878180864');
  var bot = ("707667250596937788")
  
  let toggle = db.fetch(`buffertoggles_${guild}`)
  console.log(toggle)
  if (toggle === "on") {
    
  const today = new Date;
  var hours = ["20","21","22","23","00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19"];
  var minutes = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];
  var time = hours[today.getHours()] + ":" + minutes[today.getMinutes()];
  

  let frequency = db.fetch(`bufferfrequency_${guild}`)
   if (frequency === null) frequency = 60;

  console.log(`${frequency}`)
  //let cooldown = 100
   let cooldown = (frequency*60000);
   db.set(`cooldown_${guild}`, cooldown)
    console.log(`${frequency}`)
    console.log(`${cooldown}`)
    let channelid = db.fetch(`bufferid_${guild}`)
    var channel = client.channels.get(`${channelid}`);
    console.log(`${channelid}`)
  
  let lastDaily = db.fetch(`lastDaily_${bot}`);
  
  if (lastDaily != null && cooldown - (Date.now() - lastDaily) > 0){
      let timeObj = ms(cooldown - (Date.now() - lastDaily));
    
    
    console.log(`**${timeObj.hours}h ${timeObj.minutes}m!**`)
    console.log(`Nothing happens here, wait for next loop`)
  } else {
    console.log(`Passed through the timer, check buffers`)
    //db.set(`lastDaily_${bot}`, Date.now());

   channel.fetchMessages({ limit: 1 }).then(messages => {
  let lastMessage = messages.first();

let MessageID = db.fetch(`MessageID`)
//messages.delete(MessageID)
      
channel.fetchMessage(MessageID).then(msg => msg.delete());
})
    
.catch(console.error);
    
    
    let timesincechecked = db.fetch(`TimeSinceCheck_${bot}`);
    let timesincecheck = ms(Date.now() - timesincechecked);
    
      	const embed = new Discord.RichEmbed()

  	//	.setTitle(":white_check_mark: __Buffer Check__")
  		.setDescription(`:warning: **Time to check buffers!** Its been \`${timesincecheck.hours} Hours and ${timesincecheck.minutes} Minutes\` since last check! Today at: \`${time} EST\``)
  		.setColor("#ffff00")
  		.setFooter(`${footer}`, `${logo}`)
  		.setTimestamp()

  		channel.send({ embed }).then(msg =>{

msg.react('✅').then(() => msg.react('💣')).then(() => msg.react('✅')).then(() => {
  
    console.log(msg.id)
    db.set(`MessageID`, msg.id);
   let test123 = db.fetch(`MessageID`)   
   console.log(test123);
   db.set(`lastDaily_${bot}`, Date.now());
  
  
 
  //var guildID = db.fetch(`guildID_${guild}`);
  

  
  
  client.on('messageReactionAdd', (reaction, user) => {
    
    var checked = new Date();
var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
var hours = ["07","08","09","10","11","12","01","02","03","04","05","06","07","08","09","10","11","12","01","02","03","04","05","06"];
var ampm = ["PM","PM","PM","PM","PM","AM","AM","AM","AM","AM","AM", "AM","AM","AM","AM","AM","AM","PM","PM","PM","PM","PM","PM","PM"];
var minutes = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];
    var timechecked = days[checked.getDay()] + " " + checked.getDate() + " " + month[checked.getMonth()] + " at " + hours[checked.getHours()] + ":" + minutes[checked.getMinutes()] + " " + ampm[checked.getHours()];
    
    
if (reaction.message.channel.id !== `${channelid}`) return console.log('stopped reaction in other channel')
      if (user.id === "707667250596937788") return console.log('stopped bot from reacting to itself')
    if (reaction.message.id !== msg.id) return console.log('stopped player from reacting to own message')
    
    if (reaction.emoji.name === '✅') {

          
        parseInt(`wallcheck_${guild}_${user.id}`, 1)
        db.add(`wallcheck_${guild}_${user.id}`, 1)
        let bal = db.fetch(`wallcheck_${guild}_${user.id}`)      
      
let timesincecheck1 = ms(Date.now() - timesincechecked);
      
msg.delete();
    
    const embed = new Discord.RichEmbed()
    
    .setDescription(":white_check_mark: **Buffers are clear!** No new ``claims/cannons`` have been found outside the base!")
    .addField("**Checked By:**", `<@${user.id}>`, true)
    .addField("**Score:**", `${bal}`, true)
    .addField("**Time Checked**", `${timechecked} EST`, true)
    .addField("**Time Taken**", `**${timesincecheck1.hours}** Hours and **${timesincecheck1.minutes}** Minutes`, true)
    .setColor("#39ff14")
    .setFooter(`${footer}`, `${logo}`)
    .setTimestamp();

    channel.send({embed})
      db.set(`lastDaily_${bot}`, Date.now());
      db.set(`TimeSinceCheck_${bot}`, Date.now());
      console.log('Time has been updated')
           
    } 
   if (reaction.emoji.name === '💣') {
  
  let role2 = msg.guild.roles.find(x => x.name === "Wall Checkers")
  //console.log(role2)
   channel.send(`${role2} Stay alert! There are threats outside the base! A new cannon/cannon box has been found!`);
   channel.send(`${role2} Stay alert! There are threats outside the base! A new cannon/cannon box has been found!`);
   channel.send(`${role2} Stay alert! There are threats outside the base! A new cannon/cannon box has been found!`);
     
msg.delete();
    
    const embed = new Discord.RichEmbed()
    
    .setDescription(":x: **Buffers are NOT clear!** New ``claims/cannons`` have been found outside the base!")
    .addField("Triggered By:", `<@${user.id}>`, true)
    .addField("**Time Triggered**", `${timechecked} EST`, true)
    .setColor("#ff0000")
    .setFooter(`${footer}`, `${logo}`)
    .setTimestamp();
    
    channel.send({embed})
     db.set(`lastDaily_${bot}`, Date.now());
     db.set(`TimeSinceCheck_${bot}`, Date.now());
     console.log("Time has been updated")
           
    } 
}); 

              });
        });
  }
  } else {
    console.log("buffer checks are off")
  }
      });
  
/*  var rule = new schedule.RecurrenceRule();
rule.minute = [18,38,58]
 
var j = schedule.scheduleJob(rule, function(){
let channel = (client.channels.get('711200520098021426'))
 var guild = client.guilds.get('650403851815485455');
  let role = guild.roles.find(x => x.name === "Horde")
  //console.log(role)
   channel.send(`${role} There is a **Possible** horde spawning in __Warzone__ in \`2 Minute\``);
});*/
  
      });
   


 



client.on("message", async message => {

	  if (message.author.bot) return;
  	if (message.channel.type === "dm") return; //ignores DM channels
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");


     let cmd = messageArray[0];

    if (message.content.indexOf(config.prefix) !== 0) return;

  
    // This is the best way to define args. Trust me.
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (!message.content.startsWith(config.prefix));

   try {
 // delete require.cache[require.resolve(`./commands/${cmd}.js`)];
  let ops = {
    ownerID: ownerID,
    active: active
  }
  
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args,ops);
    
      } catch (e) {
  console.log(e.stack);
  }  finally {
    console.log(`${message.author.tag} used the ${cmd} command`);}

    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) {
        sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
      } else {
        let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
        if (curLevel > row.level) {
          row.level = curLevel;
          sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
          message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
        }
        sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
      }
    }).catch(() => {
      console.error;
      sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
        sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
      });
    });

	if(message.content.startsWith(config.prefix + "prefix")) { //checks for prefix

		//used for saving config of prefix
	  let newPrefix = message.content.split(" ").slice(1, 2)[0];
	  config.prefix = newPrefix;
	  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);

	  // used for confirming the success of prefix change
	  console.log("The prefix has been changed to '" + config.prefix + "'");
	  message.channel.send("The prefix has been changed to ''" + config.prefix + "''")

	  //checks for perms of owner
	  if(message.author.id !== config.ownerID) return;
	  }
  


});

client.login(process.env.TOKEN);