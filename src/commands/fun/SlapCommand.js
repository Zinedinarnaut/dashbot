const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require('node-fetch');

module.exports = class SlapCommand extends BaseCommand {
  constructor() {
    super('slap', 'fun', ['slap']);
  }

  async run(client, message, args) {
   let punched = message.mentions.users.first();
        let user = message.mentions.users.first();
        if (!user)
            return message.channel.send(`Mention a user to slap!`)
        else {
            const author = message.author.username;
            fetch('https://nekos.life/api/v2/img/slap')
                .then(res => res.json())
                .then(json => {
                    const embed = new MessageEmbed()
                        .setImage(json.url)
                        .setTitle(`${message.author.username} slapped ${user.username}`)
                    message.channel.send(embed)
                })
                .catch(err => console.log(err));
        }
    }
}