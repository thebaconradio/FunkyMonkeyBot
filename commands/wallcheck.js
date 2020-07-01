const Discord = require("discord.js");
let coins = require("../coins.json");

var logo = "https://i.imgur.com/UsKW7HU.png";
var footer = "FunkyMonkey Bot"; //the name of bot for footer

module.exports.run = async (bot, message, args) => {
    let user = message.author;
    if (message.channel.id === "623611967952650250") return message.reply("You can't use this bot in the Public Chat")
  
  

    let pages = ['1', '___General Commands___\n \n**!help** - Display the help menu.'];
    let page = 1;
let adminRoleObject = message.member.roles.find(r => r.name === "Co-Owner")
    const embed = new Discord.RichEmbed()
    .setColor("#DEA82A")
    .setTitle(`Freecam Wall Checks!`)
    .setDescription(`Check walls! It's been 10 minutes ${adminRoleObject}`)
    .setFooter(`Freecam Bot`, `${logo}`)
    .setTimestamp()
    message.channel.send(`You may need to get on ${adminRoleObject}`);
    message.channel.send(embed).then(msg =>{

        msg.react('✅').then( r =>{
            msg.react('💣')

            const backwardsFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '💣' && user.id === message.author.id;

            const backwards = msg.createReactionCollector(backwardsFilter, { time: 10000 });
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 10000 });
          


            backwards.on('collect', r => {
                embed.setTitle(`Freecam Wall Checks`)
                embed.setDescription(`Walls are **Clear**`);
                embed.setFooter(`Freecam Bot`, `${logo}`);
                embed.setTimestamp();
                msg.edit(embed)
            })
            forwards.on('collect', r => {
                embed.setTitle(`Freecam Wall Checks`)
                embed.setDescription(`Wall are **NOT CLEAR!! GET ON WE ARE BEING RAIDED**`);
                embed.setFooter(`Freecam Bot`, `${logo}`);
                embed.setTimestamp();
                msg.edit(embed);
            });
        })
                                                                                              
                .catch(collected => {
		            embed.setTitle(`Freecam Wall Checks`)
                embed.setDescription(`Check Walls. It's been 20 minutes`);
                embed.setFooter(`Freecam Bot`, `${logo}`);
                embed.setTimestamp();
                msg.edit(embed)
	});
        });

    }

module.exports.help = {

    name:"wallcheck..."
  }
