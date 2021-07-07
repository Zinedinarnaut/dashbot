const Discord = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const mongoose = require('mongoose');
const osu = require('node-os-utils');
const os = require("os");
const cpu = osu.cpu

module.exports = class StatusCommand extends BaseCommand {
  constructor() {
    super('status', 'help', ['stats']);
  }

  async run(client, message, args) {
    message.delete({ timeout: 0 })
    let totalSeconds = (client.uptime / 1000); let days = Math.floor(totalSeconds / 86400); totalSeconds %= 86400; let hours = Math.floor(totalSeconds / 3600); totalSeconds %= 3600; let minutes = Math.floor(totalSeconds / 60); let seconds = Math.floor(totalSeconds % 60)
    const embed = new Discord.MessageEmbed()
    .setTitle('Stats')
    .addField(`Machine Specs:`,`CPU Count: ${osu.cpu.count()}\nCPU Model: ${os.cpus()[0].model}\nCPU Speed: ${os.cpus()[0].speed}MHz${osu.os.platform()}`, true)
    .addField('Shards:', `${message.guild.shardID + 1}`, true)
    .addField('RAM:', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField(`System Specs:`,`System Type: ${osu.os.type()}\nSystem Architecture: ${osu.os.arch()}\nSystem Platform: ${osu.os.platform()}`, true)
    .addField('Discord.js:', `v${Discord.version}`, true) 
    .addField('Nodejs:', `${process.version}`, true) 
    .addField('Servers:', `${client.guilds.cache.size}`, true)
    .setDescription(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's')
    .addField('Mongoose:', `v${mongoose.version}`, true) 
    .addField('Commands:', `${client.commands.size}`, true)
    .addField('Users:', `${client.users.cache.size}`, true) 
    .setImage('https://cdn.discordapp.com/attachments/830202536027226122/855582337646460969/max-res.gif')
    .setFooter('Dashbot')
    .setTimestamp()
    message.channel.send(embed)
  }
}
