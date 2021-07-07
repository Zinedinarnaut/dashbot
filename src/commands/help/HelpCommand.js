const Discord = require('discord.js')
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'help', ["yardım", "ayuda", "helpen", "助けて", "tasukete"]);
  }

  async run(client, message, args) {
    message.delete({ timeout: 0 })
    const embed = new Discord.MessageEmbed()
    .setColor('#RANDOM')
    .addField('server', `[🔗 Link](https://discord.gg/JNjHd8NM4J)`, true)
    .addField('docs', "[:link: Link](https://docs.dashbot.ml)", true)
    .addField('status', "[:link: Link](https://status.dashbot.ml)", true)
    .setImage('https://cdn.discordapp.com/attachments/732976619995791403/830042516753219594/grey_wave.png')
    message.reply("", embed).then(msg => msg.delete({timeout: 40000}))
  }
}