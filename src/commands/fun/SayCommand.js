const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', ['say']);
  }

  async run(client, message, args) {
    const messageTosay = args.join(" ");
      message.delete()
     const sayEmbed = new Discord.MessageEmbed()
      .setTitle(`${messageTosay}`)
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setColor("#RANDOM")
      .setTimestamp();
      try {
        await message.channel.send(sayEmbed); 
      }catch (err) {
        console.log(err);
        message.channel.send('i am not able to say that message.');
      }
  }
}