const BaseEvent = require('../utils/structures/BaseEvent');
const GuildConfig = require('../database/schemas/GuildConfig');
const { MessageEmbed } = require('discord.js')
module.exports = class GuildDeleteEvent extends BaseEvent {
  constructor() {
    super('guildDelete');
  }
  
  async run(client, guild) {
    try {
    const guildConfig = await GuildConfig.deleteOne({
      guildId: guild.id,
    });
    const memberCount = guild.members.cache.filter(member => !member.user.bot).size;  
    const ownerName = guild.member(guild.owner) ? guild.owner.toString() : guild.owner.user.tag
    const logEmbed = new MessageEmbed()
    .setTitle("Removed From Guild!")
    .setColor("#RANDOM")
    .setTimestamp()
    .setFooter(`Currently in ${client.guilds.cache.size} guilds!`)
    .setThumbnail(guild.iconURL())
   	.addFields(
        { name: 'Guild Info', value: `${guild.name}・` + `\n` + `${guild.id}・` + "**" + ` ${memberCount}` + "**" + '\n' + "members!"},
        { name: 'Owner Info', value: `${ownerName}・` + `\n` + `${guild.ownerID}`},
	)
    client.channels.cache.get('853164410440646676').send(logEmbed)
   } catch (err) {
    console.log(err);
    }
  }
}