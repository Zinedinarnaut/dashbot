const db = require("quick.db");
const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BalCommand extends BaseCommand {
  constructor() {
    super('balance', 'Economy', ['bal']);
  }

  async run(client, message, args) {
     let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new MessageEmbed()
  .setTitle('💸 | Balance')
  .setColor("#fba41c")
  .setDescription(`\n **User:** ${user}\n**Pocket:** ${bal}\n**Bank:** ${bank}`);
  message.channel.send(moneyEmbed)
}
}