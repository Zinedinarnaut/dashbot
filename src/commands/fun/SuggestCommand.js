const Discord = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SuggestCommand extends BaseCommand {
  constructor() {
    super('suggest', 'fun', ['suggest']);
  }

  async run(client, message, args) {
     const suggestchannel = client.channels.cache.find(channel => channel.id === "829631495504396308")
        if (!args[0]) return message.channel.send("Please do: `D!suggest <Suggestion>`")
    
    const guild = message.guild
    const wc = new Discord.WebhookClient('856840706270036008', '3TUZi_QQHs5rzpSaR-mnUEI7k89_yEOub0dpeKX2XJzP7fcciJM0hpJk5bcLybWujlpo');

     const suggestembed = new Discord.MessageEmbed()
            .setColor("#fba41c")
            .setTitle('Suggestion!')
            .setDescription(`**Suggestion:** ${args.slice(0).join(' ')}\n\n`)
            .addField('Owner Info', `${message.author.tag} • \`${message.author.id}\``)
            .setThumbnail(guild.iconURL({ dynamic: true }))
            .setTimestamp()
        wc.send({
            username: message.author.tag,
            avatarURL: message.author.displayAvatarURL({ dynamic: true }),
            embeds: [suggestembed]

        })
  
   if (message.guild.id === "829631176367931413") return message.channel.send('Suggestion Added!')
        const suggestionadded = new Discord.MessageEmbed()
            .setColor("#fba41c")
            .setTitle('Suggested!')
            .setDescription("Your suggestion got added in the support server")
            
            message.channel.send(suggestionadded)
            
  }
}