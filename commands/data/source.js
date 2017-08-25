const commando = require('discord.js-commando');

class source extends commando.Command {

    constructor(client){

        super(client, {
            name: 'source',
            group: 'data',
            memberName: 'source',
            description: 'given a link, this command will send source of link'

        });
    }

    async run(message, args) {

    }
}

module.exports = source;