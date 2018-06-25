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
 client.on('message', message => {
    if (message.content === 'aşk') {
    	message.channel.send('Ey Aşk sen nelere kadirsin…
An olur göz görmez olur sana düşünce, an gelir bir el uzanmaz yere düşünce…
An gelir ruhumu alır sarmalarsın sıcacık bakışlara, an olur gark edersin son bulmaz kara kışlara…
Gün gelir bir kıvılcım olur düşersin yüreklere, gün gelir büyürsün yangın olup talan edersin…
Gün gelip yol alır senle yürekler umudun maviliklerinde, gün gelir alır yutarsın, kaybolur gider sevdalılar karanlığının derinliklerinde…');
  	}
});
 });
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
