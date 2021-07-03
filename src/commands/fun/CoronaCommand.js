const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const axios = require('axios');

module.exports = class CoronaCommand extends BaseCommand {
  constructor() {
    super('corona', 'fun', ['corona']);
  }

  async run(client, message, args) {
    const baseUrl = "https://corona.lmao.ninja/v2";

        let url, response, corona;

        try {
            url = args[0] ? `${baseUrl}/countries/${args[0]}`:`${baseUrl}/all`
            response = await axios.get(url)
            corona = response.data
        } catch (error) {
            return message.channel.send(`***${args[0]}*** doesn't exist, or data isn't being collected`)
        }

        const embed = new MessageEmbed()
            .setTitle(args[0] ? `${args[0].toUpperCase()} Stats` : 'Total Corona Cases World Wide')
            .setColor('#fb644c')
            .addFields(
                {
                    name: 'Total Cases:',
                    value: corona.cases.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total Deaths:',
                    value: corona.deaths.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total Recovered:',
                    value: corona.recovered.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Active Cases:',
                    value: corona.active.toLocaleString(),
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: 'Critical Cases:',
                    value: corona.critical.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Today Recoveries:',
                    value: corona.todayRecovered.toLocaleString().replace("-", ""),
                    inline: true
                },
                {
                    name: 'Todays Deaths:',
                    value: corona.todayDeaths.toLocaleString(),
                    inline: true
                })

        await message.channel.send(embed)
    }
};