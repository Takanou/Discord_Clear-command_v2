const { Command } = require('discord.js-commando');
const Discord = require('discord.js')
const config = require("../../config.json");

module.exports = class SetMemberCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'clear',
            group: 'clear', 
            memberName: 'clear',
            description: 'clear command',
            ownerOnly: false, 
            guildOnly: false
        });
    }

    async run(message) {
        if (message.guild.name == (`${config.guild_name}`)){
            if(message.member.hasPermission('MANAGE_MESSAGES')){           
                let args = message.content.trim().split(/ +/g);
                if(args[1]){
                    if(!isNaN(args[1]) && args[1] >= 1 && args[1] <=99){
                        message.channel.bulkDelete(args[1])                
                    }
                    else{
                        message.channel.send('[ERROR] Maximum delete messages = 99 !')
                    }
                }
                else{
                    message.channel.send('[ERROR] Choose the number of messages to delete, maximum 99 !')
                }
            }
            else{
                message.channel.send('[ERROR] You must have permission to use this command !')
            }
        };
    };
}