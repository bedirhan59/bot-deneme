const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
 if (message.content === prefix + "iletişim") {
        message.channel.sendMessage(`Discord https://discord.gg/aAuKP6Q 
                                     facebook https://www.facebook.com/groups/237652310371272/
                                    `)
        }
  
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
