var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var images = [];

function scrapeSite(url){
console.log(url);
  request(url, function(err, res, body){

      if (err) console.log(err);

      var $ = cheerio.load(body);

      var child = '.lazy';
      var parent = '.productGroup';

        $(child, parent).each(
          function(){
            if (this) {
              console.log(this.attribs)
            }
        }); // .each end



  }); //request end
}; //scrapeSite end

scrapeSite('http://www.guitarcenter.com/DJ-Gear.gc');
