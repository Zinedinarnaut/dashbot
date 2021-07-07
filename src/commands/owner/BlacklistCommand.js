const Discord = require('discord.js');
const db = require("quick.db");
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BlacklistCommand extends BaseCommand {
  constructor() {
    super('blacklist', 'owner', ['blacklist']);
  }

  async run(client, message, args) {
      if(message.author.id !== "459960044570804224") return message.channel.send(`This command can only be used by the owner`); {
            let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0])
            let noUser = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setDescription('Please provide a valid user')
                .addField("Usage:", '`blacklist <user> `')
                .setFooter(message.client.user.username, message.client.user.avatarURL())

            if (!User) return message.channel.send(noUser)

            let checkingBlacklisted = db.fetch(`blacklisted_${User.id}`)

            db.set(`blacklisted_${User.id}`, true)
            let blacklistedEmbed = new Discord.MessageEmbed()
                .setDescription('I have blacklisted **' + User + '**')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor('#008000')
                .setFooter(message.client.user.username, message.client.user.avatarURL())

            message.channel.send(blacklistedEmbed)
            if(checkingBlacklisted === true){
                let alreadyBlacklisted = new Discord.MessageEmbed()
                .setDescription('This user is already blacklisted!')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor('#FF0000')
                .setFooter(message.client.user.username, message.client.user.avatarURL())

            return message.channel.send(alreadyBlacklisted)
            }
        }
    }
}