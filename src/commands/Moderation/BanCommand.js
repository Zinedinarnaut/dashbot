const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'moderation', ['ban']);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to ban someone.");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("My role does not have the ban permission.");

    let reason = args.slice(1).join(' ');
    const mentionedMember = message.mentions.members.first();


    if (!reason) reason = 'No reason given.';
    if (!args[0]) return message.channel.send('you must state someone to unban. | D!ban @user reason');
    if (!mentionedMember) return message.channel.send('The member mentioned is not in the server.');
    if (!mentionedMember.bannable) return message.channel.send('i cannot ban that memeber');

    const banEmbed =  new Discord.MessageEmbed()
      .setTitle(`You have been banned from ${message.guild.name}`)
      .setDescription(`Reason for being banned ${baned}`)
      .setColor("#RANDOM")
      .setTimestamp();

      await mentionedMember.send(banEmbed).catch(err => console.log(err));
      await mentionedMember.ban({
        days: 7,
        Reason: reason
      }).catch(err => console.log(err)).then(() => message.channel.send("Successfully banned " + mentionedMember.user.tag));
  }
}