const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

   client.on('message', message => {
    if (message.content === 'mert') {
    	message.channel.send('benim 1 tane kardeşim');
  	}
   client.on('message', message => {
    if (message.content === 'bot') {
    	message.channel.send('bot bakım aşamasındadır');
  	}
});

 });
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
