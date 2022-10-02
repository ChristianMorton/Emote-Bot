const { SlashCommandBuilder, userMention, bold } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("slap")
    .setDescription("Slaps a user!!")
    .addUserOption((option) =>
      option.setName("user").setDescription("User to slap").setRequired(true)
    ),

  async execute(interaction) {
    const user = interaction.options.getUser("user");
    await interaction.reply({
      content: `About to slap ${user.username}!! 👋👋`,
      ephemeral: true,
    });
    await interaction.channel
      .send(`${bold("Slaps")} ${userMention(user.id)}!! 👋👋`)
      .then((sentMessage) => {
        // Unicode emoji
        sentMessage.react("🖕");
      });
  },
};
