const { SlashCommandBuilder, userMention, bold } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("love")
    .setDescription("Sends love to a user!!")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("User to send love")
        .setRequired(true)
    ),

  async execute(interaction) {
    const user = interaction.options.getUser("user");
    await interaction.reply({
      content: `About to send love to ${user.username}!! 💞💞`,
      ephemeral: true,
    });
    await interaction.channel
      .send(`${bold("Sending love")} ${userMention(user.id)}!! 💞💞`)
      .then((sentMessage) => {
        // Unicode emoji
        sentMessage.react("🧡");
        sentMessage.react("💛");
        sentMessage.react("💚");
        sentMessage.react("💙");
        sentMessage.react("💜");
        sentMessage.react("🤎");
        sentMessage.react("🖤");
        sentMessage.react("🤍");
      });
  },
};
