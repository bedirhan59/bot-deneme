const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
require('moment-duration-format');

let prefix = "+";//botun ön eki 
let owner = "312307937949384715";// sizin id'niz

bot.on("ready", () => {
    bot.user.setStatus('online');
    bot.user.setGame(`${prefix}yardım ${prefix}davet ? `, "https://www.twitch.tv/bedirhan_kuyucu");
    console.log("Bağlandım!")
});

bot.on("message", message => {
if (message.content.toLowerCase() === prefix + "resmim") {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Avatarınız:`)
.setImage(`${message.author.avatarURL} `)
.setColor("RANDOM"));
   }
});

bot.on("message", message => {
if (message.content.toLowerCase() === prefix + "sunucuresmi") {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Sunucu Resmi:`)
.setImage(`${message.guild.iconURL} `)
.setColor("RANDOM"));
   }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'kurulum') {
    if (message.author.id !== `312307937949384715`) {
      `message.reply('Kurucumun izni olması lazım. Kurucum: <312307937949384715>');`
    } else {
      message.channel.sendMessage(` :white_check_mark: Gerekli şeyleri başarılı bir şekilde kurdum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      message.guild.createChannel('SOHBET');// notech-log adında kanal kuracaktır.
    })
   }
  }
});

bot.on('message', msg => {
  if (msg.content.startsWith(prefix + "yaz")) {
    let mesaj = msg.content.substring(2 + 3);
    msg.delete();
    msg.channel.send(mesaj);
    }
    });

bot.on('message', msg => {
  if (msg.content.startsWith(prefix + "çekiliş")) {
    msg.channel.send(`Çekilişi Kazanan: ${msg.guild.members.random().displayName}`);
    }
    });

bot.on('message', msg => {
  if (msg.content.startsWith(prefix + "syt")) {//sunucu kurucusuna yazdığınız mesajı gönderir.
    let mesaj = msg.content.substring(2 + 3);
    msg.delete();
    msg.guild.owner.send(`Şikayet Bildiren: **${msg.author.tag}** \nŞikayet: ` + mesaj);
    }
    });

bot.on('message', message => {
if (message.content.toLowerCase() === prefix + "zekam") {
    var sans = ["11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "Albert Einstein mısın krdşm"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Zekan___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

bot.on('message', message => {
if (message.content.toLowerCase() === prefix + "havadurumu") { //rastgele havadurumu ile ilgili emoji atar
    var sans = ["?", "?", "?", "??", "??", "??", "??", "??", "??"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Hava Durumu___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

bot.on('message', message => {
if (message.content.toLowerCase() === prefix + "espiri") {
    var sans = ["Geçen gün geçmiş günlerimi aradım ama meşguldü.", "Yağmur yağmış kar peynir", "Dünya dönermiş ay da köfte…", "Bu erikson başka erik yok.", "Yıkanan Ton a ne denir Washington", "Hadi oyun oynayalım. Vazgeçtim oymadan oynayalım!", "Geçen gün kamyonu sürdüm Leonardo da Vinci.", "Doğumdan sonra çok kilo aldım. Doğduğumda 2 kiloydum şimdi 62.", "Adam 7 gün boyunca nezle olmuş. Sıkılmış bugün de Petek le olayım demiş.", "Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.", " Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.", "Osmanlıda kimseye borç takamıyordun mesela sikke sikke ödüyodun…", "Tatlı yiyip, tatlı konuşuluyorsa bundan sonra mantı yiyip mantıklı konuşacağız.", "Babamı sahura kaldırmayı unuttuk anneme masada ne eksik diyorum tuzluk mu diyor.", "+Okeyde kıza elin nasıl dedim. Ojeli dedi. Ben Şoka girdim. O Migrosa."];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Espri___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(prefix.length);

  let args = message.content.split(' ').slice(1);

  if (command === 'topla') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'çıkar') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p-c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'çarp') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p*c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'böl') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p/c);
    message.channel.sendMessage(`${total}`);
  }
});

bot.on("message", message => {
    const dmchannel = bot.channels.find("name", "kayitlar");// 'notechdm' yazan yeri sunucunuzda bi' kanalın ismini yazın. bota özelden yazılanlar oradan görülecektir.
    if (message.channel.type === "dm") {
        if (message.author.id === bot.user.id) return;
        dmchannel.sendMessage("", {embed: {
                color: 3447003,
                title: `Yazan: ${message.author.tag} ID: ${message.author.id}`,
                description: `${message.content}`
              }})
    }
    if (message.channel.bot) return;
});

bot.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Üye');// 'Üye' yazılan yeri otomatik rol vereceği rolü yapabilirsiniz.
  member.addRole(joinRole);

  const channel = member.guild.channels.find('name', 'notech-log');// 'notech-log' log ismidir. değiştirebilirsiniz. belirttiğiniz isme giriş çıkış 
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('0x00cc44')
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle(`${member.user.username} Sunucuya katıldı. \n[${member.guild.memberCount} Kişi]`)
  .setTimestamp()
  channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'notech-log');// 'notech-log' log ismidir. değiştirebilirsiniz. belirttiğiniz isme giriş çıkış gösterecektir.
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('0xff1a1a')
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle(`${member.user.username} Sunucudan ayrıldı. \n[${member.guild.memberCount} Kişi]`)
  .setTimestamp()
  channel.sendEmbed(embed); 
});

bot.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "sigara") {
msg.channel.send(':smoking: :cloud::cloud::cloud:')
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud:'))
.then(nmsg => nmsg.edit('**Sigaram bitti** | **Sigara İçmeyiniz.** :no_smoking: **Sigara Sağlığa Zararlıdır**'));
}
});

bot.on("message", message => {
    
    if (message.content.toLowerCase() === prefix + "davet") {
        message.author.send("Davet linkim: **https://discordapp.com/oauth2/authorize?client_id=439756873311322112&permissions=8&scope=bot**")    
    }
    
    if (message.content.toLowerCase() === "notech") {
        message.reply("ne var nee")
    }
    
    if (message.content.toLowerCase() === prefix + 'yenile') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`bak şu an yenileniyorum`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      process.exit(0);
    })
   }
  }
   
        
    if (message.content.toLowerCase() === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()
            .addField("Sunucu Adı", message.guild.name, true)

            .addField("Sunucu ID", message.guild.id, true)

            .addField("Sunucu Sahibi", message.guild.owner, true)

            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)

            .addField("AFK Süresi", message.guild.afkTimeout, true)

            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)
        
            .setColor("RANDOM")

        return message.channel.sendEmbed(embed)
    }
    
    if (message.content.toLowerCase() === prefix + "ping") {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription("Pingim :ping_pong: **" + bot.ping + "** Milisaniye")
          return message.channel.sendEmbed(embed)
    }   
    
    if (message.content.toLowerCase() === prefix + "botbilgi") {
        const embed = new Discord.RichEmbed()
            .addField("Bot Kurucusu", `<@${owner}>`, true)

            .addField("Version", "0.0.6", true)

            .addField("Toplam Sunucu Sayısı", bot.guilds.size, true)

            .addField("Toplam Kullanıcı Sayısı", bot.users.size, true)
            
            .addField("Toplam Kanal Sayısı", bot.channels.size, true)
			
            .addField("Çalışma Süresi", moment.duration(bot.uptime).format('D [gün], H [saat], m [dakika], s [saniye]'), true)

            .addField("Kitaplık Türü", "discord.js")
        
            .setColor("RANDOM")
        
        return message.channel.sendEmbed(embed)
    }
    
    if (message.content.toLowerCase() === prefix + "yardım") {
        const embed = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor("RANDOM")
  .addField("Komutlar", `**${prefix}anakomutlar** - Bilgi Komutları \n**${prefix}eğlence** - Eğlence Komutları \n**${prefix}moderasyon** - Moderasyon Komutları \n**${prefix}kişisel** - Kişisel komutlar`)
  .setFooter('Eğer "notech-log" adında bir kanal oluşturursanız bot log durumlarını söyler.')
  .setThumbnail(message.author.avatarURL)
        
        return message.channel.sendEmbed(embed)
    }
    
    if (message.content.toLowerCase() === prefix + "anakomutlar") {
        const embed = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor("RANDOM")
  .addField("Notech Ana Komutları", `**${prefix}kurulum** - Bot için gerekli dosyaları hazırlar. \n**${prefix}istatistik** - Botun istatistiğini gösterir. \n**${prefix}ping** - Botun pingini ölçer. \n**${prefix}sunucubilgi** - Sunucu hakkkında detaylı bilgi verir. \n**${prefix}sunucuresmi** - Sunucunun resmini gönderir. \n**${prefix}yardım** - Botun bütün komutlarını size gösterir. \n**${prefix}botbilgi** - Bot hakkında bilgi verir. \n**${prefix}davet** - Botun davet linkini atar.`)
  .setFooter('')
        
        return message.channel.sendEmbed(embed)
    }
    
    if (message.content.toLowerCase() === prefix + "kişisel") {
        const embed = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor("RANDOM")
  .addField("Notech Kişisel Komutları", `**${prefix}syt** - Yazdığınız şikayeti sunucunun kurucusuna iletir. \n**${prefix}matematik** - Matematik işlemi yapar. \n**${prefix}yaz** - Yazdığınız mesajı bota yazdırır. \n**${prefix}çekiliş** - Sunucudan rastgele birisini seçer.`)
  .setFooter('')
        
        return message.channel.sendEmbed(embed)
    }
    
    if (message.content.toLowerCase() === prefix + "eğlence") {
        const embed = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor("RANDOM")
  .addField("Notech Eğlence Komutları", `**${prefix}havadurumu** - Bot havadurumunu tahmin eder. \n**${prefix}espriyap** - Bot espri yapar. \n**${prefix}zekam** - Zeka puanınızı gösterir. \n**${prefix}matematik** - Matematik işlemi yapar. \n**${prefix}sigara** - Bot sigara içer. \n**${prefix}avatarım** - Avatarınızı gönderir. \n**${prefix}kurabiye** - Size kurabiye verir.`)
  .setFooter('')
        
        return message.channel.sendEmbed(embed)
    }
    
    if (message.content.toLowerCase() === prefix + "moderasyon") {
        const embed = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor("RANDOM")
  .addField("Notech Moderasyon Komutları", `**${prefix}kick** - Etiketlenen kişiyi sunucudan atar. [BAKIM] \n**${prefix}mute** - Etiketlenen kişiyi susturur. [BAKIM] \n**${prefix}ban** - Etiketlenen kişiyi sunucudan banlar. [BAKIM] \n**${prefix}temizle** - Bot belirttiğiniz kadar mesaj siler. [BAKIM] \n**${prefix}yenile** - Botu yeniden başlatır.`)
  .setFooter('')
        
        return message.channel.sendEmbed(embed)
    }
    
    if (message.content.toLowerCase() === prefix + "matematik") {
        const embed = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor("RANDOM")
  .addField("Notech Matematik Komutları", `**${prefix}topla** - Yazdığınız iki sayıyı toplar. \n**${prefix}çıkar** - Yazdığınız iki sayıyı çıkarır. \n**${prefix}çarp** - Yazdığınız iki sayıyı çarpar. \n**${prefix}böl** - Yazdığınız iki sayıyı böler.`)
  .setFooter(`Kullanım: ${prefix}topla 1 1`)
        
        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "kurabiye") {
        message.channel.sendMessage(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
        message.react("??")
   
  }

        if (message.content === prefix + "türk") {
        message.channel.sendMessage(`NE MUTLU TÜRKÜM DİYENE !`)
        
        }
  if (message.content === prefix + "kurucular") {
        message.channel.sendMessage(`VORTEX VE BYEFENDİ !`)
      }
  if (message.content === prefix + "süleyman") {
        message.channel.sendMessage(`tatlı ve efendi kardeşimiz`)
      }
  if (message.content === prefix + "mert") {
        message.channel.sendMessage(`şirinmi şirin bir tane kardeşimiz`)
      }
  if (message.content === prefix + "ugur") {
        message.channel.sendMessage(`cok tatlı bir tane kardeşimiz`)
      }
  if (message.content === prefix + "turgay") {
        message.channel.sendMessage(`kalpiailemizin kurucusu tatlı kardeşimiz`)
      } 
  if (message.content === prefix + "türkbayrağı") {
        message.channel.sendMessage(`:flag_tr: NE MUTLU TÜRKÜM DİYENE :flag_tr: `)
      }
  if (message.content === prefix + "facebook") {
        message.channel.sendMessage(`facebook adresimiz yakında `)
      }
      
  if (message.content === prefix + "youtube") {
        message.channel.sendMessage(`youtube adresimiz https://www.youtube.com/channel/UC7guNA5c_rnvZDWuczJDlzA?view_as=subscriber`)
      }
  if (message.content === prefix + "discord") {
        message.channel.sendMessage(`Discord adresimiz https://discord.gg/aAuKP6Q`)
      }
  if (message.content === prefix + "emoje") {
        message.channel.sendMessage(`:smiley:`)
      }
  if (message.content === prefix + "emoje2") {
        message.channel.sendMessage(`:kissing_heart:`)
      }
  if (message.content === prefix + "sosyalmedya") {
        message.channel.sendMessage(`facebook yakında youtubehttps://www.youtube.com/channel/UC7guNA5c_rnvZDWuczJDlzA?view_as=subscriber discord https://discord.gg/aAuKP6Q  `)
      }
  if (message.content === prefix + "kalpliailesi") {
        message.channel.sendMessage(`cok güzel sunucumuz cok seviyorum onları`)
      }
 
 if (message.content === prefix + "emoje kalp") {
        message.channel.sendMessage(`:heart:`)
      }
   if (message.content === prefix + "azerbeycan") {
        message.channel.sendMessage(`:flag_az: `)
      }
   if (message.content === prefix + "emoje ağlayankendi") {
        message.channel.sendMessage(`:crying_cat_face:`)
      }
      if (message.content === prefix + "aşk") {
        message.channel.sendMessage(`Ey Aşk sen nelere kadirsin…
An olur göz görmez olur sana düşünce, an gelir bir el uzanmaz yere düşünce…
An gelir ruhumu alır sarmalarsın sıcacık bakışlara, an olur gark edersin son bulmaz kara kışlara…
Gün gelir bir kıvılcım olur düşersin yüreklere, gün gelir büyürsün yangın olup talan edersin…
Gün gelip yol alır senle yürekler umudun maviliklerinde, gün gelir alır yutarsın, kaybolur gider sevdalılar karanlığının derinliklerinde…`)
      }

});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
