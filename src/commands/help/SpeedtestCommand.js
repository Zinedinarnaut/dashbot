const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const speedTest = require('speedtest-net');

module.exports = class SpeedtestCommand extends BaseCommand {
  constructor() {
    super('speedtest', 'help', ['test']);
  }

  run(client, message, args) {
    const embed = new Discord.MessageEmbed()
    .addField(`__**Please wait...**__`, `This could take 20 - 40seconds \n __We are running a speedtest for you!__`, true);
    let msg = message.channel.send(embed).then(msg => msg.delete({timeout: 6000}))
    const speed = speedTest({maxTime: 6000, serverId: "4848"});
    speed.on('data', async (data) => {
        embed.fields.pop()
            embed.addField('---------------------------------------------------------------------------------------', '__**Speedtest Data**__')
            embed.addField(`**Ping**`, `${data.server.ping}ms`, true)
            embed.addField('**Download Speed**', `${data.speeds.download} Mbps`, true)
            embed.addField('**Upload Speed**', `${data.speeds.upload} Mbps`, true)
            embed.addField('**ISP Rating**', `${data.client.isprating}`, true)
            embed.addField('**RAW Download Speed**', `${data.speeds.originalDownload}bytes`, true)
            embed.addField('**RAW Upload Speed**', `${data.speeds.originalUpload}bytes`, true)
            embed.addField('---------------------------------------------------------------------------------------', '__**Server Data**__')
            embed.addField('**Country**', `${data.server.country}`, true)
            embed.addField('**City**', `${data.server.location}`, true)
            embed.addField('**Distance**', `${data.server.distanceMi}Mi`, true)
      message.channel.send(embed)
    }) 
  }
}