const db = require("quick.db");
const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const ms = require("parse-ms");
let CheckMark = "<:CheckMark:800254283873648641>"
let XMark = "<:XMark:800254284179963924>"

module.exports = class RobCommand extends BaseCommand {
  constructor() {
    super('rob', 'Economy', ['rob']);
  }

  async run(client, message, args) {
  let user = message.mentions.members.first()
let targetuser = await db.fetch(`money_${message.guild.id}_${user.id}`)
let author = await db.fetch(`rob_${message.guild.id}_${user.id}`)
let author2 = await db.fetch(`money_${message.guild.id}_${user.id}`)

let timeout = 600000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`You have already robbed someone\n\n Please Try again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {

let moneyEmbed = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You need atleast 200 coins in your wallet to rob someone`);

if (author2 < 200) {
    return message.channel.send(moneyEmbed)

}
let moneyEmbed2 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${user.user.username} does not have anything you can rob`);
if (targetuser < 0) {
    return message.channel.send(moneyEmbed2)
}


let random = Math.floor(Math.random() * 100) + 1;

let embed = new MessageEmbed()
.setDescription(`You robbed ${user} and got away with ${random} coins`)
.setColor("#FFFFFF")
message.channel.send(embed)

db.subtract(`money_${message.guild.id}_${user.id}`, random)
db.add(`money_${message.guild.id}_${user.id}`, random)
db.set(`rob_${message.guild.id}_${user.id}`, Date.now())
  
}
 }
}