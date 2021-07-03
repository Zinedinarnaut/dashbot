const Discord = require('discord.js')
const BaseCommand = require('../../utils/structures/BaseCommand');
const mongoose = require('mongoose')
fetch = require('node-fetch');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('github', 'help', ['git']);
  }

  async run(client, message, args, data) {
    let user = !args[0] ? "zinedinarnaut" : args[0];
      let repo = !args[1] ? "z_t0ht" : args[1];

      // Fetch repository from github API
      let uri = await fetch(`https://api.github.com/repos/${user}/${repo}`);

      // Check the fetch status, if it's 200 then return embed with information
      if(uri.status === 200){
        let uriJson = await uri.json();
        let embed = new Discord.MessageEmbed()
        .setAuthor(uriJson.owner.login, uriJson.owner.avatar_url)
        .setDescription(`${uriJson.description}\n[Repository Link](${uriJson.html_url})\n`)
        .addField("Repo Name :notepad_spiral:", `${uriJson.name}`, true)
        .addField("Stars :star:", `${uriJson.stargazers_count}`, true)
        .addField("Forks :gear:", `${uriJson.forks}`, true)
        .addField("Language :desktop:", `${uriJson.language}`, true)
        .setImage(uriJson.owner.avatar_url)
        .setTimestamp()
        return message.channel.send(embed)
      }else{
        // If fetch status isn't 200 then return error
        return message.channel.send("Unable to find the mentioned repository. Please make sure you have entered the correct user/repository. `D!github [user] [repository]`")
      }
  }
}