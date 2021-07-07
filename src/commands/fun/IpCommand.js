const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const fetch = require('node-fetch')


module.exports = class MemeCommand extends BaseCommand {
  constructor() {
    super('ip', 'fun', ['ipfind']);
  }

  async run(client, message, args) {
            if(!args[0]) {

                const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`${emoji.no} | You **didnt** put an a **IP** Address.`)
                .setColor(message.guild.me.displayHexColor)
                .setTimestamp()
                .setFooter(client.user.username, client.user.avatarURL())
                return message.channel.send(embed)

            }

            fetch(`http://ip-api.com/json/${args[0]}`)

            
            .then(res => res.json())
            .then(json => {

                const embed = new Discord.MessageEmbed()
                .setTitle('IP LOOKUP')
                .addField(`Country`,`> \`${json.country || 'Unknown'}\``, true)
                .addField(`City`,`> \`${json.city || 'Unknown'}\``, true)
                .addField(`Timezone`,`> \`${json.timezone || 'Unknown'}\``, true)
                .addField(`Region Name`,`> \`${json.regionName || 'Unknown'}\``, true)
                .addField(`ISP`,`> \`${json.isp || 'Unknown'}\``, true)
                .addField(`IP`,`> \`${json.query || 'Unknown'}\``, true)
                .setThumbnail(`https://cache.ip-api.com/${json.lon},${json.lat},10`)
                .setColor(message.guild.me.displayHexColor)
                .setTimestamp()
                message.channel.send(embed)
            })
    }
}