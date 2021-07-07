const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ExecCommand extends BaseCommand {
  constructor() {
    super('exec', 'owner', ['exec']);
  }

  async run(client, message, args) {
        if(message.author.id !== "459960044570804224") return message.channel.send(`This command can only be used by the owner`); {
            const { exec } = require("child_process")
            const args = message.content.slice("7")
            exec(`${args}`, (error, stdout) => {
                let response = (error || stdout)
                if (error) {
                    const erro = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':tickets: | Terminal')
                        .setDescription(`\`\`\`kt
${error.message}\`\`\``)
                        .setTimestamp();
                    message.channel.send(erro)
                } else {
                    const result = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':tickets: | Terminal')
                        .setDescription(`\`\`\`kt
${response}\`\`\``)
                        .setTimestamp();
                    message.channel.send(result)
                }
            })
        }
    }
}