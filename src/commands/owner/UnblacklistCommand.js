const Discord = require('discord.js');
const db = require("quick.db");
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BlacklistCommand extends BaseCommand {
  constructor() {
    super('unblacklist', 'owner', ['unblacklist']);
  }

  async run(client, message, args) {
  if(message.author.id !== "459960044570804224") return message.channel.send(`This command can only be used by the owner`); {
    let user = await client.users.fetch(args[0]);
    if(!user) return message.channel.send(`Invalid user or id ._.`);
  
    let fetched = db.get(`blacklist_${user.id}`)
    if(!fetched) {
      return message.channel.send(`This user is not blacklisted`);
    }else{
      db.delete(`blacklist_${user.id}`)
      message.channel.send(`Unblacklisted!`)
    }
  }
 }
}
