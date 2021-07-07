const Discord = require('discord.js')
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ServersCommand extends BaseCommand {
  constructor() {
    super('servers', 'owner', ['serv']);
  }

  async run(client, message, args) {
    const embed = new Discord.MessageEmbed()
    .setDescription('DISCORD SERVERS')
    .addField(`Servers`, client.guilds.cache.map(g => `**${g.name}** [${g.memberCount} Members]\n`).join(""))
 
    if(message.author.id !== "459960044570804224") return message.channel.send(`This command can only be used by the owner`)
    
    const embed2 = new Discord.MessageEmbed()
    .setTitle('Check your secret dms')
    message.channel.send(embed2)
    message.author.send("", embed).then(msg => msg.delete({timeout: 40000}))
  }
}
