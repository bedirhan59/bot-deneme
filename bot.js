const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('bağlandım!');
});

client.on('message', message => {
    if (message.content === 'bot') {
    	message.reply('bakım aşamasındadır');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN)
