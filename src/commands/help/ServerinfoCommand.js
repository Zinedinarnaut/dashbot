const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class ServerinfoCommand extends BaseCommand {
  constructor() {
    super('serverinfo', 'help', []);
  }

  run(client, message, args) {
    const role = message.guild.roles.size;
    
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
      const embed = new Discord.MessageEmbed()
       .setAuthor(message.guild.name, message.guild.iconURL)
       .setColor(0x00A2E8)
       .setDescription(`Owner: ${message.guild.owner.user.tag} (${message.guild.owner.id})`)
       .addField('Member Count', `${message.guild.memberCount}`, true)
       .addField('Server Region', message.guild.region)
       .addField('Created At', message.guild.createdAt.toLocaleString(), true)
       .addField("Verification Level: ", `${verificationLevels[message.guild.verificationLevel]}`)
       .addField('Roles', role, true)
       message.channel.send(embed) 
  }
}