const Discord = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BugCommand extends BaseCommand {
  constructor() {
    super('bug', 'fun', ['bug']);
  }

  async run(client, message, args) {
    const suggestchannel = client.channels.cache.find(channel => channel.id === "829631594360471634")
        if (!args[0]) return message.channel.send("Please do: `D!bug (message)`")
        
     const guild = message.guild
     const wc = new Discord.WebhookClient('856846531650781204', 'NKOQJcFScvJhKqujc22VTbCEtRbadfLacdXem8DtUO_SLCA-JppHyryY6A9qccgCqQfe'); 
        const suggestembed = new Discord.MessageEmbed()
            .setColor("#fba41c")
            .setTitle('New issue has appeared')
            .setDescription(`**Bug:** ${args.slice(0).join(' ')}\n\n`)
            .addField('Owner Info', `${message.author.tag} • \`${message.author.id}\``)
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .setTimestamp()
        wc.send({
            username: message.author.tag,
            avatarURL: message.author.displayAvatarURL({ dynamic: true }),
            embeds: [suggestembed]

        })
        
      if (message.guild.id === "829631176367931413") return message.channel.send('Bug Report Added!')
        const suggestionadded = new Discord.MessageEmbed()
            .setColor("#fba41c")
            .setTitle('Reported!')
            .setDescription("Your bug report got added in the [Support Server](https://gamer-bot.xyz/support)")
            
            message.channel.send(suggestionadded)
            
  }
}