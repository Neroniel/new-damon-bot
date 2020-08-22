const discord = require("discord.js");

module.exports = {
  name: "help",
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`<a:mb:731368836846321694> SENPAI BOT  HELP MENU `)
      .setDescription(`
<a:arrowright:746687100178661396> __**MODERATION COMMANDS**__ <a:larrow:746692948057522217>
\`addrole,removerole,cleaer[purge],ban,kick,voicekick,mute,unmute,slowmode,warn,warnings,resetwarns\`<a:verified:746693603710992404>

<a:arrowright:746687100178661396> __**FUN COMMANDS**__ <a:larrow:746692948057522217>
\`advice,suggest,ascii,cat,cry,dog,fact,hug,joke,kiss,kpop,math,meme,mw,neko,pat,punch,slap\`<a:fun:746693872893165569>

<a:arrowright:746687100178661396> __**INFORMATION COMMANDS**__ <a:larrow:746692948057522217>
\`avatar,botinfo,serverinfo,hastebin,imdb,membercount,ping,pokemon,servericon,,whois,userinfo\`<a:info:746693700939153488>

<a:arrowright:746687100178661396> __**MUSIC COMMANDS**__ <a:larrow:746692948057522217>
\`play,search,skip,stop,pause,resume,nowplaying,queue,volume\`<a:MusicDance:746694040669650964>

<a:arrowright:746687100178661396> __**NSFW COMMANDS**__ <a:larrow:746692948057522217>
\`nahi hai\`<a:Nikal_pehli_fursat:742237977278808114>

<a:arrowright:746687100178661396> __**WELCOME COMMANDS**__ <a:larrow:746692948057522217>
\`setwelcome,setmessage\`<a:Welcome:746694465560903781>

<a:arrowright:746687100178661396> __**SPECIAL COMMANDS**__ <a:larrow:746692948057522217>
\`giveaway,math,announce,emoji,\`<a:TheSquirtle:746694921486073894>
 
NEW COMMAND SOON LIKE RANK SYSTEM,RADIO,GLOBAL CHAT,SOME COMMANDS ARE NOT WORKING 
`)

      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#35CB31")
      .setFooter(`SENPAI BOT `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react("🇮🇳");
  }
};
