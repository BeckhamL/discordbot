const commando = require('discord.js-commando');

var WeatherAPI = require('node-openweathermap');
var apiKey = '7cae9391b895157aa6ea8048b2d95e64';

var combine = [];

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

        var POI = message.content.split(/\s+/g);
        var str;

        if (POI.length > 2) {
            var POIcut = POI.slice(1, POI.length);
            combine.push(POIcut);
            var energy = combine.join();
            str = energy.replace(",", " ");
        }

        else {
            var POIstring = POI.slice(1);
            var str = POIstring.toString();
        }
        
        var opts = {
            location : str,
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