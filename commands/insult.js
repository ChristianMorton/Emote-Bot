const { SlashCommandBuilder, userMention, bold } = require("discord.js");
const { insults } = require("../assets/insults.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("insult")
    .setDescription("Insult a user!!")
    .addUserOption((option) =>
      option.setName("user").setDescription("User to insult").setRequired(true)
    ),

  async execute(interaction) {
    const user = interaction.options.getUser("user");
    var insult = insults[Math.floor(Math.random() * insults.length)];
    await interaction.reply({
      content: `About to insult ${user.username}!! 👋👋`,
      ephemeral: true,
    });
    await interaction.channel
      .send(` ${userMention(user.id)}!! 🖕🖕 \n ${bold(insult)}`)
      .then((sentMessage) => {
        // Unicode emoji
        sentMessage.react("🖕");
      });
  },
};
