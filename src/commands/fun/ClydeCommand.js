const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require('node-fetch');

module.exports = class ClydeCommand extends BaseCommand {
  constructor() {
    super('clyde', 'fun', ['clyde']);
  }

  async run(client, message, args) {
   // Get message
    const text = args.join(' ')

    try {
    const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`));
		const json = await res.json();
		// send image
		const embed = new MessageEmbed()
			.setColor(3447003)
			.setImage(json.message);

		message.channel.send(embed);
    } catch (err) {
      console.log(err)
    }
  }
}