const db = require("quick.db");
const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const slotItems = ["<:Grape:800852552190394388>", "<:Watermelon:800852553939419137>", "<:Orange:800852553226125333>", "<:Apple:800852554274570280>", "<:Seven:800852553210003466>", "<:Strawberry:800852552979710024>",  "<:Cherries:800852554233151499>"];

module.exports = class SlotsCommand extends BaseCommand {
  constructor() {
    super('slots', 'Economy', ['slots']);
  }

  async run(client, message, args) {
 let user = message.author;
    let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

    let moneymore = new MessageEmbed()
    .setColor("RED")
    .setTitle(`Error`)
    .setDescription(`You are betting more than you have`);

    let moneyhelp = new MessageEmbed()
    .setColor("RED")
    .setTitle(`Error`)
    .setDescription(`Please provide an amount to continue this command`);

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let i = []
    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new MessageEmbed()
            .setTitle(`Won`)
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou won **${money}** coins`)
            .setColor("#3fb97c")
        message.channel.send(slotsEmbed1)
        db.add(`money_${message.guild.id}_${user.id}`, money)
    } else {
        let slotsEmbed = new MessageEmbed()
            .setTitle(`Lost`)
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou lost **${money}** coins`)
            .setColor("RED")
        message.channel.send(slotsEmbed)
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
    }

}
}