const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to unban someone.");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("My role does not have the ban permission.");

    let reason = args.slice(1).join(' ');
    let userID = args[0];


    if (!reason) reason = 'No reason given.';
    if (!args[0]) return message.channel.send('you must state someone to unban. | D!unban ID reason');
    if (isNaN(args[0])) return message.channel.send('The id stated is not a number. \'D!unban ID reason');

    message.guild.fetchbans().then(async bans => {
      if (bans.size == 0) return message.chanel.send('This server does not have anyone bannel');
      let bUser = bans.field(b => b.user.id == userID);
      if (!bUser) return message.channel.send('The user ID stated is not banned');
      await message.guild.memebers.unban(bUser.user, reason).catch(err => {
        console.log(err);
        return message.channel.send('something went wrong unbanning the id.');
      }).then(() => {
        message.channel.send(`Successfully UnBanned ${args[0]}`);

      });
    });

  }
}