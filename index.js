//const Discord = require('discord.js');
const commando = require('discord.js-commando');
const bot = new commando.Client();


bot.registry.registerDefaults();

bot.registry.registerGroups([
        ['random', 'Random'],
        ['reply', 'Reply'],
        ['pick', 'Random'],
        ['data','Data'],
        ['data', "Scrape"]
    ]);

bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('MzM1NjEyNTQyNDgxMjAzMjAw.DEsTDQ.41g6cs9WFlJXxH4Qfo8cFfbjiFo')

