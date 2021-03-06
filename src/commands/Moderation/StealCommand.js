const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('steal', 'moderation', ['steal']);
  }

  async run(client, message, args) {
   if (!message.member.permissions.has("MANAGE_EMOJIS")) 
        return message.channel.send(`you don't have the permission to do this  `);

        const emoji = args[0];
        if (!emoji) return message.channel.send(`please provide an emoji to steal `);

        let customemoji = Discord.Util.parseEmoji(emoji);
        if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? "gif" : "png"
                }`;
            const name = args.slice(1).join(" ");
            try {
                const Added = new Discord.MessageEmbed()
                    .setColor(message.member.displayHexColor)
                    .setTitle(` Emoji Added`)
                    .setDescription(
                        `Emoji Has Been Added! \nName : ${name || `${customemoji.name}`} \nPreview : [Click Me](${Link})`
                    );
                await message.guild.emojis.create(
                    `${Link}`,
                    `${name || `${customemoji.name}`}`
                )
                return message.channel.send(Added)
            } catch (err) {
                console.log(err)
                return message.channel.send(`An error has occured!\n\n**Possible Reasons:**\n\`\`\`- This server has reached the emojis limit\n- The bot doesn't have permissions.\n- The emojis size is too big.\`\`\``)

            }
        } else {
            let CheckEmoji = parse(emoji, { assetType: "png" });
            if (!CheckEmoji[0])
                return message.channel.send(`please give me a vlid emoji! Don't try to break me :eyes:`);
            message.channel.send(
                `you don't need to steal default emojis `
            );
        }
  }
}