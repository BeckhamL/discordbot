const commando = require('discord.js-commando');

class scrape extends commando.Command {

    constructor(client){

        super(client, {
            name: 'scrape',
            group: 'data',
            memberName: 'scrape',
            description: 'given a reddit link, this command will scrape the top post'

        });
    }

    async run(message, args) {
        message.channel.send("You rolled a ");
    }
}

module.exports = scrape;