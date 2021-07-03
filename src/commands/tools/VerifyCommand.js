const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const BaseCommand = require('../../utils/structures/BaseCommand');
const { v4 } = require('uuid');

const reportID = v4();

module.exports = class VerifyCommand extends BaseCommand {
  constructor() {
    super('verify', 'tools', []);
  }

  async run(client, message, args) {
    if (!message.guild.me.hasPermission("MANAGER_ROLES")) return message.channel.send("I require \` MANAGE_ROLES\` permission.");

    const role = message.guild.roles.cache.get('830976963484450847');
    const embed = new Discord.MessageEmbed()
    .setColor('#RANDOM')
    .setTitle('**You have been Verified**')
    message.channel.send(embed)
    const logEmbed = new MessageEmbed()
    .setTitle(`${message.author} has been verified`)
    .addField("UUID:", `||${reportID}||`)
    .setColor("#RANDOM")
    .setTimestamp()
    client.channels.cache.get('852830372156276736').send(logEmbed)
    await message.member.roles.add(role.id).catch(err => console.log(err));
  }
}