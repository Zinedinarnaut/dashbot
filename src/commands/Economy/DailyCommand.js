const db = require("quick.db");
const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const ms = require("parse-ms");
let CheckMark = "<:CheckMark:800254283873648641>"
let XMark = "<:XMark:800254284179963924>"

module.exports = class DailyCommand extends BaseCommand {
  constructor() {
    super('daily', 'Economy', ['daily']);
  }

  async run(client, message, args) {
  let user = message.author;

  let timeout = 86400000;
  let amount = 200;

  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new MessageEmbed()
    .setColor("RED")
    .setTitle(` Please wait for the Cooldown to drop`)
    .setDescription(`Cooldown: **${time.hours}h ${time.minutes}m ${time.seconds}s** `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new MessageEmbed()
  .setColor("#3fb97c")
  .setTitle(`Received!!`)
  .setDescription(`You have earnt ${amount} coins!`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`daily_${message.guild.id}_${user.id}`, Date.now())


  }
}
}