const { MessageEmbed } =require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const mongoose = require('mongoose');
const fetch = require('node-fetch');

module.exports = class InfoCommand extends BaseCommand {
  constructor() {
    super('info', 'help', ['info']);
  }

  async run(client, message, args, data) {
         const ar = args[0]
        const url = "https://danbot.host/sysinfo"
        var body = await fetch(url)
       body = await body.json()
        if (ar && ar.slice(1) <= 10) {
        	const op = args[0].slice(1)
       if(op == 1) {
        const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node1.info.cpu + "\n" + '>' + " " + body.Node1.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node1.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node1.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node1.info.memused + " / " + body.Node1.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node1.info.diskused + " / " + body.Node1.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node1.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node1.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node1.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node1.info.osuptime);
	message.channel.send(air)
	}
	else if (op == 2) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node2.info.cpu + "\n" + '>' + " " + body.Node2.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node2.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node2.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node2.info.memused + " / " + body.Node2.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node2.info.diskused + " / " + body.Node2.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node2.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node2.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node2.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node2.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 3) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node3.info.cpu + "\n" + '>' + " " + body.Node3.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node3.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node3.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node3.info.memused + " / " + body.Node3.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node3.info.diskused + " / " + body.Node3.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node3.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node3.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node3.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node3.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 4) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node4.info.cpu + "\n" + '>' + " " + body.Node4.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node4.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node4.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node4.info.memused + " / " + body.Node4.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node4.info.diskused + " / " + body.Node4.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node4.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node4.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node4.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node4.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 5) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node5.info.cpu + "\n" + '>' + " " + body.Node5.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node5.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node5.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node5.info.memused + " / " + body.Node5.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node5.info.diskused + " / " + body.Node5.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node5.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node5.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node5.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node5.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 6) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node6.info.cpu + "\n" + '>' + " " + body.Node6.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node6.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node6.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node6.info.memused + " / " + body.Node6.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node6.info.diskused + " / " + body.Node6.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node6.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node6.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node6.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node6.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 7) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node7.info.cpu + "\n" + '>' + " " + body.Node7.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node7.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node7.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node7.info.memused + " / " + body.Node7.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node7.info.diskused + " / " + body.Node7.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node7.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node7.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node7.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node7.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 8) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node8.info.cpu + "\n" + '>' + " " + body.Node8.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node8.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node8.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node8.info.memused + " / " + body.Node8.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node8.info.diskused + " / " + body.Node8.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node8.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node8.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node8.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node8.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 9) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node9.info.cpu + "\n" + '>' + " " + body.Node9.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node9.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node9.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node9.info.memused + " / " + body.Node9.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node9.info.diskused + " / " + body.Node9.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node9.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node9.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node9.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node9.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 10) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node10.info.cpu + "\n" + '>' + " " + body.Node10.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node10.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node10.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node10.info.memused + " / " + body.Node10.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node10.info.diskused + " / " + body.Node10.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node10.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node10.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node10.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node10.info.osuptime);
	message.channel.send(air)
		}
        	}
        else if (ar && ar.slice(4) <= 10) {
        	const op = args[0].slice(4)
       if(op == 1) {
        const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node1.info.cpu + "\n" + '>' + " " + body.Node1.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node1.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node1.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node1.info.memused + " / " + body.Node1.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node1.info.diskused + " / " + body.Node1.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node1.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node1.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node1.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node1.info.osuptime);
	message.channel.send(air)
	}
	else if (op == 2) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node2.info.cpu + "\n" + '>' + " " + body.Node2.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node2.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node2.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node2.info.memused + " / " + body.Node2.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node2.info.diskused + " / " + body.Node2.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node2.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node2.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node2.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node2.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 3) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node3.info.cpu + "\n" + '>' + " " + body.Node3.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node3.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node3.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node3.info.memused + " / " + body.Node3.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node3.info.diskused + " / " + body.Node3.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node3.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node3.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node3.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node3.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 4) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node4.info.cpu + "\n" + '>' + " " + body.Node4.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node4.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node4.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node4.info.memused + " / " + body.Node4.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node4.info.diskused + " / " + body.Node4.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node4.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node4.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node4.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node4.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 5) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node5.info.cpu + "\n" + '>' + " " + body.Node5.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node5.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node5.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node5.info.memused + " / " + body.Node5.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node5.info.diskused + " / " + body.Node5.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node5.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node5.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node5.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node5.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 6) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node6.info.cpu + "\n" + '>' + " " + body.Node6.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node6.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node6.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node6.info.memused + " / " + body.Node6.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node6.info.diskused + " / " + body.Node6.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node6.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node6.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node6.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node6.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 7) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node7.info.cpu + "\n" + '>' + " " + body.Node7.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node7.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node7.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node7.info.memused + " / " + body.Node7.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node7.info.diskused + " / " + body.Node7.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node7.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node7.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node7.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node7.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 8) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node8.info.cpu + "\n" + '>' + " " + body.Node8.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node8.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node8.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node8.info.memused + " / " + body.Node8.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node8.info.diskused + " / " + body.Node8.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node8.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node8.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node8.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node8.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 9) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node9.info.cpu + "\n" + '>' + " " + body.Node9.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node9.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node9.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node9.info.memused + " / " + body.Node9.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node9.info.diskused + " / " + body.Node9.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node9.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node9.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node9.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node9.info.osuptime);
	message.channel.send(air)
		}
		else if (op == 10) {
		const air = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
    .addField("💻╎CPU Information", '>' + " " + body.Node10.info.cpu + "\n" + '>' + " " + body.Node10.info.cpuload + "% In Use." +"\n" + '>' + " " + body.Node10.info.cpucores +" Cores" + "\n" + '>' + " " + body.Node10.info.cputhreads + " threads")
    .addField("💿╎Memory Usage", '>' + " " + body.Node10.info.memused + " / " + body.Node10.info.memtotal)
    .addField("💽╎Disk Usage", '>' + " " + body.Node10.info.diskused + " / " + body.Node10.info.disktotal)
    .addField("📡╎Network", '>' + " " + body.Node10.speedtest.ping + "ms" + "\n" +  '>' + " " + "__Download Speed:__" + " " + body.Node10.speedtest.download + " GB/s" + "\n" + '>' + " " + "__Upload Speed:__" + " " + body.Node10.speedtest.upload + " " + "GB/s")
    .addField("📍╎Node Uptime", '>' + " " + body.Node10.info.osuptime);
	message.channel.send(air)
		}
        }
        else {
        	const ikr = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor(message.author.tag , 'https://cdn.discordapp.com/avatars/' + message.author.id + '/'  + message.author.avatar + ".webp")
	.setTimestamp()
	.setDescription("Make sure you use the command in the following format! \`nom info n7\` \nNode11 and above are not avaliable yet!");
	message.channel.send(ikr)
        }
    }
}