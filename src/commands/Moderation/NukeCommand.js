const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('nuke', 'moderation', ['nuke']);
  }

  async run(client, message, args) {
     if (!message.member.permissions.has('ADMINISTRATOR'))
            return message.reply('You do not have the permission to use this!');
        let clearchannel = message.channel || message.channel.mentions.first()
        const clonedChannel =  clearchannel.clone()
        clearchannel.delete()

        const embed = new Discord.MessageEmbed()
        .setTitle(`Channel successfully nuked!`)
        .setDescription(`This channel was nuked by <@${message.author.id}>!`)
        .setColor(`RANDOM`)
        .setImage('https://media.tenor.com/images/6e470af0a0fd69c4ff213a8de0bc7c5d/tenor.gif')
        message.channel.send("", embed).then(msg => msg.delete({timeout: 10000}))
  }
}