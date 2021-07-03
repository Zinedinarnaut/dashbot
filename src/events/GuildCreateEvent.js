// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildCreate
const BaseEvent = require('../utils/structures/BaseEvent');
const GuildConfig = require('../database/schemas/GuildConfig');
const { MessageEmbed } = require('discord.js')

module.exports = class GuildCreateEvent extends BaseEvent {
  constructor() {
    super('guildCreate');
  }
  
  async run(client, guild, message) {
   try {
    const guildConfig = await GuildConfig.create({
      guildId: guild.id,
    });
    const guildName = guild.name
    const memberCount = guild.members.cache.filter(member => !member.user.bot).size;  
    const ownerName = guild.member(guild.owner) ? guild.owner.toString() : guild.owner.user.tag
    const logEmbed = new MessageEmbed()
    .setTitle("Added To Guild!")
    .setColor("#RANDOM")
    .setTimestamp()
    .setFooter(`Currently in ${client.guilds.cache.size} guilds!`)
    .setThumbnail(guild.iconURL())
   	.addFields(
        { name: 'Guild Info', value: `${guild.name}・` + `\n` + `${guild.id}・` + "**" + ` ${memberCount}` + "**" + '\n' + "members!"},
        { name: 'Owner Info', value: `${ownerName}・` + `\n` + `${guild.ownerID}`},
	)
    client.channels.cache.get('853164396006866954').send(logEmbed)
    let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
  if(channel.type == "text" && defaultChannel == "") {
    if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
      defaultChannel = channel;
    }
  }
})
  const welcomeEmbed = new MessageEmbed()
    .setColor("#3fb97c")
    .setTimestamp()
    .setAuthor(guildName, guild.iconURL())
    .setTitle("Thank You!")
    .setDescription("Hey, There My prefix is "+ "``" + '\n' + "You can do " + "``" + 'D!help' + "``" + " for a Command!")
    .setTimestamp()
    
    defaultChannel.send(welcomeEmbed)
  } catch (err) {
    console.log(err);
    }
  }
}