const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', ['kick']);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("you cannot use this command.");
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No reason Given";
    const kickEmbed = new Discord.MessageEmbed()
      .setTitle(`You were kicked from ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor("#RANDOM")
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());

      if (!args[0]) return message.channel.send("You need to state a user to kick. \`D!kick @user reason");
      if (!mentionedMember) return message.channel.send("The member mentioned is not in the server.");
      if (!mentionedMember.kickable) return message.channel.send('i cannot kick that memeber');
      try {
        await mentionedMember.send(kickEmbed);
      }  catch (err) {
        console.log(`I was unable to message the member`);
      }
      
      try {
        await mentionedMember.kick(reason);
      } catch (err) {
        console.log(err);
        return message.channel.send("I was unable to kick the mentioned memeber")
      }
  }
}