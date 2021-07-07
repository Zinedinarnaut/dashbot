const Discord = require('discord.js')
const BaseCommand = require('../../utils/structures/BaseCommand');
const Database = Date.now();

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'help', ['pin']);
  }

  async run(client, message, args) {
    message.delete({ timeout: 0 })
    const embed = new Discord.MessageEmbed()
    .setColor('#RANDOM')
    .addField('🏓Bot Latency', `${Date.now() - message.createdTimestamp}ms`, true)
    .addField('🏓API Latency', `${Math.round(client.ws.ping)}ms`, true)
    .addField('🏓Database Latency', `${message.createdAt - Date.now()}ms`)
    .addField('🏓Shard Latency',`${message.channel.guild.shard.ping}`, true)
    .addField('🏓Guild Shard ID',`${message.channel.guild.shard.id}`, true)
    message.channel.send(embed)
  }
}


