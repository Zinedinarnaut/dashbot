const { Client } = require('discord.js');
const Discord = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const GuildConfig = require('./database/schemas/GuildConfig');
const mongoose = require('mongoose');
const client = new Client();


const disbot = require("disbotlist");
const dbl = new disbot("mdkqhqKtfqmvfrcvBzsOXoIc", client);

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