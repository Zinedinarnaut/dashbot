const db = require("quick.db");
const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const ms = require("parse-ms");

module.exports = class StoreCommand extends BaseCommand {
  constructor() {
    super('store', 'Economy', ['store']);
  }

  async run(client, message, args) {
   let embed = new MessageEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: 3500 Coins [D!buy bronze]\n\n**Lifestyle Items**\n\nFresh Nikes: 600 [D!buy nikes]\nCar: 800 [D!buy car]\nMansion: 1200 [D!buy mansion]")
    .setColor("#FFFFFF")
    message.channel.send(embed)
}
}