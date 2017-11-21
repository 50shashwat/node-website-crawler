const scrape = require('website-scraper');

let options = {
    urls: ['http://example.com/theme.html'],
    directory: './theme-folder',
    recursive: true,
    maxDepth: 2
};

scrape(options).then((result) => {
    console.log("Webpages succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});
