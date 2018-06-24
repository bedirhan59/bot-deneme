const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('bağlandım!');
});

client.on('message', message => {
    if (message.content === 'bedirhan') {
    	message.channel.send('Kurucu');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}

  
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
