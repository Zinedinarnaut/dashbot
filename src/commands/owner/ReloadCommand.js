const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const { exec } = require("child_process");

module.exports = class ReloadCommand extends BaseCommand {
  constructor() {
    super('reload', 'owner', ['reload']);
  }

  async run(client, message, args) {
    	 const glob = require('glob')
    	if (message.author.id != '459960044570804224') return message.channel.send(`This command can only be used by the owner`); {
            exec(`git pull $url`, (error, stdout) => {
                let response = (error || stdout)
                if (error) {
                    const erro = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle('🎄╎Terminal')
                        .setDescription(`\`\`\`kt${error.message}\`\`\``)
                        .setTimestamp();
                    message.channel.send(erro)
                } else {
                    const result = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle('🎄╎Terminal')
                        .setDescription(`\`\`\`kt
${response}\`\`\``)
                        .setTimestamp();
                    message.channel.send(result)
                    client.commands(() => true)
        glob(`${__dirname}/../**/*.js`, async (err, filePaths) => {
            if (err) return message.reply(
                new MessageEmbed()
                    .setTitle("Reload Error")
                    .setDescription(`\`\`\`${err.stack}\`\`\``)
                    .setColor("ff0000")
                    .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
            );
            filePaths.forEach((file) => {
                delete require.cache[require.resolve(file)];
                let pull = require(file);

                if (pull.name) {
                    client.commands.set(pull.name, pull);
                }

                if (pull.aliases && Array.isArray(pull.aliases)) {
                    pull.aliases.forEach((alias) => {
                        client.aliases.set(alias, pull.name)
                    })
                }
            })
        })

        message.reply(
            new MessageEmbed()
                .setTitle('Reload Success!')
                .setColor('GREEN')
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
        )
                }
            })
        }
    }
}
