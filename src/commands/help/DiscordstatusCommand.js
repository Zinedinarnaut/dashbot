const Discord = require('discord.js')
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DiscordStatusCommand extends BaseCommand {
  constructor() {
    super('discordstatus', 'help', ["ds"]);
  }

  async run(client, message, args) {
    message.delete({ timeout: 0 })
    const embed = new Discord.MessageEmbed()
    .setColor('GREY')
    .addField('Status', `🟢`, true)
    .addField('All Systems Operational', 'Everything is working fine')
    .setImage('https://cdn.discordapp.com/attachments/830202536027226122/831048763857698826/discord.png')
    message.channel.send(embed)
  }
}