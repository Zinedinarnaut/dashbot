const db = require("quick.db");
const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const ms = require("parse-ms");

module.exports = class WeeklyCommand extends BaseCommand {
  constructor() {
    super('weekly', 'Economy', ['weekly']);
  }

  async run(client, message, args) {
let user = message.author;
  let timeout = 604800000;
  let amount = 500;

  let weekly = await db.fetch(`weekly_${message.guild.id}_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new MessageEmbed()
    .setColor("RED")
    .setTitle(`Cooldown`)
    .setDescription(`Cooldown: **${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s** `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new MessageEmbed()
  .setColor("#3fb97c")
  .setTitle(`Received`)
  .setDescription(`You have earnt ${amount} coins!`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())
}}
}