const { SlashCommandBuilder, userMention, bold } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hug")
    .setDescription("Sends hug to a user!!")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("User to send hugs")
        .setRequired(true)
    ),

  async execute(interaction) {
    const user = interaction.options.getUser("user");
    await interaction.reply({
      content: `About to send a hug to ${user.username}!! 🤗🤗`,
      ephemeral: true,
    });
    await interaction.channel
      .send(`${bold("Sending a hug")} ${userMention(user.id)}!! 🤗🤗`)
      .then((sentMessage) => {
        // Unicode emoji
        sentMessage.react("🤗");
      });
  },
};
