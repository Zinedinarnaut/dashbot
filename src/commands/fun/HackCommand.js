const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HackCommand
extends BaseCommand {
  constructor() {
   super('hack', 'fun', ['hack']);
  }
  
  async run(client, message, args) {
         const user = message.mentions.users.first() 

        if(!user) return message.channel.send('Please provide a user to hack') 
        if(user) {
         const emails = ["bestguy@gmail.com",
        "discord1234@hotmail.com", 
        "iliketoeatwood34@gmail.com",
        "fatdiscorddev@outlook.com",
        `${user.username}_is_single@gmail.com`,
        "someone@poo.com",
        "Icandostuff@Moonmail.com",
        `plsbjall@dank.memer` ]

         const emailRandomiser = Math.floor((Math.random()* emails.length));

         const passwords = [`${user.username}iscool123`, 
         "1234567890", 
         "P@SSW0RD",
         "plsmaikmebot",
         "holykekw",
         "nabkekw",
        "10293mdf73tr24t",
        "plsbeg"]

         const passowrdRandomiser = Math.floor((Math.random()* passwords.length));

         const ips = ["123.413.523.643", 
         "3.19.19.19.19.19",
         "69.69.69.69.69",
        "127.0.0.1"]
         const ipRandomiser = Math.floor((Math.random()* ips.length));

         const msg = await message.channel.send(`Hacking ${user.tag}`);

         setTimeout(() => {
            msg.edit(`  __**Found Info!**__
        **Email:** \`${emails[emailRandomiser]}\`
        **Password:** \`${passwords[passowrdRandomiser]}\`
        **IP:** \`${ips[ipRandomiser]}\` 
                                              `)
            
         }, 5000)

        }
        
        
    }
}   
