const commando = require('discord.js-commando');

class encourage extends commando.Command {

    constructor(client) {
            super(client, {
            name: 'encourage',
            group: 'reply',
            memberName: 'reply',
            description: 'gives a reply'
        });
    }

    async run(message, args) {
        var random = Math.floor(Math.random() * 5);
        var speech = [
            " have a nice day.",
            " you're looking nice.",
            " you can do it!",
            " look's like you've been hitting the gym.",
            " looking fresh as always."
        ];

        message.reply(speech[random]);
    }
}

module.exports = encourage;