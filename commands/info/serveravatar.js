const discord = require("discord.js")

module.exports = {
  name: "servericon",
  aliases: ["serverav", "guildavatar"],
  category: "info",
  description: "Get avatar of the server",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    
      embed.setDescription(`[Download](${message.guild.iconURL({ dynamic: true, size: 1024 })})`)
      embed.setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
      embed.setColor("RANDOM")
    
      message.channel.send(embed)
    
  }
}