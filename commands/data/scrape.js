const commando = require('discord.js-commando');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var title;
var score;
var link;
var rankScores = [];
var posts = [];
var largest = 0;
var index = 0;

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

        request("https://www.reddit.com/r/2meirl4meirl/", function(error, response, body) {
            if (error) {
              console.log("Error: " + error);
            }
            console.log("Status code: " + response.statusCode);
          
            var $ = cheerio.load(body);
          
            $('div#siteTable > div.link').each(function(index) {
              title = $(this).find('a.title').text().trim();
              score = Number($(this).find('div.score.unvoted').attr('title'));
              rankScores.push(score);
              link = $(this).find('a.title').attr('href');
          
              posts.push('Title:' + title + 'Score:' + score + 'URL:' + link);
          
              fs.appendFileSync('reddit.txt', posts);
            });
          
            for (var i = 0; i < rankScores.length; i++) {
              if (rankScores[i] > largest) {
                largest = rankScores[i];
                index++;
              }
            }
            console.log(posts[index]);
          });
    }
}

module.exports = scrape;