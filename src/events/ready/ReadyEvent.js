const BaseEvent = require('../../utils/structures/BaseEvent');
module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    setInterval(() => {
    client.user.setActivity(`${client.guilds.cache.size} servers! ` + "| DB!help") + `${client.users.cache.size} users! `; 
    }, 1500000);
    console.log(client.user.tag + ' has logged in.');
  }
}