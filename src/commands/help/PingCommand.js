const Discord = require('discord.js')
const BaseCommand = require('../../utils/structures/BaseCommand');
const t = Date.now();

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('ping', 'help', ['pin']);
  }

  async run(client, message, args) {
    message.delete({ timeout: 0 })
    const embed = new Discord.MessageEmbed()
    .setColor('#RANDOM')
    .addField('🏓Bot Latency', `${Date.now() - message.createdTimestamp}ms`)
    .addField('🏓API Latency', `${Math.round(client.ws.ping)}ms`)
    .addField('🏓Database Latency', "" + (Date.now() - t) + "ms")
    message.channel.send(embed)
  }
}