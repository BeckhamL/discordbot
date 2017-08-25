const commando = require('discord.js-commando');

class pick extends commando.Command {  

    constructor(client){

        super(client, {
            name: 'pick',
            group: 'random',
            memberName: 'pick',
            description: 'given a set of choices, a random one will be selected'
        });
    }

    async run(message, args) {

        var values = message.content.split(/\s+/g);
        var length = values.length-1;

        var min = 1;
        
        var random = Math.floor(Math.random() * (length - min)) + min;

        message.channel.send("I have randomly selected " + "\"" + values[random] + "\"");

    }
}

module.exports = pick;