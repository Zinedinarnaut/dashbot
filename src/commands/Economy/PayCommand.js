const db = require("quick.db");
const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const ms = require("parse-ms");
let CheckMark = "<:CheckMark:800254283873648641>"
let XMark = "<:XMark:800254284179963924>"

module.exports = class PayCommand extends BaseCommand {
  constructor() {
    super('pay', 'Economy', ['pay']);
  }

  async run(client, message, args) {
 let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)

  let embed1 = new MessageEmbed()
  .setColor("RED")
  .setTitle(`Error`)
  .setDescription(`Please provide a user to pay`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new MessageEmbed()
  .setColor("RED")
  .setTitle(`Error`)
  .setDescription(`Please provide an amount of money you'll like to pay ${user.user}`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new MessageEmbed()
  .setColor("RED")
  .setTitle(`Error`)
  .setDescription(`Damn, you can only send valid money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new MessageEmbed()
  .setColor("RED")
  .setTitle(`Error`)
  .setDescription(`Looks like you're too poor...`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new MessageEmbed()
  .setColor("#3fb97c")
  .setTitle(`Payed!`)
  .setDescription(`You have sent ${user.user} ${args[1]} dollars!`);

  message.channel.send(embed5)
  db.add(`money_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])

}
}