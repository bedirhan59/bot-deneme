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
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
 if(command === "temizle") {
    if(!message.member.roles.some(r=>["kurucu", "admin", "rehber"].includes(r.name)) )
      return message.reply("Üzgünüm, Admin veya Moderator rolüne sahip olmalısın.");

    const deleteCount = parseInt(args[0], 10);

    if(!deleteCount || deleteCount < 2 || deleteCount > 101)
      return message.reply("Lütfen 2 ile 100 arası sayı giriniz.");

    const fetched = await message.channel.fetchMessages( { count : deleteCount } );
    message.channel.bulkDelete(deleteCount)


  }

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
