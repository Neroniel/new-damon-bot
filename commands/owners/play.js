const { prefix, bowner } = require("../../config.json");
module.exports = {
  name: "play",
  description: "",
  async run(client, message, args) {
    if (message.author.id !== bowner)
      return message.reply(
        "<:marvel_cross:814596854436069376> | Bot Owner Only Commamd"
      );
    const activity = args.join(" ");
    client.user.setActivity(activity, {
      type: "PLAYING",
      url: "https://discord.gg/wXemeVm"
    });
    message.delete();
    await message.channel.send(`Set Activity PLAYING ${activity}`).then(msg => {
      msg.delete({ timeout: 10000 });
    });
  }
};
