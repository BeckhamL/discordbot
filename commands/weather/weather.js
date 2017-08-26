const commando = require('discord.js-commando');

var WeatherAPI = require('node-openweathermap');
var apiKey = '7cae9391b895157aa6ea8048b2d95e64';

class weather extends commando.Command {  

    constructor(client){

        super(client, {
            name: 'weather',
            group: 'weather',
            memberName: 'weather',
            description: 'gives the weather given input of a city'
        });
    }

    async run(message, args) {

        var POI = message.content.split(/\s+/g).slice(1);
        var POIstring = POI.toString();
        
        var opts = {
            location : POIstring,
            temp_unit : 'C'
        };
        
        var weather = new WeatherAPI(apiKey);
        weather.getWeather(opts)
            .then(response => {
            var location = response.name;
            var temperature = response.main['temp'];
            message.channel.send("It is currently " + temperature + " degrees in " + location + ".");
        
            }
        );
        
    }
}

module.exports = weather;