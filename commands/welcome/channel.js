const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "nsetwelcome",
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",

  run: (client, message, args) => {
    let channel = message.mentions.channels.first();
    if (!channel) {
      return message.channel.send("Please Mention the channel first");
    }

    //Now we gonna use quick.db
    db.set(`welchannel_${message.guild.id}`, channel.id);
    message.channel.send(`New Welcome Channel Is ${channel}`);
  }
};
