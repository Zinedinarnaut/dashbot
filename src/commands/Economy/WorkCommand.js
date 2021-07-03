const db = require("quick.db");
const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const ms = require("parse-ms");

module.exports = class WorkDepositCommand extends BaseCommand {
  constructor() {
    super('work', 'Economy', ['work']);
  }

  async run(client, message, args) {
 let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new MessageEmbed()
    .setColor("RED")
    .setTitle(`Cooldown`)
    .setDescription(`Cooldown: **${time.minutes}m ${time.seconds}s** `);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic','hacker','IT manager']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new MessageEmbed()
        .setColor("#3fb97c")
        .setTitle(`Worked`)
        .setDescription(`You worked as a **${replies[result]}** and earnt **${amount}** coins`);
        message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    }
}
}