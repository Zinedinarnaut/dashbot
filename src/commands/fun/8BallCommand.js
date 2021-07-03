const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const answers = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
];

module.exports = class BallCommand extends BaseCommand {
  constructor() {
    super('8ball', 'fun', ['8ball']);
  }

  async run(client, message, args) {
     const question = args.join(' ');
    if (!question) return message.channel.send('Please provide a question to ask');
    let botIcon = client.user.displayAvatarURL();
    const embed = new MessageEmbed()
       .setAuthor("Gamerbot#4815", botIcon)
       .addField('Question', question)
      .addField('Answer', `${answers[Math.floor(Math.random() * answers.length)]}`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("#fba41c");
    message.channel.send(embed);
  }
};