const { Client } = require('discord.js');
const Discord = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const GuildConfig = require('./database/schemas/GuildConfig');
const mongoose = require('mongoose');
const db = require("quick.db");
const { exec } = require("child_process")
const client = new Client();

const disbot = require("disbotlist");
const dbl = new disbot("mdkqhqKtfqmvfrcvBzsOXoIc", client);
client.commands = new Discord.Collection()
// var section
var DanBotHosting = require("danbot-hosting");

mongoose.connect( 'mongodb+srv://zinedin:arnaut1516@cluster0.zkt6z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);
})();

client.on("ready", async () => {
  const API = new DanBotHosting.Client("danbot-loe07r", client);
 
  // Start posting
  let initalPost = await API.autopost();
 
  if (initalPost) {
    console.error(initalPost); // console the error
  }
});

client.on("ready", async () => {
  dbl.serverCount();
  console.log("Server count posted")
  
  let hasVote = await dbl.hasVoted("835752600145887232");
  if(hasVote === true) {
    console.log("Voted")
  } else {
    console.log("Vote please.")
  }
  
  
  let search = await dbl.search("828523508833058867")
  console.log(search)
  /*
  {
    avatar: '',
    botID: '',
    username: '',
    discrim: '',
    shortDesc: '',
    prefix: '! [changable]',
    votes: 31,
    ownerID: '',
    owner: '',
    coowners: [ '' ],
    tags: [ 'Moderation', 'NSFW', 'Music' ],
    longDesc: longDesc,
    certificate: 'Certified'
  }
  */
});

client.on('message', async message => {
    if (!message.content.startsWith(config.prefix)) return;


    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    let checkingBlacklistedMembers = db.fetch(`blacklisted_${message.author.id}`)
    if (checkingBlacklistedMembers === null) {
        checkingBlacklistedMembers === false
    }


    let blacklistedEmbed = new Discord.MessageEmbed()
        .setTitle("YOU HAVE BEEN BLACKLISTED")
        .setColor('#FF0000')
        .setDescription("You have been blacklisted from my commands. If you wish to appeal, please DM <@459960044570804224> for more info.")
        .setFooter(`${client.user.username}`, client.user.avatarURL())

    if (checkingBlacklistedMembers === true) return message.channel.send(blacklistedEmbed)

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;
    try {
        command.execute(message, args, client);
        console.log(chalk.greenBright('[COMMAND]'), `${message.author.tag} used the command ` + commandName)
    } catch (error) {
        console.log(error);
        message.reply('there was an error trying to execute that command! ```\n' + error + "\n```");
    }
});

client.on('ready', () => {
    setInterval(() => {
        exec(`git pull`, (error, stdout) => {
            let response = (error || stdout);
            if (!error) {
                if (response.includes("Already up to date.")) {
                    console.log('Bot already up to date. No changes since last pull')
                } else {
                    client.channels.cache.get('857948202111729735').send('**[AUTOMATIC]** \nNew update on GitHub. Pulling. \n\nLogs: \n```' + response + "```" + "\n\n\n**Restarting bot**")
                    setTimeout(() => {
                        process.exit();
                    }, 1000)
                }
            }
        })
    }, 100000)
});