const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BallCommand extends BaseCommand {
  constructor() {
    super('dramagen', 'fun', ['dramagen']);
  }

  async run(client, rp, cheerio, message, args) {
        const URL = "https://drama.gg/generator/api/";
     const headerObj = {
       uri: URL
     }


     rp(headerObj)
     .then((html)=>{
       var $ = cheerio.load(html)
       const header = $('body')
       .text()
       .trim();
      const drama = new Discord.MessageEmbed()
      .setColor('#55ff55')
      .setTitle('Drama generator')
      .addFields(
        {name: 'Something coming...', value: header}
      )
      message.channel.send(drama)
     }).catch((err)=>{

      console.log(err)

     })
    }
}